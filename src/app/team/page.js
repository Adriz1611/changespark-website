"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";

function TeamCard({ img, name, title, twitterLink, linkedinLink }) {
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
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <Twitter className="text-purple-900 hover:text-purple-700 transition-colors h-5 w-5" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-purple-900 hover:text-purple-700 transition-colors h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const members = [
  {
    img: "/priyabrata.jpg",
    name: "Priyabrata Nandy",
    title: "Leader",
    twitterLink: "https://twitter.com/priyabratanandy",
    linkedinLink: "https://linkedin.com/in/priyabratanandy",
  },
  {
    img: "/monodeep.jpg",
    name: "Monodeep Das",
    title: "Web Developer",
    twitterLink: "https://twitter.com/monodeepdas",
    linkedinLink: "https://linkedin.com/in/monodeepdas",
  },
  {
    img: "/adrij.avif",
    name: "Adrij Bhadra",
    title: "Web Developer",
    twitterLink: "https://twitter.com/adrijbhadra",
    linkedinLink: "https://linkedin.com/in/adrijbhadra",
  },
  {
    img: "/priyanshu.jpg",
    name: "Priyanshu Debnath",
    title: "Web Developer",
    twitterLink: "https://twitter.com/priyanshudebnath",
    linkedinLink: "https://linkedin.com/in/priyanshudebnath",
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
          <h6 className="md:pb-0 text-lg font-paragraph text-green-700 pt-24 pb-5 md:pt-0">
            Meet the Team
          </h6>
          <h1 className="my-2 text-5xl md:text-5xl font-bold font-heading text-secondary-700 pb-5 dark:font-semibold">
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
