"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const ContactUs = () => {
  const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61560185391368" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "https://www.instagram.com/changesparkfoundation/" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/company/changespark-foundation/" },
  ];

  const contactItems = [
    {
      color: "bg-green-100 text-green-700",
      title: "Drop Us a Line",
      description: "Got a question or feedback? Email us and we wll get back to you as soon as we can. Your thoughts are important to us, and we are here to help!",
      linkText: "connect@changespark.in",
      href: "mailto:connect@changespark.in",
      icon: <Mail className="w-6 h-6 text-green-700" />,
    },
    {
      color: "bg-blue-100 text-blue-700",
      title: "Give Us a Call",
      description: "Prefer to chat or call? We are available to discuss how we can work together to empower communities and ignite change.",
      linkText: "+91 8961520779",
      href: "tel:+918961520779",
      icon: <Phone className="w-6 h-6 text-blue-700" />,
    },
    {
      color: "bg-purple-100 text-purple-700",
      title: "Follow Us",
      description: "Stay updated on our latest projects, success stories, and upcoming events by connecting with us on social media. Together, lets build a community of change-makers!",
      icon: <MapPin className="w-6 h-6 text-purple-700" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background-100">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-secondary-700 mb-6">Lets Connect</h1>
          <p className="text-lg md:text-xl text-secondary-700 max-w-2xl mx-auto">Ready to make a difference? We are here to collaborate, listen, and create meaningful change together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {contactItems.map(({ color, title, description, linkText, href, icon }) => (
              <div key={title} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${color} p-3 rounded-full`}>
                    {icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-secondary-700 mb-2">{title}</h2>
                    <p className="text-secondary-600 mb-3">{description}</p>
                    {linkText && (
                      <a href={href} className="inline-flex items-center font-medium text-secondary-700 hover:text-secondary-800">
                        {linkText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Image src="/contactus.jpg" alt="Contact Us" width={500} height={400} className="mb-10" />
            <blockquote className="text-center text-xl font-semibold text-secondary-700 italic max-w-3xl mx-auto mb-12">
            &quot;At Changespark Foundation, your journey with us begins here—lets spark change together!&quot;
            </blockquote>
            <div className="flex space-x-8">
              {socialLinks.map(({ icon, label, href }) => (
                <a key={label} href={href} className="text-secondary-700 hover:text-secondary-900 transition-colors duration-300" aria-label={label} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
