"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- Data for the Green Gyan project ---
// TODO: Replace placeholder image URLs with your actual image links.
const projectData = {
  title: "Green Gyan",
  subtitle: "Sustainability for Everyday Life",
  headerImage: "/PGGBG.jpg",
  description: [
    "What if the path to saving the planet began at home—with a compost bin, a glass bottle, or a planted tree? Green Gyan was born from this belief. It is our grassroots environmental education program, grounded in everyday actions that build towards a better tomorrow.",
    "It's more than theory—it’s transformation in action. We’ve seen students lead school-wide clean-up drives, mothers become champions of waste segregation, and entire families switch to sustainable living because they learned how and, more importantly, believed they could.",
    "With Green Gyan, sustainability becomes not just possible—it becomes personal."
  ],
  keyActivities: [
    "Waste Segregation & Composting Workshops",
    "Upcycling & Circular Design Initiatives",
    "Water and Energy Conservation Drives",
    "Tree Plantation & Community Clean-ups",
  ],
  galleryImages: [
    "/pgs1.jpg",
    "/pgs2.jpg",
    "/pgs3.jpg",
    "/pgs4.jpg",
  ],
};

// --- Reusable Icon Component ---
const CheckIcon = () => (
    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

// --- Page Components ---
const ProjectHeader = ({ title, subtitle, image }) => (
  <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
    <Image
      src={image}
      alt={`${title} project header`}
      fill
      className="object-cover"
      priority
      onError={(e) => { e.target.src = 'https://placehold.co/1920x1080/145237/FFF?text=Image+Not+Found'; }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
    <div className="relative z-10 text-center container-custom">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold font-heading text-shadow-lg"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg md:text-2xl text-primary-100 font-paragraph max-w-3xl mx-auto text-shadow"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

const ProjectDetails = ({ description, activities }) => (
  <article className="section-padding bg-white">
    <div className="container-custom grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
      <motion.div 
        className="lg:col-span-3"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
          Our Approach
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-paragraph">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
      <motion.div 
        className="lg:col-span-2"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 h-full shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">
              Key Activities
            </h3>
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity} className="flex items-start text-lg text-gray-700 font-paragraph">
                  <CheckIcon />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
        </div>
      </motion.div>
    </div>
  </article>
);

const ProjectGallery = ({ images, onImageClick }) => (
  <section className="section-padding bg-gray-50">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
          Project Gallery
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative h-52 sm:h-64 overflow-hidden rounded-xl shadow-lg card-hover cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => onImageClick(img)}
          >
            <Image
              src={img}
              alt={`Green Gyan Gallery Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={(e) => { e.target.src = 'https://placehold.co/400x400/EAF9F2/145237?text=Image'; }}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ImageModal = ({ imageUrl, onClose }) => {
    if (!imageUrl) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 50 }}
                    className="relative max-w-3xl w-full mx-4"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                >
                    <Image
                        src={imageUrl}
                        alt="Enlarged gallery view"
                        width={1200}
                        height={800}
                        className="rounded-xl shadow-2xl object-contain max-h-[80vh]"
                    />
                    <button
                        onClick={onClose}
                        className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
                        aria-label="Close image view"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};


// --- Main Page Export ---
export default function GreenGyanPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="bg-background-100">
      <ProjectHeader 
        title={projectData.title}
        subtitle={projectData.subtitle}
        image={projectData.headerImage}
      />
      <ProjectDetails 
        description={projectData.description}
        activities={projectData.keyActivities}
      />
      <ProjectGallery 
        images={projectData.galleryImages}
        onImageClick={setSelectedImage}
      />
      <ImageModal 
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
