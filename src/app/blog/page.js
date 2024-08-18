import { Blogs } from "@/components/pages/blog";
import { createClient } from "@/utils/supabase/server";

export default async function BlogSection() {
  const data = await fetchBlogs();
  return (
    <section className="min-h-screen py-8 px-8 lg:py-28 bg-background-100">
      <Blogs blogData={data} />
    </section>
  );
}
async function fetchBlogs() {
  const supabase = createClient();
  const { data, error } = await supabase.from("blogs").select("*");
  if (error) {
    throw error;
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
