"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function TestimonialCard({ quote, author }) {
  return (
    <motion.div
      className="max-w-md rounded-xl overflow-hidden shadow-xl bg-background-100 p-8 m-4 border border-purple-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.1)",
      }}
    >
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-16 h-16 text-purple-200 transform -translate-x-6 -translate-y-6"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative z-10 text-text-700 text-lg leading-relaxed font-paragraph pt-8">
          {quote}
        </p>
      </div>
      <p className="text-right mt-6 font-semibold text-secondary-700 font-paragraph">
        - {author}
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The tailoring program in Bhadreswar has given me the skills and confidence to start my own business. This NGO's support has been invaluable in transforming my life and the lives of many other women in our community.",
      author: "Sita Devi, Beneficiary",
    },
    {
      quote:
        "I've seen the incredible difference this NGO is making in Goghat by raising awareness about the importance of child education. Their efforts are ensuring that children in remote areas have the chance to build a brighter future.",
      author: "Meera Sen, Community Leader",
    },
    {
      quote:
        "Thanks to the tailoring training provided by this NGO in Bhadreswar, many women, including myself, now have the opportunity to earn a livelihood and support our families. This program is a true blessing for our community.",
      author: "Radha Gupta, Trainee",
    },
    {
      quote:
        "The NGO's work in Goghat has been instrumental in educating parents about the significance of sending their children to school. Their dedication to improving the lives of children in these remote areas is truly commendable.",
      author: "Anjali Roy, Volunteer",
    },
  ];

  return (
    <section id="testimonials" className="bg-background-200 min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold font-heading text-secondary-700 text-center pt-14 mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What people think about us
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
