import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeartIcon, ZoomInIcon } from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen py-8 px-8 lg:py-28 bg-background-100">
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/1.avif"
          alt="Featured Image"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center rounded-xl"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1
            // change the text colour according to the bg contrast
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl 
            
            "
          >
            The Secrets of Successful Startups
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:mt-5 sm:text-xl lg:text-2xl">
            Discover the key insights that have helped the world&apos; most
            innovative companies thrive.
          </p>
          <div className="mt-5 flex items-center text-sm font-medium text-muted-foreground sm:mt-8">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/2.avif"
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
                John Doe
              </Link>
            </span>
          </div>
        </div>
      </section>
      <article className="container mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <div className="prose prose-lg prose-neutral mx-auto max-w-3xl dark:prose-invert">
          <div className="flex items-center justify-between">
            <h2>The Rise of the Startup Ecosystem</h2>
            <div className="flex items-center gap-2">
              <button>
                <HeartIcon />
                <span className="sr-only">Like</span>
              </button>
              <span className="text-muted-foreground">25</span>
            </div>
          </div>
          <p>
            In the past decade, the startup ecosystem has undergone a remarkable
            transformation. What was once a niche industry has now become a
            driving force in the global economy, with innovative companies
            disrupting established markets and creating new opportunities for
            growth.
          </p>
          <p>
            The success of startups can be attributed to a variety of factors,
            including access to capital, the availability of talented
            individuals, and the rapid pace of technological change. As more and
            more people embrace the entrepreneurial spirit, the startup
            landscape has become increasingly diverse, with companies tackling a
            wide range of challenges and industries.
          </p>
          <h2>Key Insights for Startup Success</h2>
          <p>
            Through our research and analysis, we&apos;ve identified several key
            insights that have contributed to the success of the world&apos;
            most innovative startups:
          </p>
          <ul>
            <li>
              <strong>Focus on customer needs:</strong> Successful startups are
              laser-focused on understanding and addressing the pain points of
              their target customers. They prioritize user experience and
              continuously iterate on their products and services to ensure
              they&apos;re meeting the evolving needs of their audience.
            </li>
            <li>
              <strong>Embrace a culture of innovation:</strong> The most
              successful startups foster a culture that encourages creativity,
              risk-taking, and continuous learning. They empower their teams to
              experiment, fail fast, and learn from their mistakes, which helps
              them stay ahead of the curve.
            </li>
            <li>
              <strong>Build a strong team:</strong> Startups are only as strong
              as the people who power them. Successful founders understand the
              importance of assembling a diverse, talented, and dedicated team
              that can work together to achieve the company&apos; goals.
            </li>
            <li>
              <strong>Leverage data and analytics:</strong> Data-driven
              decision-making is crucial in the startup world. Successful
              companies use data to inform their strategies, measure their
              progress, and make informed decisions that drive growth and
              innovation.
            </li>
          </ul>
          <h2>The Future of Startups</h2>
          <p>
            As the startup ecosystem continues to evolve, we can expect to see
            even more exciting developments in the years to come. With the rapid
            pace of technological change, the rise of emerging markets, and the
            increasing focus on sustainability and social impact, the
            opportunities for startups to make a lasting impact are greater than
            ever before.
          </p>
          <p>
            Whether you&apos;re an aspiring entrepreneur, an investor, or simply
            someone who&apos; fascinated by the world of startups, there&apos;
            never been a more exciting time to be a part of this dynamic and
            ever-changing landscape.
          </p>
        </div>
      </article>
      <section className="container mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold">Related Images</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="relative h-40 cursor-pointer overflow-hidden rounded-lg"
            >
              <Image
                src="/placeholder.svg"
                alt={`Image ${i + 1}`}
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

