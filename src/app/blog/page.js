import { Blogs } from "@/components/pages/blog";
import { createClient } from "@/utils/supabase/server";

const BlogHero = () => (
  <section className="relative py-32 lg:py-40 bg-gradient-to-br from-background-800 via-background-900 to-background-950 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-300 rounded-full mix-blend-overlay filter blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
    <div className="container-custom relative z-10 text-center">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white font-heading">
        Our Blog
      </h1>
      <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed font-paragraph">
        Insights, stories, and updates from our journey of creating positive
        change in communities.
      </p>
    </div>
  </section>
);

export default async function BlogSection() {
  const data = await fetchBlogs();
  return (
    <>
      <BlogHero />
      <section className="section-padding bg-gray-50">
        <Blogs blogData={data} />
      </section>
    </>
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
          const {
            data: { publicUrl },
          } = supabase.storage
            .from("blog")
            .getPublicUrl(`${blog.id}/${image.name}`);
          return { ...image, publicUrl };
        })
      );
      return { ...blog, images: imagesWithPublicURL };
    })
  );

  return blogsWithImages;
}
