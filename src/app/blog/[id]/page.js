import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { HeartIcon, ZoomInIcon } from "lucide-react";
import Image from "next/image";

export default async function Component({ params }) {
  const data = await fetchBlog(params.id);

  return (
    <div className="min-h-screen py-8 px-8 lg:py-28 bg-background-100">
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={data[0].images[0].publicUrl}
          alt="Featured Image"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center rounded-xl opacity-50"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-text-800">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {data[0].title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:mt-5 sm:text-xl lg:text-2xl">
            {data[0].subheading}
          </p>
          <div className="mt-5 flex items-center text-sm font-medium text-muted-foreground sm:mt-8">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={data[0].volunteers.avatar}
                alt="Author Avatar"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                style={{ aspectRatio: "40/40", objectFit: "cover" }}
              />
            </div>
            <span className="ml-3">
              By{" "}
              <Link href="#" className="hover:underline" prefetch={false}>
                {data[0].volunteers.name}
              </Link>
            </span>
          </div>
        </div>
      </section>
      <article className="container mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <div className="prose prose-lg prose-neutral mx-auto max-w-3xl dark:prose-invert text-text-700">
          <div className="flex items-center justify-between">
            <h2>{data[0].title}</h2>
            <div className="flex items-center gap-2 pb-10">
              <button className="text-red-600">
                <HeartIcon />
                <span className="sr-only">Like</span>
              </button>
              <span className="text-muted-foreground text-black">25</span>
            </div>
          </div>
          <p>{data[0].body}</p>
        </div>
      </article>
      <section className="container mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-text-800">
          Related Images
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data[0].images.map((i, key) => (
            <div
              key={key}
              className="relative h-40 cursor-pointer overflow-hidden rounded-lg"
            >
              <Image
                src={i.publicUrl}
                alt={`Image ${i}`}
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity hover:opacity-100">
                <ZoomInIcon className="h-8 w-8 text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

async function fetchBlog(id) {
  const supabase = createClient();

  const { data: info, error } = await supabase
    .from("blogs")
    .select("*, volunteers (name, avatar)")
    .eq("id", id);

  if (error) {
    throw error;
  }

  const blogsWithImages = await Promise.all(
    info.map(async (blog) => {
      const { data: images, error: imageserr } = await supabase.storage
        .from("blog")
        .list(blog.id);
      if (imageserr) {
        throw imageserr;
      }
      const imagesWithPublicURL = await Promise.all(
        images.map(async (image) => {
          const {
            data: { publicUrl },
          } = supabase.storage
            .from("blog")
            .getPublicUrl(blog.id + "/" + image.name);
          return { publicUrl };
        })
      );

      return { ...blog, images: imagesWithPublicURL };
    })
  );

  return blogsWithImages;
}
