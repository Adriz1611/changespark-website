"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  Sparkles,
  Heart,
  MessageCircle
} from "lucide-react";

// ----- Sub Components -----
const ContactCard = ({ color, gradientFrom, gradientTo, title, description, linkText, href, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.4, 0.25, 1],
        delay: index * 0.1 
      } 
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient glow */}
      <div className={`absolute -inset-[2px] bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500`} />
      
      <div className="relative rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="relative p-8">
          <div className="flex items-start gap-5">
            <motion.div 
              className={`${color} p-4 rounded-xl shadow-inner relative overflow-hidden`}
              animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/40"
                initial={{ x: "-100%", opacity: 0 }}
                animate={isHovered ? { x: "100%", opacity: [0, 1, 0] } : {}}
                transition={{ duration: 0.8 }}
              />
              {React.cloneElement(icon, { className: "w-6 h-6 relative z-10" })}
            </motion.div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">{description}</p>
              
              {linkText && (
                <motion.a
                  href={href}
                  className="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                  whileHover={{ x: 3 }}
                >
                  <span className="relative">
                    {linkText}
                    <motion.span 
                      className="absolute -bottom-0.5 left-0 h-0.5 bg-emerald-700"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ icon, label, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <div className="relative h-14 w-14 grid place-items-center rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 group-hover:shadow-xl group-hover:ring-emerald-200">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/20 group-hover:to-teal-400/20 transition-all duration-300" />
        {React.cloneElement(icon, { className: "w-5 h-5 text-gray-700 group-hover:text-emerald-700 transition-colors relative z-10" })}
      </div>
      
      <motion.span 
        className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        initial={{ y: -5 }}
        whileHover={{ y: 0 }}
      >
        {label}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-gray-900" />
      </motion.span>
    </motion.a>
  );
};

// ----- Main Component -----
const ContactUs = () => {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.4, 0.25, 1] 
      } 
    },
  };

  const container = {
    hidden: {},
    show: { 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      } 
    },
  };

  const socialLinks = [
    { icon: <Facebook />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61560185391368" },
    { icon: <Instagram />, label: "Instagram", href: "https://www.instagram.com/changesparkfoundation/" },
    { icon: <Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/company/changespark-foundation/" },
  ];

  const contactItems = [
    {
      color: "bg-gradient-to-br from-emerald-100 to-green-100",
      gradientFrom: "from-emerald-400/30",
      gradientTo: "to-green-400/30",
      title: "Drop Us a Line",
      description: "Got a question or feedback? Email us and we'll get back to you as soon as we can. Your thoughts are important to us, and we are here to help!",
      linkText: "connect@changespark.in",
      href: "mailto:connect@changespark.in",
      icon: <Mail className="text-emerald-700" />,
    },
    {
      color: "bg-gradient-to-br from-teal-100 to-cyan-100",
      gradientFrom: "from-teal-400/30",
      gradientTo: "to-cyan-400/30",
      title: "Give Us a Call",
      description: "Prefer to chat or call? We are available to discuss how we can work together to empower communities and ignite change.",
      linkText: "+91 8961520779",
      href: "tel:+918961520779",
      icon: <Phone className="text-teal-700" />,
    },
    {
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
      gradientFrom: "from-green-400/30",
      gradientTo: "to-emerald-400/30",
      title: "Follow Us",
      description: "Stay updated on our latest projects, success stories, and upcoming events by connecting with us on social media. Together, let's build a community of change-makers!",
      icon: <MessageCircle className="text-green-700" />,
    },
  ];

  return (
    <MotionConfig reducedMotion={reduce ? "always" : "never"}>
      <section className="relative py-32 lg:py-40 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full mix-blend-overlay filter blur-3xl"
              animate={{ 
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full mix-blend-overlay filter blur-3xl"
              animate={{ 
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="text-center max-w-5xl mx-auto">  
              
            <motion.h1 
              variants={fadeUp}
              className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white"
            >
              Let's <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Connect</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Ready to make a difference? We are here to collaborate, listen, and create meaningful change together.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 lg:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249 250 251)"/>
          </svg>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            className="text-center mb-16 lg:mb-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Get in Touch
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to connect with us. We're always eager to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Cards */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              {contactItems.map((item, index) => (
                <ContactCard key={item.title} {...item} index={index} />
              ))}
            </motion.div>

            {/* Visual + socials */}
            <motion.div
              className="flex flex-col items-center justify-center space-y-10 lg:sticky lg:top-32"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              {/* Enhanced floating image */}
              <motion.div
                animate={reduce ? {} : { y: [0, -15, 0] }}
                transition={reduce ? {} : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/contactus.jpg"
                    alt="Changespark Foundation Team"
                    width={560}
                    height={420}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">Join Our Mission</h3>
                    <p className="text-sm">Together, we can spark lasting change</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.blockquote
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto px-6"
              >
                <p className="text-xl font-medium text-gray-700 italic relative">
                  <span className="absolute -top-4 -left-2 text-5xl text-emerald-200">"</span>
                  At Changespark Foundation, your journey with us begins here—let's spark change together!
                  <span className="absolute -bottom-6 -right-2 text-5xl text-emerald-200">"</span>
                </p>
              </motion.blockquote>

              {/* Enhanced Social Links */}
              <motion.div variants={container} className="flex flex-col items-center gap-6">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Connect with us</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <SocialLink key={link.label} {...link} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default dynamic(() => Promise.resolve(ContactUs), { ssr: false });