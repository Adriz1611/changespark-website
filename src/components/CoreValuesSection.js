"use client";
import React from "react";

const values = [
  {
    title: "Integrity and Transparency",
    content:
      "We are committed to operating with honesty, accountability, and transparency. Our actions reflect our values, and we maintain open communication with our community, partners, and donors to build lasting trust.",
  },
  {
    title: "Empowerment Through Education",
    content:
      "We believe education is a powerful tool for individual and community transformation. By investing in quality education, we aim to empower every child and family to reach their fullest potential and become agents of positive change.",
  },
  {
    title: "Community-Centered Approach",
    content:
      "True change is community-driven. We actively engage with local communities to understand their unique needs, involve them in decision-making, and build programs that reflect their goals and aspirations.",
  },
  {
    title: "Sustainability and Innovation",
    content:
      "Long-term impact requires sustainable solutions. We embrace innovative approaches to address challenges and ensure that our programs are adaptable, resilient, and built to last.",
  },
  {
    title: "Inclusiveness and Equity",
    content:
      "We believe in equal opportunity for all. Our work is rooted in inclusiveness, respecting and celebrating the diverse backgrounds of the communities we serve, and ensuring that everyone has access to quality education and livelihood opportunities.",
  },
  {
    title: "Dedication to Growth and Excellence",
    content:
      "We are committed to continuous improvement, both as an organization and within the communities we serve. By fostering a culture of learning and growth, we strive for excellence in all our endeavors, ensuring that our impact is both deep and wide-reaching.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="min-h-screen bg-background-100 py-16 px-8">
      <h2 className="text-5xl font-bold text-center mb-6 text-secondary-700">
        Our Core Values
      </h2>
      <p className="text-lg text-center text-secondary-700 mb-12 max-w-3xl mx-auto">
        For a long-term commitment, Changespark Foundation upholds the following core values to drive sustainable, impactful change in every community we serve:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="group h-64 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-background-200 rounded-xl shadow-lg [backface-visibility:hidden]">
                <h3 className="text-xl font-semibold text-secondary-700 group-hover:scale-105 transition-transform duration-500">
                  {value.title}
                </h3>
              </div>

              {/* Back */}
              <div className="absolute inset-0 h-full w-full rounded-xl bg-background-200 p-8 text-secondary-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-full flex-col items-center justify-center">
                  <p className="md:text-lg leading-relaxed">{value.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
