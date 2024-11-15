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
      href: "/projects/natunpata"
    },
    {
      src: "/bhadreswar.avif",
      alt: "Pranati",
      caption: "Pranati",
      description:
        "ChangeSpark Foundation Entrepreneurship Development Program empowers individuals, especially women, with vocational and business skills, fostering economic independence, local job creation, and sustainable community growth through hands-on training and market access.",
      href: "/projects/pranati"
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
        duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center py-20 md:py-0 justify-center min-h-screen w-full bg-background-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl uppercase font-heading text-secondary-700 dark:font-semibold mb-12 pt-10 md:pt-0"
        variants={itemVariants}
      >
        Projects
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-16 items-center justify-evenly w-full px-14 mt-5">
        {images.map((img, index) => (
          <Link href={img.href} key={index} className="w-full md:w-1/2 max-w-lg">
            <motion.div
              variants={itemVariants}
              className="group relative flex flex-col items-start text-start md:mx-0 mx-2 bg-background-200 p-4 rounded-md shadow-md w-full h-full cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-auto">
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
              <p className="text-wrap font-paragraph text-secondary-700">
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