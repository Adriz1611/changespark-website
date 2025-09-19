"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { Heart, Users, Target, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const impactStats = [
  { number: "1000+", label: "Lives Touched", icon: Users },
  { number: "15+", label: "Active Projects", icon: Target },
  { number: "5+", label: "Years of Impact", icon: Sparkles },
];

const DonateHero = () => (
  <section className="relative py-32 lg:py-40 bg-gradient-to-br from-background-800 via-background-900 to-background-950 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-300 rounded-full mix-blend-overlay filter blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
    <div className="container-custom relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white font-heading">
          Support Our Mission
        </h1>
        <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed font-paragraph">
          Your generosity enables us to create lasting change in communities
          across West Bengal.
        </p>
      </motion.div>
    </div>
  </section>
);


export default function Donate() {
  const fallbackScript = `setTimeout(function () {
    const c = document.getElementById('ngoContentContainer');
    if (c && c.innerHTML.length < 40) {
      c.innerHTML = "<center><p style='color:#a94442;'>We are sorry that our systems are down. We will be up shortly. Apologies for the inconvenience.</p></center>";
    }
  }, 20000);`;

  return (
    <>
      <Script
        src="https://danamojo.org/dm/js/widget.js"
        strategy="afterInteractive"
      />
      <Script id="dm-fallback" strategy="afterInteractive">
        {fallbackScript}
      </Script>

      <DonateHero />


      {/* Main Donation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-8 lg:p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-secondary-700 mb-4">
                  Make a Difference Today
                </h2>

                <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
                  Every contribution, no matter the size, helps us empower
                  women, educate children, and build sustainable communities.
                  Join us in creating positive change.
                </p>

                {/* Donation Widget Container */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div id="dmScriptContainer" style={{ display: "none" }}>
                    <a href="#">Donate Now</a>
                  </div>

                  <div
                    id="ngoContentContainer"
                    iNGOId="1319"
                    oDisplay="product"
                    className="min-h-[300px] flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-secondary-600">
                        Loading donation options...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-secondary-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Tax Deductible</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Instant Receipt</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Change Lives?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Join our community of changemakers and be part of something
              bigger. Together, we can create lasting impact in communities that
              need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/projects" className="btn-secondary text-lg">
                See Our Impact
              </a>
              <a href="/contact-us" className="btn-outline text-lg">
                Get Involved
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
