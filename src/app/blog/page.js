"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

function BlogCard({ img, title, excerpt, date, author, slug }) {
  return (
    <motion.div
      className="rounded-lg bg-background-200 shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 mb-4">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x200";
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium font-heading text-secondary-700 mb-2">
          {title}
        </h3>
        <p className="text-base font-paragraph text-secondary-600 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-green-700">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>{author}</span>
          </div>
        </div>
        <a
          href={`/blog/${slug}`}
          className="mt-4 inline-flex items-center text-purple-900 hover:text-purple-700 transition-colors"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

const blogPosts = [
  {
    img: "/Future.jpeg",
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends shaping the future of web development...",
    date: "2024-08-15",
    author: "Priyabrata Nandy",
    slug: "future-of-web-development",
  },
  {
    img: "/Masteringpng.png",
    title: "Mastering React Hooks",
    excerpt: "Learn how to leverage React Hooks for more efficient components...",
    date: "2024-08-10",
    author: "Monodeep Das",
    slug: "mastering-react-hooks",
  },
  {
    img: "/power.jpeg",
    title: "The Power of NextJS",
    excerpt: "Discover why NextJS is becoming the go-to framework for React applications...",
    date: "2024-08-05",
    author: "Adrij Bhadra",
    slug: "power-of-nextjs",
  },
  {
    img: "/optimization.png",
    title: "Optimizing Website Performance",
    excerpt: "Tips and tricks to boost your website's speed and user experience...",
    date: "2024-07-30",
    author: "Priyanshu Debnath",
    slug: "optimizing-website-performance",
  },
  // ... add more blog posts as needed
];

export function BlogSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="min-h-screen py-8 px-8 lg:py-28 bg-background-100">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="mb-16 text-center lg:mb-28"
          variants={itemVariants}
        >
          <h6 className="md:pb-0 text-lg font-paragraph text-green-700 pt-24 pb-5 md:pt-0">
            Our Blog
          </h6>
          <h1 className="my-2 text-5xl md:text-5xl font-bold font-heading text-secondary-700 pb-5 dark:font-semibold">
            Insights and Updates from Our Team
          </h1>
          <p className="mx-auto w-full text-secondary-700 max-w-4xl font-paragraph">
            Stay informed with the latest trends, technologies, and best practices in web development through our expert-written blog posts.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, key) => (
            <motion.div key={key} variants={itemVariants}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default BlogSection;