import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const images = [
    {
      src: "/bhadreswar.avif",
      url: "/projects/bhadreswar",
      alt: "Women at Tailoring",
      caption: "Women at Tailoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/goghat.avif",
      alt: "Children at School",
      url: "/projects/goghat",
      caption: "Children at School",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-20 md:py-0 justify-center min-h-screen w-full bg-background-100 ">
      <h1 className="text-5xl uppercase font-bold font-heading text-purple-900 mb-12">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-40 ">
        {images.map((img, index) => (
          <Link href={img.url} key={index}>
            <div className="group relative flex flex-col items-start text-start w-[450px] bg-background-200 px-4 py-4 rounded-md shadow-md cursor-pointer">
              <MoveUpRight
                size={32}
                className="text-green-300 absolute top-5 right-5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
              />
              <Image
                src={img.src}
                alt={img.alt}
                height={300}
                width={450}
                className="rounded-md shadow-md"
              />

              <h2 className="mt-4 uppercase font-bold text-xl font-paragraph text-green-700 text-center">
                {img.caption}
              </h2>
              <p className="text-wrap font-paragraph text-secondary-700">
                {img.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
