import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  const data = await fetchBlogs(params.id);

  return (
    <div className="min-h-screen py-8 px-8 lg:py-28 bg-background-100 pt-32">
      <div className="relative w-full h-96 mb-6">
        <Image
          src="/1.avif"
          alt="Blog Image"
          fill
          className="object-cover rounded-md shadow-md"
        />
      </div>

      <div className="flex items-center justify-between mb-6 px-5">
        <button
          // onClick={handleLike}
          className="text-red-600 flex gap-2 items-center"
        >
          <Heart /> <div className="text-black">22</div>
        </button>
        <div className="text-lg flex gap-2 items-center">
          22 <Eye />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">{data[0].title}</h1>
        <p className="text-lg text-text-700 text-left leading-relaxed px-10 md:px-32 pt-3">
          {data[0].body}
        </p>
      </div>
    </div>
  );
}

async function fetchBlogs(id) {
  const supabase = createClient();
  const { data, error } = await supabase.from("blogs").select("*").eq("id", id);

  if (data.length === 0) {
    notFound();
  }

  const blogsWithImages = await Promise.all(
    data.map(async (blog) => {
      const { data: images, error: imageserr } = await supabase.storage
        .from("blog")
        .list(blog.id);
      if (imageserr) {
        throw imageserr;
      }
      const imagesWithPublicURL = await Promise.all(
        images.map(async (image) => {
          supabase.storage.from("blog").getPublicUrl(image.name);
          return { ...image };
        })
      );
      return { ...blog, images: imagesWithPublicURL };
    })
  );

  return blogsWithImages;
}
