"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const images = [
    {
      src: "/goghat.avif",
      alt: "Natun Pata",
      caption: "Natun Pata",
      description:
        "ChangeSpark Foundation Education Program nurtures young minds by delivering quality early childhood education in underserved rural areas, fostering cognitive, social, and emotional growth, and empowering communities to value lifelong learning.",
      href: "/projects/natunpata",
    },
    {
      src: "/bhadreswar.avif",
      alt: "Pranati",
      caption: "Pranati",
      description:
        "ChangeSpark Foundation Entrepreneurship Development Program empowers individuals, especially women, with vocational and business skills, fostering economic independence, local job creation, and sustainable community growth through hands-on training and market access.",
      href: "/projects/pranati",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center py-20 justify-center min-h-screen w-full bg-background-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="my-2 text-5xl font-bold font-heading text-secondary-700 pb-5 dark:font-semibold">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-10 md:px-20 lg:px-32 mt-5 w-full">
        {images.map((img, index) => (
          <Link href={img.href} key={index} className="w-full">
            <motion.div
              variants={itemVariants}
              className="group relative flex flex-col items-start text-start bg-background-200 p-6 rounded-md shadow-lg w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-md shadow-md"
                />
              </div>
              <h2 className="mt-4 uppercase font-bold text-xl font-paragraph text-green-700 text-center">
                {img.caption}
              </h2>
              <p className="mt-2 font-paragraph text-secondary-700 text-justify">
                {img.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
