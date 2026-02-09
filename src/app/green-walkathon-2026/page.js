"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Heart,
  Leaf,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  Quote,
  TrendingUp,
  Globe,
  Footprints,
} from "lucide-react";

// --- Event Data ---
const eventData = {
  title: "Green Walkathon 2026",
  tagline: "Rise. Walk. Inspire.",
  headline: "Building a Workers' Community for the First Time in Arambagh",
  date: "12 January 2026",
  location: "Chandur, Arambagh, Hooghly",
  participants: "284",
};

const galleryImages = [
  {
    src: "/pages/walkathon/crowd-gathering.jpeg",
    alt: "Participants gathering at the walkathon venue",
    caption: "284 walkers united for a common cause",
  },
  {
    src: "/pages/walkathon/morning-march.jpeg",
    alt: "Morning march with participants in yellow t-shirts",
    caption: "The morning march begins under the winter sun",
  },
  {
    src: "/pages/walkathon/banner-walkers.jpeg",
    alt: "Walkers carrying environmental awareness banner",
    caption: "Walking with purpose and a green message",
  },
  {
    src: "/pages/walkathon/volunteers.jpeg",
    alt: "Volunteer team in blue t-shirts",
    caption: "Our dedicated volunteer team",
  },
  {
    src: "/pages/walkathon/pranati-banner.jpeg",
    alt: "Project Pranati banner at the walkathon",
    caption: "Showcasing Project Pranati at the event",
  },
  {
    src: "/pages/walkathon/flag-ceremony.jpeg",
    alt: "Flag hoisting ceremony with dignitaries",
    caption: "The ceremonial flag-off by dignitaries",
  },
  {
    src: "/pages/walkathon/road-walk.jpeg",
    alt: "Participants walking along the road",
    caption: "The walkathon in full stride through Arambagh",
  },
  {
    src: "/pages/walkathon/road-walk-2.jpeg",
    alt: "Long line of walkers on the road",
    caption: "A sea of yellow — community in motion",
  },
  {
    src: "/pages/walkathon/award-ceremony.jpeg",
    alt: "Award ceremony with Green Walkathon 2026 backdrop",
    caption: "Recognizing contributions at the ceremony",
  },
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// --- Image Gallery Modal ---
const ImageModal = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

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
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <p className="text-center text-white/80 mt-4 text-sm sm:text-base">
            {images[currentIndex].caption}
          </p>

          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 w-2 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- Hero Section ---
const HeroSection = () => (
  <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
    <Image
      src="/pages/walkathon/morning-march.jpeg"
      alt="Green Walkathon 2026 — Arambagh"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

    {/* Subtle floating elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-400/15 rounded-full filter blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-80 sm:w-[400px] h-80 sm:h-[400px] bg-emerald-400/15 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>

    <div className="relative z-10 text-center container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Event Completed Badge */}
        <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500/30 to-green-500/30 backdrop-blur-lg text-white rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 border border-emerald-400/50 shadow-2xl">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-emerald-200 font-extrabold uppercase tracking-wider">
            Event Successfully Completed
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-3 sm:mb-4 leading-tight">
          <motion.span
            className="block text-white mb-2 drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Green Walkathon
          </motion.span>
          <motion.span
            className="block text-6xl sm:text-8xl md:text-9xl bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            2026
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 text-yellow-300/90 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Rise. Walk. Inspire.
        </motion.p>

        {/* Event Stats Row */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-lg px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
            <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-300 flex-shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-green-200/80 font-semibold uppercase tracking-wider">
                Date
              </div>
              <div className="text-sm sm:text-lg font-bold">
                {eventData.date}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-lg px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
            <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-300 flex-shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-green-200/80 font-semibold uppercase tracking-wider">
                Location
              </div>
              <div className="text-sm sm:text-lg font-bold">
                {eventData.location}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-lg px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl">
            <Users className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-300 flex-shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-green-200/80 font-semibold uppercase tracking-wider">
                Participants
              </div>
              <div className="text-sm sm:text-lg font-bold">
                {eventData.participants} Walkers
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0 -mb-1">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
);

// --- Opening Statement ---
const OpeningSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center"
      >
        {/* Decorative Line */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-green-500"></div>
            <Footprints className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight px-2"
        >
          A Moment that Marked Both{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            History & Hope
          </span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed"
        >
          <p className="text-lg sm:text-xl text-gray-800 font-medium">
            On 12th January, Arambagh witnessed a moment that marked both
            history and hope — a first-of-its-kind Walkathon that united its
            worker community in an extraordinary display of participation,
            pride, and collective purpose.
          </p>
          <p className="text-xl sm:text-2xl font-bold text-green-700 py-2">
            What unfolded was far more than a walk. It was a movement.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Impact Numbers ---
const ImpactNumbersSection = () => {
  const stats = [
    {
      number: "284",
      label: "Walkers",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "United for a common cause",
    },
    {
      number: "3+",
      label: "Districts Represented",
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "Kolkata, Howrah & Hooghly",
    },
    {
      number: "1st",
      label: "Worker Community Event",
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "First ever in Arambagh",
    },
    {
      number: "1",
      label: "Unified Community",
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      description: "A living legacy",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center bg-white/10 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 text-yellow-300">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-green-100/70">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Featured Image with Text ---
const FeaturedSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-green-50/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur-2xl"></div>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/pages/walkathon/crowd-gathering.jpeg"
              alt="284 participants gathering at the walkathon"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-bold mb-4 uppercase tracking-wider">
              The Movement
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
              Every Step Symbolized{" "}
              <span className="text-green-600">Dignity & Solidarity</span>
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              A total of <strong>284 walkers</strong> came forward to be part of
              this landmark initiative, each step symbolizing dignity of labour
              and the power of community solidarity. The significance of the
              event deepened with regional participation — workers and
              supporters travelled from{" "}
              <strong>Kolkata, Howrah, and across Hooghly</strong>, standing
              shoulder-to-shoulder with local participants to strengthen the
              spirit of unity.
            </p>
            <p>
              For Arambagh, this was unprecedented. Never before had an
              organized platform been created to visibly bring together workers
              as one community — to celebrate their contribution, amplify their
              identity, and foster a shared sense of belonging.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Story Section ---
const StorySection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-emerald-50/50 to-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full filter blur-3xl"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-bold mb-4 uppercase tracking-wider">
            Unprecedented
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
            More Than Just <span className="text-green-600">Participation</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              The Walkathon transformed public space into a canvas of worker
              pride — filled with conversations, encouragement, and a renewed
              recognition that behind every system of progress stands an
              empowered workforce.
            </p>

            {/* Poetic Impact Lines */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <p className="text-gray-800 font-semibold">
                  More than participation, the event seeded{" "}
                  <span className="text-green-600">connection</span>.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <p className="text-gray-800 font-semibold">
                  More than mobilization, it built{" "}
                  <span className="text-green-600">ownership</span>.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                <p className="text-gray-800 font-semibold">
                  More than a one-day gathering, it established a{" "}
                  <span className="text-green-600">sustained collective</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/pages/walkathon/road-walk.jpeg"
              alt="Long line of participants walking through Arambagh"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Recognition Section ---
const RecognitionSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-bold mb-4 uppercase tracking-wider">
            A Landmark Moment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Not Just an Event —{" "}
            <span className="text-green-600">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-green-100"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              It was the first time any organization had stepped beyond
              conventional engagement and invested in building a visible,
              unified workers&apos; community in Arambagh. The Walkathon created
              a space where workers were not seen merely as contributors to
              labour, but as contributors to{" "}
              <strong>identity, dignity, and social progress</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-emerald-100"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The energy on the ground reflected this emotional shift. From
              early morning mobilization to coordinated participation throughout
              the day, the Walkathon evolved into a celebration of{" "}
              <strong>resilience and collective strength</strong>. Stories were
              exchanged, networks were built, and a renewed sense of belonging
              was forged among workers who often remain invisible within formal
              development narratives.
            </p>
          </motion.div>
        </div>

        {/* Quote Highlight */}
        <motion.div variants={fadeInUp} className="relative">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-2xl text-white text-center">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-green-300/40 mx-auto mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
              12th January will now be remembered in Arambagh not just as the
              day of a Walkathon — but as the day a community walked together,
              visibly and confidently, towards recognition and unity.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Photo Gallery ---
const GallerySection = ({ onImageClick }) => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-bold mb-4 uppercase tracking-wider">
            Event Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Moments That <span className="text-green-600">Defined the Day</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Relive the energy, unity, and spirit of Green Walkathon 2026 through
            these captured moments.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group cursor-pointer ${
                index === 0 || index === 5
                  ? "col-span-2 md:col-span-1 row-span-1 md:row-span-2"
                  : ""
              }`}
              onClick={() => onImageClick(index)}
            >
              <div
                className={`relative ${
                  index === 0 || index === 5
                    ? "h-52 sm:h-64 md:h-full md:min-h-[400px]"
                    : "h-44 sm:h-52 md:h-64"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm font-medium drop-shadow-lg">
                    {img.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Legacy Section ---
const LegacySection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
    <div className="absolute top-10 left-10 w-72 h-72 bg-green-100/40 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-100/40 rounded-full filter blur-3xl"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-bold mb-4 uppercase tracking-wider">
            The Legacy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            A Living <span className="text-green-600">Legacy</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            The event&apos;s success was made possible through the committed
            support of institutional partners, local leaders, and community
            champions who believed in the vision of worker unity and
            empowerment.
          </p>
        </motion.div>

        {/* Legacy Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {[
            {
              icon: <Users className="w-7 h-7 sm:w-8 sm:h-8" />,
              title: "Connected Worker Base",
              description:
                "A network of 284 workers and supporters, united across districts and ready to grow.",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8" />,
              title: "Community-Led Mobilization",
              description:
                "A precedent set for worker-driven engagement and community action in the region.",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8" />,
              title: "Replicable Model",
              description:
                "A framework for participatory workforce engagement in underserved geographies across India.",
              gradient: "from-purple-500 to-indigo-500",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
              ></div>
              <div className="relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${card.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flag-off + Award Images */}
        <motion.div
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/pages/walkathon/flag-ceremony.jpeg"
              alt="Flag-off ceremony"
              width={700}
              height={500}
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
              <p className="text-white font-bold text-sm sm:text-base">
                The ceremonial flag-off
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/pages/walkathon/award-ceremony.jpeg"
              alt="Award distribution at Green Walkathon 2026"
              width={700}
              height={500}
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
              <p className="text-white font-bold text-sm sm:text-base">
                Recognizing community champions
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Closing Section ---
const ClosingSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <Leaf className="w-12 h-12 sm:w-16 sm:h-16 text-green-200 mx-auto mb-6 sm:mb-8" />

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 drop-shadow-lg leading-tight">
          The Day a Fragmented Workforce Discovered Its{" "}
          <span className="text-yellow-300">Collective Voice</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed mb-8">
          For Arambagh, 12th January will now be remembered not as a one-day
          gathering, but as the day a fragmented workforce discovered its
          collective voice. This is only the beginning.
        </p>

        <div className="flex justify-center gap-3">
          <div className="h-1 w-8 bg-yellow-400 rounded-full"></div>
          <div className="h-1 w-8 bg-green-300 rounded-full"></div>
          <div className="h-1 w-8 bg-emerald-300 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Main Page Export ---
export default function GreenWalkathon2026Page() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
    <main className="bg-white overflow-hidden">
      <HeroSection />
      <OpeningSection />
      <ImpactNumbersSection />
      <FeaturedSection />
      <StorySection />
      <RecognitionSection />
      <GallerySection onImageClick={(index) => setSelectedImageIndex(index)} />
      <LegacySection />
      <ClosingSection />

      {selectedImageIndex !== null && (
        <ImageModal
          images={galleryImages}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </main>
  );
}
