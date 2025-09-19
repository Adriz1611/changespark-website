import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { ZoomInIcon, ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";

const BlogPostHero = ({ post }) => (
  <section className="relative py-32 lg:py-40 bg-gradient-to-br from-background-800 via-background-900 to-background-950 text-white overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image
        src={
          post.images?.[0]?.publicUrl ||
          "https://via.placeholder.com/1920x1080?text=Blog+Post"
        }
        alt={post.title}
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
    </div>

    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-300 rounded-full mix-blend-overlay filter blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>

    <div className="container-custom relative z-10">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="font-medium">Back to Blog</span>
        </Link>
      </div>

      <div className="max-w-4xl">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white font-heading leading-tight">
          {post.title}
        </h1>
        {post.subheading && (
          <p className="text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed font-paragraph">
            {post.subheading}
          </p>
        )}

        {/* Author and Date */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image
                src={
                  post.volunteers?.avatar ||
                  "https://via.placeholder.com/48x48?text=A"
                }
                alt="Author Avatar"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-white text-base">
                {post.volunteers?.name || "Anonymous"}
              </p>
              <p className="text-primary-200 text-sm">Author</p>
            </div>
          </div>

          <div className="flex items-center text-primary-200">
            <Calendar className="w-4 h-4 mr-2" />
            <span>
              {new Date(post.created_at || Date.now()).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default async function Component({ params }) {
  const data = await fetchBlog(params.id);

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-700 mb-4">
            Post Not Found
          </h1>
          <p className="text-secondary-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog" className="btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const post = data[0];

  return (
    <>
      <BlogPostHero post={post} />

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 lg:p-12">
                {/* Article Content */}
                <div className="prose prose-xl max-w-none">
                  <div
                    className="text-gray-800 leading-relaxed text-lg"
                    style={{
                      lineHeight: "1.8",
                      fontSize: "1.125rem",
                      fontWeight: "400",
                    }}
                  >
                    {post.body.split("\n").map((paragraph, index) =>
                      paragraph.trim() ? (
                        <p key={index} className="mb-6 text-justify">
                          {paragraph}
                        </p>
                      ) : null
                    )}
                  </div>
                </div>

                {/* Author Attribution */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <Image
                        src={
                          post.volunteers?.avatar ||
                          "https://via.placeholder.com/56x56?text=A"
                        }
                        alt="Author Avatar"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        Written by {post.volunteers?.name || "Anonymous"}
                      </p>
                      <p className="text-gray-600">
                        Published on{" "}
                        {new Date(
                          post.created_at || Date.now()
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Images Gallery */}
      {post.images?.length > 1 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-700 mb-12 text-center">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {post.images.map((image, key) => (
                <div
                  key={key}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image.publicUrl}
                    alt={`Gallery image ${key + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomInIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="section-padding bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Enjoyed this post?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover more insights and stories from our team
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/blog" className="btn-secondary text-lg">
              View All Posts
            </Link>
            <Link href="/contact-us" className="btn-outline text-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
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
