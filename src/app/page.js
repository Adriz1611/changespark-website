"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// --- Hero Section Component ---
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-50 pt-20"
    >
      {/* Background Image & Effects */}
      <div className="absolute inset-0">
        {/* Main Background Image - Now Brighter */}
        <Image
          src="/bg.jpg" // Your background image
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover opacity-95" // Increased opacity for brightness
        />

        {/* Softer Floating light effects for energy */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-400/25 rounded-full filter blur-3xl animate-orb-float-1"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/25 rounded-full filter blur-3xl animate-orb-float-2"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Green Walkathon 2026 Banner - Enhanced */}
          <Link
            href="/green-walkathon-2026"
            aria-label="Green Walkathon 2026 event – details and participation"
          >
            <div
              className="relative w-full sm:w-auto px-2 sm:px-0 mb-8 group focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-3xl"
              tabIndex={0}
            >
              {/* Soft glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-700 via-emerald-500 to-green-600 bg-[length:200%_100%] animate-gradient-x text-white rounded-3xl sm:rounded-full border-2 border-emerald-300/70 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-[1.03] sm:hover:scale-105 cursor-pointer overflow-hidden">
                {/* Shimmer (disabled on mobile for clarity) */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>

                {/* Event identity */}
                <div className="relative z-10 flex items-center gap-3 sm:gap-4 text-left w-full sm:w-auto justify-center sm:justify-start">
                  <span className="relative flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-70"></span>
                    <span className="relative inline-flex rounded-full h-full w-full bg-emerald-100"></span>
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl sm:animate-bounce-slow drop-shadow-lg flex-shrink-0">
                    🌱
                  </span>
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.35em] text-emerald-100/90 font-medium whitespace-nowrap">
                      ChangeSpark presents
                    </span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide sm:tracking-wider drop-shadow-md whitespace-nowrap">
                      GREEN WALKATHON 2026
                    </span>
                  </div>
                </div>

                {/* Horizontal divider for mobile, vertical for desktop */}
                <div className="w-20 h-px sm:w-px sm:h-12 bg-emerald-200/40"></div>

                {/* Details row */}
                <div
                  className="relative z-10 flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 text-[11px] sm:text-sm md:text-base font-semibold bg-white/10 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-0 px-3 py-2 sm:px-0 sm:py-0 rounded-2xl sm:rounded-full border border-white/20 sm:border-0 overflow-x-auto scrollbar-none"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <span className="text-emerald-50 px-3 py-1 bg-black/25 rounded-lg shadow-sm whitespace-nowrap flex items-center gap-1">
                    <svg
                      className="w-3 h-3 opacity-80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    12 JAN
                  </span>
                  <span className="text-white px-3 py-1 bg-black/25 rounded-lg shadow-sm whitespace-nowrap">
                    CHANDUR
                  </span>
                  <span className="flex items-center gap-1.5 sm:gap-2 text-emerald-50 px-3 py-1 bg-black/25 rounded-lg shadow-sm group-hover:bg-black/30 transition-colors whitespace-nowrap">
                    Join the movement
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-800">
              <span className="block mb-2">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  EMPOWERING
                </span>{" "}
                <span className="inline-block bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  POWER
                </span>
              </span>
              <span className="block">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  IGNITING
                </span>{" "}
                <span className="inline-block bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  CHANGE
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Building sustainable communities through empowerment, and
            collaborative action that creates lasting impact across rural
            Bengal.
          </p>

          {/* Stats Section - Simplified and without boxes/emojis */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-12">
            {[
              { number: "7000", suffix: "+", label: "Lives Reached" },
              { number: "3", suffix: "+", label: "Projects" },
              { number: "20", suffix: "+", label: "Volunteers" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-sm font-semibold text-gray-900 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Primary and Tertiary are now identical */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            {/* Primary Button */}
            <Link href="/donate">
              <button className="group relative w-full sm:w-auto px-8 py-3 overflow-hidden rounded-full font-semibold text-sm shadow-xl transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  Support a Cause
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            {/* Secondary Button */}
            <Link href="/join-us">
              <button className="group relative w-full sm:w-auto px-8 py-3 bg-white/70 backdrop-blur-md text-green-700 rounded-full font-semibold text-sm border-2 border-green-200/80 hover:border-green-400 hover:bg-white transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Volunteer With Us
                  <svg
                    className="w-4 h-4 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            {/* Tertiary Button - Now styled identically to the Primary Button */}
            <Link href="/projects">
              <button className="group relative w-full sm:w-auto px-8 py-3 overflow-hidden rounded-full font-semibold text-sm shadow-xl transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  Explore Work
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- About Section Component ---
const AboutSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    {
      src: "/pranati1.png",
      alt: "Project Pranati",
      caption: "Empowering Women",
      stat: "150+ Women Empowered",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      src: "/BGSHP.jpg",
      alt: "Green Gyan",
      caption: "Building Green Schools",
      stat: "15+ Schools",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      src: "/GCHP.jpg",
      alt: "Plant for Tomorrow",
      caption: "Greening Communities",
      stat: "100+ Trees Planted",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  useEffect(() => {
    setTimeout(() => setImagesLoaded(true), 100);
  }, []);

  const contentCards = [
    {
      title: "Our Mission",
      content:
        "ChangeSpark Foundation is a purpose-driven social development organization working to ignite change at the grassroots. Rooted in the heartlands of rural and semi-urban West Bengal.",
      icon: "🎯",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Our Approach",
      content:
        "We work at the intersection of environmental sustainability and inclusive economic growth, addressing climate change through community-led action and regenerative practices.",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Our Impact",
      content:
        "We champion entrepreneurial thinking, skill development, and capacity-building among rural women—creating pathways for self-reliance, innovation, and leadership.",
      icon: "📈",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Our Vision",
      content:
        "ChangeSpark Foundation empowers communities to create sustainable livelihoods, protect the planet, and foster dignity, purpose, and hope through transparency, compassion, and collaboration.",
      icon: "✨",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: "#bfedbfaa" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/20 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4 shadow-soft">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                WHO WE ARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
              Transforming Lives Through{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Sustainable Action
                </span>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-green-200/30 -rotate-1"></div>
              </span>
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Content Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contentCards.map((item, i) => (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500 transform group-hover:scale-105`}
                ></div>
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
                  <div className="relative inline-block mb-4">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-2xl blur-xl transform group-hover:scale-150 transition-transform duration-500`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transform group-hover:rotate-12 transition-transform duration-500 shadow-lg`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.content}
                  </p>

                  <div className="mt-4 h-1 bg-gradient-to-r from-green-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {images.map((img, index) => (
              <div
                key={img.alt}
                className={`group relative transform transition-all duration-700 ${
                  imagesLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${img.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500`}
                  ></div>

                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        {img.stat}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {img.caption}
                      </h3>
                      <div className="flex items-center text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Link href="/projects" className="flex items-center">
                          <span className="text-sm">Learn More</span>
                          <svg
                            className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Core Values Section ---
const CoreValuesSection = () => {
  const [hoveredValue, setHoveredValue] = useState(null);
  const values = [
    {
      icon: "/Innovation.png",
      title: "Innovation",
      description:
        "Pioneering creative solutions for complex social challenges",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      details: "We embrace cutting-edge approaches and technologies",
    },
    {
      icon: "/Collaboration.png",
      title: "Collaboration",
      description: "Building strong partnerships for collective impact",
      gradient: "from-blue-400 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      details: "Together we achieve more than we could alone",
    },
    {
      icon: "/Sustainability.png",
      title: "Sustainability",
      description: "Creating lasting change that benefits future generations",
      gradient: "from-green-400 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      details: "Every action considers long-term environmental impact",
    },
    {
      icon: "/Empowerment.png",
      title: "Empowerment",
      description: "Enabling communities to drive their own development",
      gradient: "from-pink-400 to-red-500",
      bgGradient: "from-pink-50 to-red-50",
      details: "We believe in the power of local leadership",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white"
      style={{ backgroundColor: "#bfedbfaa" }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-green-200/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-emerald-200/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4 shadow-soft">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              OUR FOUNDATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
            Core{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every decision and action we take
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500 transform group-hover:scale-110 blur-xl`}
              ></div>

              <div
                className={`relative bg-gradient-to-br ${value.bgGradient} backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50`}
              >
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-20 blur-xl transform group-hover:scale-150 transition-transform duration-500`}
                  ></div>
                  <div
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl`}
                  >
                    <img
                      src={value.icon}
                      alt={value.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 transform group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {value.description}
                </p>

                <p
                  className={`text-xs sm:text-sm text-gray-500 italic transition-all duration-500 ${
                    hoveredValue === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  {value.details}
                </p>

                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Community Leader",
      location: "West Bengal",
      content:
        "ChangeSpark has transformed our village. The education programs have given our children hope and opportunities we never thought possible. Their dedication is truly remarkable.",
      rating: 5,
      impact: "500+ lives changed",
    },
    {
      name: "Rajesh Kumar",
      role: "Parent & Entrepreneur",
      location: "Rural Bengal",
      content:
        "The skill development programs for women have empowered my wife to start her own business. Our family's life has completely changed for the better.",
      rating: 5,
      impact: "New business started",
    },
    {
      name: "Anita Das",
      role: "School Teacher",
      location: "Kolkata",
      content:
        "Working with ChangeSpark has been incredibly rewarding. Their innovative approach to education is making a real difference in our community.",
      rating: 5,
      impact: "200+ students taught",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-100/50 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4 shadow-soft">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
            Voices of{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Change
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-green-200 opacity-50">
              <svg
                className="w-20 h-20 sm:w-32 sm:h-32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div
              className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden transform transition-all duration-500"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-full filter blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="ml-3 text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full">
                    {testimonials[activeTestimonial].impact}
                  </span>
                </div>

                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                      {testimonials[activeTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {testimonials[activeTestimonial].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={() =>
                setActiveTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeTestimonial
                      ? "w-12 h-3 bg-gradient-to-r from-green-500 to-emerald-500"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
              }
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Home Component ---
export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <Testimonials />
    </main>
  );
}
