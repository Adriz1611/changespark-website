"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function TeamCard({ img, name, title }) {
  return (
    <motion.div
      className="rounded-lg bg-background-200 shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center p-6">
        <div className="relative w-36 h-36 mx-auto mb-6">
          <Image
            src={img}
            alt={name}
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150"; // Fallback image
            }}
          />
        </div>
        <h5 className="text-lg font-medium font-heading text-secondary-700">
          {name}
        </h5>
        <p className="mb-2 text-base font-semibold font-paragraph text-green-700">
          {title}
        </p>
        <div className="flex items-center justify-center gap-1.5">
          <button className="text-purple-900 hover:text-purple-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
          <button className="text-purple-900 hover:text-purple-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const members = [
  {
    img: "https://www.material-tailwind.com/img/avatar1.jpg",
    name: "Ryan Samuel",
    title: "Co-Founder",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar2.jpg",
    name: "Emma Roberts",
    title: "UI Designer",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar3.jpg",
    name: "William Pearce",
    title: "Web Developer",
  },
  {
    img: "https://www.material-tailwind.com/img/avatar4.jpg",
    name: "Nora Hazel",
    title: "UI/UX Designer",
  },
  // ... add more team members as needed
];

export function TeamSection12() {
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
          <h6 className="text-lg font-paragraph text-green-700">
            Meet the Team
          </h6>
          <h1 className="my-2 text-4xl lg:text-5xl font-bold font-heading text-purple-900">
            Behind the Success: Our Dedicated Team
          </h1>
          <p className="mx-auto w-full text-secondary-700 max-w-4xl font-paragraph">
            From visionary leadership to creative talent, and technical wizards,
            each team member plays a pivotal role in delivering exceptional
            service and innovative solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((props, key) => (
            <motion.div key={key} variants={itemVariants}>
              <TeamCard {...props} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TeamSection12;
