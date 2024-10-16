"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const images = [
    {
      src: "/bhadreswar.avif",
      alt: "Women at Tailoring",
      caption: "Women at Tailoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/goghat.avif",
      alt: "Children at School",
      caption: "Children at School",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      <div className="flex flex-col md:flex-row gap-5 md:gap-40 items-center justify-center w-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative flex flex-col items-start max-w-96 text-start md:mx-0 mx-2 bg-background-200 px-4 py-4 rounded-md shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              height={300}
              width={450}
              sizes="(max-width: 450px) 100vw, 450px"
              className="rounded-md shadow-md"
            />
            <h2 className="mt-4 uppercase font-bold text-xl font-paragraph text-green-700 text-center">
              {img.caption}
            </h2>
            <p className="text-wrap font-paragraph text-secondary-700">
              {img.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
