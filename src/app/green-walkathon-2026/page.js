"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Heart,
  Leaf,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// --- Event Data ---
const eventData = {
  title: "Green Walkathon 2026",
  tagline: "Rise. Walk. Inspire.",
  headline: "Walk the Change. Heal the Earth. Inspire the Future.",
  date: "12 January 2026",
  location: "Chandur, Arambagh, Hooghly",
  expectedParticipants: "400+",
  headerImage: "/walkathon.png", // Replace with actual walkathon image
};

// --- Reusable Icon Component ---
const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// --- Hero Section ---
const EventHeader = () => (
  <section className="relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden">
    <Image
      src={eventData.headerImage}
      alt="Green Walkathon 2026"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

    {/* Enhanced floating particles effect */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-400/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-emerald-400/30 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-400/20 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>

    <div className="relative z-10 text-center container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Enhanced Badge */}
        <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg text-white rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 border-2 border-white/40 shadow-2xl">
          <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-yellow-300 animate-pulse" />
          <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent font-extrabold">
            ChangeSpark Foundation Presents
          </span>
        </div>

        {/* Enhanced Main Title with glow effect */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-3 sm:mb-4 leading-tight">
          <motion.span
            className="block text-white mb-2 sm:mb-3 drop-shadow-2xl"
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
            style={{ textShadow: "0 0 40px rgba(16, 185, 129, 0.5)" }}
          >
            2026
          </motion.span>
        </h1>

        {/* Enhanced Tagline */}
        <motion.p
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10 text-yellow-300 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Rise. Walk. Inspire.
        </motion.p>

        {/* Enhanced Event Details with icons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-10 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-lg px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-white/30 shadow-xl hover:scale-105 transition-transform duration-300">
            <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-300 flex-shrink-0" />
            <div className="text-left">
              <div className="text-xs text-green-200 font-semibold">Date</div>
              <div className="text-sm sm:text-lg font-bold">
                {eventData.date}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-lg px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-white/30 shadow-xl hover:scale-105 transition-transform duration-300">
            <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-300 flex-shrink-0" />
            <div className="text-left">
              <div className="text-xs text-green-200 font-semibold">
                Location
              </div>
              <div className="text-sm sm:text-lg font-bold">
                {eventData.location}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-lg px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-white/30 shadow-xl hover:scale-105 transition-transform duration-300">
            <Users className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-300 flex-shrink-0" />
            <div className="text-left">
              <div className="text-xs text-green-200 font-semibold">
                Expected
              </div>
              <div className="text-sm sm:text-lg font-bold">
                {eventData.expectedParticipants} Participants
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Button - Registration Coming Soon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-3 sm:gap-4 px-4"
        >
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-yellow-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <button className="relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 text-white font-black text-base sm:text-xl rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
              <Sparkles
                className="w-5 sm:w-6 h-5 sm:h-6 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              Registration Opens Soon
              <Sparkles
                className="w-5 sm:w-6 h-5 sm:h-6 animate-spin"
                style={{ animationDuration: "3s", animationDelay: "1.5s" }}
              />
            </button>
          </div>
          <p className="text-green-200 text-xs sm:text-sm font-semibold animate-pulse">
            🔔 Stay tuned for updates!
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- Introduction Section ---
const IntroductionSection = () => (
  <section className="section-padding bg-gradient-to-b from-white to-green-50/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        {/* Decorative element */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-green-500 rounded-full"></div>
            <Leaf className="w-8 h-8 text-green-600 animate-pulse" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-green-500 rounded-full"></div>
          </div>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 mb-6 sm:mb-8 leading-tight px-4">
          {eventData.headline}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-green-100 space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          <p>
            On <strong>12 January 2026</strong>, the birth anniversary of Swami
            Vivekananda, Chandur will witness something truly special—an
            awakening of hope, unity, and responsibility. ChangeSpark Foundation
            proudly brings its first-ever <strong>Green Walkathon 2026</strong>,
            a movement that invites every heart to step forward for a greener,
            healthier tomorrow.
          </p>
          <p>
            This Walkathon is more than an event—it is a story of people coming
            together. Students, youth groups, families, corporates, schools,
            NGOs, and community leaders will walk side by side, carrying one
            shared message: <strong>Green Living, Healthy Living</strong>. With
            over <strong>400+</strong> participants expected, the day will echo
            with energy, inspiration, and the spirit of collective action.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Story Section ---
const StorySection = () => (
  <section className="section-padding bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full filter blur-3xl"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        {/* Enhanced heading with icon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="p-3 sm:p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl shadow-xl">
            <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
            The Story Behind
            <br />
            <span className="text-green-600">Green Walkathon 2026</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-green-100"
          >
            <p>
              Every movement begins with a small spark. For ChangeSpark
              Foundation, that spark comes from the belief that real change
              grows when people stand together with purpose. Chandur, a place
              filled with vibrancy and youth strength, deserves a platform where
              community voices rise, connect, and inspire one another.
            </p>
            <p>
              Choosing <strong className="text-green-700">12 January</strong>
              —Swami Vivekananda's birth anniversary—adds deeper meaning to this
              mission. His teachings on youth power, unity, and fearlessness
              guide the very soul of this Walkathon. It is a tribute to his
              vision of a nation where young people lead with awareness,
              compassion, and courage.
            </p>
          </motion.div>

          {/* Swami Vivekananda Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl text-white h-full flex flex-col justify-center">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 opacity-50">
                "
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 leading-relaxed italic">
                Arise, awake, and stop not until the goal is reached.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                <p className="text-green-100 font-medium">Swami Vivekananda</p>
              </div>

              {/* Decorative spark */}
              <div className="absolute top-4 right-4">
                <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Why This Matters ---
const WhyItMattersSection = () => (
  <section className="section-padding bg-white relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-green-100 rounded-full filter blur-3xl opacity-40"></div>
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-100 rounded-full filter blur-3xl opacity-40"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
              OUR PURPOSE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              Why This Initiative
              <span className="block text-green-600">Matters</span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-green-500 shadow-md">
              Green Walkathon 2026 is a step towards a healthier community and a
              cleaner planet. At a time when pollution, lifestyle disorders, and
              environmental degradation challenge our future, this initiative
              reminds us that solutions begin with small, mindful actions.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">
                    ✓
                  </span>
                </div>
                <p className="pt-1 sm:pt-2 text-sm sm:text-base">
                  <strong>Walking together</strong> encourages fitness
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-md border border-emerald-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">
                    ✓
                  </span>
                </div>
                <p className="pt-1 sm:pt-2 text-sm sm:text-base">
                  <strong>Caring for nature</strong> strengthens our commitment
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">
                    ✓
                  </span>
                </div>
                <p className="pt-1 sm:pt-2 text-sm sm:text-base">
                  <strong>Collective responsibility</strong> helps communities
                  grow
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          {[
            {
              icon: Heart,
              title: "Health",
              desc: "Promoting fitness and well-being",
              color: "from-red-400 to-pink-500",
              textColor: "text-red-600",
            },
            {
              icon: Leaf,
              title: "Environment",
              desc: "Caring for our planet",
              color: "from-green-400 to-emerald-500",
              textColor: "text-green-600",
            },
            {
              icon: Users,
              title: "Community",
              desc: "Building unity and harmony",
              color: "from-blue-400 to-cyan-500",
              textColor: "text-blue-600",
            },
            {
              icon: Target,
              title: "Purpose",
              desc: "Walking with responsibility",
              color: "from-purple-400 to-indigo-500",
              textColor: "text-purple-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}
              ></div>
              <div className="relative bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div
                  className={`w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-5 sm:w-8 h-5 sm:h-8 text-white" />
                </div>
                <h3
                  className={`text-lg sm:text-xl font-black ${item.textColor} mb-2 text-center`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Mission & Objectives ---
const MissionObjectivesSection = () => (
  <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mission
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            The mission of Green Walkathon 2026 is to weave together health,
            environment, and community spirit. It aims to inspire people of all
            ages to embrace a healthy lifestyle, adopt eco-friendly habits, and
            take active responsibility for the world around them. It is a
            mission to celebrate togetherness, promote environmental
            consciousness, and ignite the powerful message that each step we
            take can lead to a better, greener future.
          </p>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Objectives
            </h2>
          </div>
          <ul className="space-y-4">
            {[
              "Create a culture where fitness is celebrated",
              "Promote environmental awareness in daily practices",
              "Build community harmony as a shared value",
              "Spark curiosity about pollution and its effects",
              "Encourage families to adopt greener choices",
              "Motivate corporates to strengthen social commitment",
              "Unite diverse groups in the spirit of transformation",
            ].map((objective, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <CheckIcon />
                <span className="text-lg">{objective}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Expected Impact ---
const ImpactSection = () => (
  <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/40 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full filter blur-3xl"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8 sm:mb-12"
      >
        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
          THE IMPACT
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-4">
          Expected Impact
        </h2>
        <div className="flex justify-center">
          <div className="h-1.5 w-16 sm:w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {[
          {
            icon: "💪",
            title: "Daily Fitness",
            description:
              "Inspire people to choose walking as a daily fitness routine",
          },
          {
            icon: "🌍",
            title: "Environmental Awareness",
            description:
              "Raise awareness on pollution and encourage greener practices",
          },
          {
            icon: "🤝",
            title: "Community Bonding",
            description:
              "Strengthen unity and shared ownership for a cleaner future",
          },
        ].map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-center">
              {impact.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
              {impact.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
              {impact.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl text-white">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-300" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                A Lasting Legacy
              </h3>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-green-50">
            <p>
              Green Walkathon 2026 is expected to influence both hearts and
              habits. It will inspire more people to choose walking as a daily
              fitness routine. It will raise awareness on environmental
              pollution and encourage greener practices in schools, homes, and
              workplaces.
            </p>
            <p>
              Most importantly, it will strengthen community bonding and create
              a shared sense of ownership for a cleaner, healthier Arambagh.
              Long after the event ends, its message will continue to ripple
              through conversations, choices, and actions.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 opacity-10 sm:opacity-20">
            <Leaf className="w-16 sm:w-24 h-16 sm:h-24 text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Call to Action ---
const CallToActionSection = () => (
  <section className="section-padding bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 sm:mb-16"
      >
        {/* Enhanced heading */}
        <div className="inline-block mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="h-1 w-8 sm:w-12 bg-yellow-400 rounded-full"></div>
            <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-300 animate-pulse" />
            <div className="h-1 w-8 sm:w-12 bg-yellow-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 drop-shadow-lg px-4">
            Join the Movement
          </h2>
          <div className="h-1.5 w-24 sm:w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full mx-auto"></div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-green-50 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed font-medium px-4">
          Your single step can inspire a hundred more.
        </p>
        <p className="text-base sm:text-lg text-green-100 max-w-2xl mx-auto px-4">
          Come, be part of this beautiful journey toward a greener tomorrow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
        {[
          {
            title: "Students",
            description:
              "Step forward with energy and courage—your enthusiasm can light up this movement.",
            icon: Users,
            emoji: "🎓",
          },
          {
            title: "Schools",
            description:
              "Join us in shaping young minds with awareness and responsibility.",
            icon: Target,
            emoji: "🏫",
          },
          {
            title: "Corporates",
            description:
              "Walk with us to show your commitment to sustainability and community well-being.",
            icon: Heart,
            emoji: "🏢",
          },
          {
            title: "Residents & Youth",
            description:
              "Bring your families, friends, and neighbours. Let Chandur rise as one.",
            icon: Sparkles,
            emoji: "🤝",
          },
        ].map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full flex flex-col shadow-xl">
              {/* Icon and emoji */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="text-3xl sm:text-4xl">{group.emoji}</div>
                <group.icon className="w-8 sm:w-10 h-8 sm:h-10 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-3 text-white">
                {group.title}
              </h3>

              {/* Description */}
              <p className="text-green-50 leading-relaxed flex-grow text-sm sm:text-base">
                {group.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
                <div className="flex items-center gap-2 text-yellow-300 font-semibold text-xs sm:text-sm">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Be Part of It
                  </span>
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Registration CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center"
      >
        <div className="relative inline-block group w-full sm:w-auto px-4">
          {/* Glowing effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

          {/* Button */}
          <button className="relative w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-6 bg-white text-green-700 font-black text-lg sm:text-xl md:text-2xl rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 sm:gap-4">
            <span className="text-2xl sm:text-3xl animate-bounce">🌟</span>
            <span>Registration Opens Soon</span>
            <span
              className="text-2xl sm:text-3xl animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              🌟
            </span>
          </button>
        </div>

        {/* Additional info */}
        <p className="mt-4 sm:mt-6 text-green-100 text-sm sm:text-base font-semibold flex flex-wrap items-center justify-center gap-2 px-4">
          <span className="animate-pulse">🔔</span>
          <span className="text-center">
            Stay tuned for updates and announcements
          </span>
          <span className="animate-pulse" style={{ animationDelay: "0.5s" }}>
            🔔
          </span>
        </p>
      </motion.div>
    </div>
  </section>
);

// --- Closing Message ---
const ClosingSection = () => (
  <section className="section-padding bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="mb-8">
          <Leaf className="w-16 h-16 text-green-600 mx-auto mb-6" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Walk the Change. Walk Together.
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            At ChangeSpark Foundation, we believe that every change begins with
            a spark—an idea, a hope, a decision to care. Green Walkathon 2026 is
            our heartfelt invitation to you to walk with purpose, walk with
            pride, and walk for the earth we all call home.
          </p>
          <p>
            Together, we can shape a future that reflects the values Swami
            Vivekananda dreamed of—strong youth, united communities, and a world
            filled with harmony and compassion.
          </p>
          <p className="text-2xl font-semibold text-green-700 mt-8">
            Let's walk the change. Let's walk together.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Main Page Export ---
export default function GreenWalkathon2026Page() {
  return (
    <main className="bg-background-100">
      <EventHeader />
      <IntroductionSection />
      <StorySection />
      <WhyItMattersSection />
      <MissionObjectivesSection />
      <ImpactSection />
      <CallToActionSection />
      <ClosingSection />
    </main>
  );
}
