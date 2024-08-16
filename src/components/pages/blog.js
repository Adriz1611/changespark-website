"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

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



export const Blogs = ({ blogData }) => {
  console.log(blogData.length);
  return (
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
          Stay informed with the latest trends, technologies, and best practices
          in web development through our expert-written blog posts.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogData.length > 0 ? (
          blogData.map((post, key) => (
            <motion.div key={key} variants={itemVariants}>
              <motion.div
                className="rounded-lg bg-background-200 shadow-md overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog/${post.id}/${post.images[0].name}`}
                    alt={post.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x200";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium font-heading text-secondary-700 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-base font-paragraph text-secondary-600 mb-4">
                    {post.body}
                  </p>
                  <div className="flex items-center justify-between text-sm text-green-700">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    {/* <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{author}</span>
                  </div> */}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center text-purple-900 hover:text-purple-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center text-secondary-700">
              No blog posts available.
            </h2>
          </div>
        )}
      </div>
    </motion.div>
  );
};
