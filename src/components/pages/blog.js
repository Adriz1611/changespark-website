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
  return (
    <motion.div
      className="container-custom"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Blog Posts Grid */}
      <div
        className={`
          grid gap-8 
          ${
            blogData.length === 1
              ? "grid-cols-1 place-items-center max-w-md mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }
        `}
      >
        {blogData.length > 0 ? (
          blogData.map((post, key) => (
            <motion.div key={key} variants={itemVariants} className="w-full">
              <Link href={`/blog/${post.id}`}>
                <motion.div
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`${
                        process.env.NEXT_PUBLIC_SUPABASE_URL
                      }/storage/v1/object/public/blog/${post.id}/${
                        post.images[0]?.name || "placeholder.jpg"
                      }`}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x200?text=Blog+Image&bg=f0f0f0";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>
                        {new Date(post.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-4">
                      {post.subheading || post.body}
                    </p>

                    <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                      <span>Read article</span>
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center py-20"
            variants={itemVariants}
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-700 mb-4">
                No blog posts available.
              </h2>
              <p className="text-secondary-600">
                Check back soon for new insights and updates from our team.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
