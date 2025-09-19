"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  Lightbulb, 
  Target,
  ChevronRight,
  Sparkles,
  Heart,
  Award,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  X,
  ChevronLeft,
  Zap
} from "lucide-react";

const projectData = {
  headerImage: "/bhadreswar.jpg",
  galleryImages: [
    "/pranati1.png",
    "/pranati2.png",
    "/pranati3.jpg",
    "/pranati4.jpg",
    "/pranati5.jpg",
  ],
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Image Gallery Modal Component
const ImageModal = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative aspect-video">
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function ProjectPranati() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const approachCards = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Vocational Training and Skill Development",
      text: "Hands-on training in skills like sewing, upcycling, and product development. Each program equips participants with technical expertise to launch their businesses.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Design and Management",
      text: "In-depth training in business management, financial literacy, and inventory control, preparing entrepreneurs for challenges in running a business.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovative Product Development",
      text: "Fosters creativity with training in product design, prototyping, and trend analysis to create high-quality, market-relevant products.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Market Access and Sales Support",
      text: "Provides access to market research, branding, and product positioning workshops to help participants enter and thrive in the market.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship and Ongoing Support",
      text: "An ecosystem of mentorship and peer collaboration through regular check-ins, mentorship sessions, and peer-support groups.",
      color: "from-indigo-500 to-purple-600"
    },
  ];

  const programCards = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sewing Skills Development",
      text: "Training in hand sewing, machine operations, and pattern drafting for foundational product creation skills.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Product Development",
      text: "Designing and developing market-appealing products focused on creativity and functionality.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Management",
      text: "Skills in financial management, quality control, and inventory management for sustainable businesses.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Sales and Marketing",
      text: "Strategies for market positioning, customer engagement, and digital literacy to maximize reach and sales.",
      gradient: "from-orange-400 to-red-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Enhanced Header Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] min-h-[500px] overflow-hidden"
      >
        <Image
          src={projectData.headerImage}
          alt="Project Pranati Header Image"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Project Pranati
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl"
          >
            Transforming Lives Through Entrepreneurship & Skill Development
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Why Entrepreneurship Matters
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-8" />
          </motion.div>
          
          <motion.div variants={fadeInUp} className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              Entrepreneurship is more than business—it's the engine of community change. For families in rural areas affected by economic instability, creating small businesses can provide a steady source of income, reduce unemployment, and contribute to the local economy. MEDP not only trains individuals but also nurtures an ecosystem of support, collaboration, and innovation that grows with each new venture.
            </p>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: "100+", label: "Women Trained" },
              { number: "85%", label: "Employment Rate" },
              { number: "10+", label: "Volunteer" },
              { number: "₹50k+", label: "Income Generated" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200"
              >
                <div className="text-3xl font-bold text-emerald-700">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Approach to <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Entrepreneurship Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive framework designed to empower individuals with skills, knowledge, and support for sustainable success.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {approachCards.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group relative ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl"
                  style={{ backgroundImage: `linear-gradient(135deg, ${item.color})` }}
                />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl" />
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Sustainable Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full mb-8" />
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-6 text-lg leading-relaxed">
            <p className="text-white/90">
              At Changespark Foundation, the ultimate goal of our entrepreneurship program is to empower individuals to build businesses that are resilient, sustainable, and impactful. By nurturing entrepreneurial talent and providing lasting support, we create economic opportunities that lift individuals, families, and entire communities.
            </p>
            <p className="text-white/90">
              We are committed to long-term growth and innovation in our programs, integrating the latest practices in digital literacy and vocational training to ensure our participants remain competitive in an evolving market.
            </p>
            <p className="text-white/90">
              Together, we are building a future where entrepreneurship lights the way toward financial independence, social inclusion, and a thriving local economy. Through MEDP, Changespark Foundation is paving the path to a sustainable, empowered tomorrow.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a href="/join-us">
            <button className="px-8 py-3 bg-white text-emerald-800 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
              Join Our Mission
            </button>
            </a>
            <a href="/donate">
            <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Support This Project
            </button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Glimpses of transformation and empowerment in action
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {projectData.galleryImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={img}
                  alt={`Project Pranati Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">View Image</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <ImageModal
          images={projectData.galleryImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  );
}
