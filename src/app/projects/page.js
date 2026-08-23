"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projectsData = [
  {
    title: "Project Pranati: Skilling & Employing Women",
    description:
      "In Bhadreswar, West Bengal, Project Pranati empowers women by transforming a simple needle and thread into tools of self-reliance. Through hands-on training in tailoring, design, and entrepreneurship, we help women stitch their own futures, fostering leadership, confidence, and a community-wide ripple of economic independence.",
    images: [
      "/projects/pranati/bhadreswar.jpg",
      "/pages/Project p slider2.jpg", // second image
      "/home/home1.jpg", // third image
    ],
    href: "/projects/pranati",
    impact: [
      { number: "100+", label: "Women Trained" },
      { number: "85%", label: "Income Increase" },
    ],
  },
  {
    title: "Green Gyan: Sustainability for Everyday Life",
    description:
      "Green Gyan is our grassroots environmental program, built on the belief that saving the planet begins with everyday actions. We turn theory into practice, empowering students and families to lead clean-up drives, champion waste segregation, and adopt sustainable habits that make a real difference.",
    topics: [
      "Waste Segregation & Composting",
      "Upcycling & Circular Design",
      "Water & Energy Conservation",
      "Tree Plantation Drives",
    ],
    images: [
      "/projects/greengyan/pgs1.jpg",
      "/projects/greengyan/pgs2.jpg", // second image
      "/projects/greengyan/pgs5.jpg", // third image
    ],
    href: "/projects/greengyan",
  },
  {
    title: "Mishan Yuva Vikas: Youth as Change Makers",
    description:
      "An independent youth-centric journey inspired by Viksit Bharat @2047. Mishan Yuva Vikas empowers young minds with the awareness, skills, opportunities, confidence and leadership to contribute meaningfully to India's development journey.",
    topics: [
      "Leadership & Future-ready Skills",
      "Community Projects & Changemaking",
      "Campus Ambassador Programme",
      "Opportunity Navigation & Mentorship",
    ],
    href: "/projects/yuva-vikas",
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

const ProjectsHero = () => (
  <section className="relative py-32 lg:py-40 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white overflow-hidden">
    {/* Animated Background Pattern */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>

    <div className="container-custom relative z-10">
      <div className="text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white font-heading"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
            Impact
          </span>{" "}
          in Action
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed font-paragraph mb-8"
        >
          Discover how we're creating lasting change through innovative programs
          and community partnerships across West Bengal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-sm lg:text-base"
        ></motion.div>
      </div>
    </div>

    {/* Decorative Bottom Wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg
        className="w-full h-16 lg:h-24"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="rgb(249 250 251)"
        />
      </svg>
    </div>
  </section>
);

// Image Slider Component
const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative card-hover rounded-2xl">
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-lg opacity-30"></div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative w-full h-[450px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 font-heading">
              Our Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-paragraph">
              We work across multiple sectors to address the interconnected
              challenges facing communities.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={
                  project.images
                    ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    : "max-w-4xl mx-auto"
                }
              >
                <div
                  className={`lg:pr-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-paragraph mb-8">
                    {project.description}
                  </p>

                  {project.impact && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {project.impact.map((stat) => (
                        <div
                          key={stat.label}
                          className="text-center p-4 bg-gradient-to-br from-green-50 to-primary-100 rounded-xl border border-primary-200"
                        >
                          <div className="text-3xl font-bold text-primary-700">
                            {stat.number}
                          </div>
                          <div className="text-primary-600 font-medium mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {project.topics && (
                    <div className="mb-8">
                      <h4 className="font-bold text-xl text-gray-800 mb-4 font-heading">
                        Key Activities:
                      </h4>
                      <ul className="space-y-3">
                        {project.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-center text-lg text-gray-700 font-paragraph"
                          >
                            <CheckIcon />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link href={project.href} passHref>
                    <button className="btn-primary text-lg mt-4">
                      Learn More
                    </button>
                  </Link>
                </div>

                {project.images && (
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <ImageSlider images={project.images} title={project.title} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
