"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen w-full bg-background-100 px-4 md:px-8 py-8 md:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl uppercase font-heading text-secondary-700 dark:font-semibold text-center my-16"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch with Us
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8 items-start justify-center max-w-7xl mx-auto w-full">
        <motion.div
          className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/contactus.jpg" 
            alt="Contact Changespark Foundation"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        {/* Contact information box */}
        <div className="w-full md:w-1/2 flex flex-col items-start p-6 md:p-8 bg-background-200 rounded-lg shadow-lg space-y-6 border border-green-700">
          <motion.p
            className="text-base md:text-lg font-paragraph text-secondary-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            At Changespark Foundation, we're always eager to connect with those who share our passion for creating change! Whether you have questions, ideas, or simply want to learn more about our mission, we'd love to hear from you.
          </motion.p>

          <div className="space-y-6 w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">📬 Drop Us a Line</h2>
              <p className="font-paragraph text-secondary-700">
                Got a question or feedback? Email us at{" "}
                <a href="mailto:connect@changespark.in" className="text-blue-500 hover:text-blue-600 underline">
                  connect@changespark.in
                </a>{" "}
                and we'll get back to you as soon as we can. Your thoughts are important to us, and we're here to help!
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">📞 Give Us a Call</h2>
              <p className="font-paragraph text-secondary-700">
                Prefer to chat? Reach out at{" "}
                <a href="tel:+918961520779" className="text-blue-500 hover:text-blue-600 underline">
                  +91 8961520779
                </a>
                . We're available to discuss how we can work together to empower communities and ignite change.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">🌐 Follow Us</h2>
              <p className="font-paragraph text-secondary-700">
                Stay updated on our latest projects, success stories, and upcoming events by connecting with us on social media. Together, let's build a community of change-makers!
              </p>
            </motion.div>
          </div>

          <motion.p
            className="font-paragraph font-bold text-secondary-700 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            At Changespark Foundation, your journey with us begins here—let's spark change together!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;