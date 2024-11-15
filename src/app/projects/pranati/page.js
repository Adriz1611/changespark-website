import React from "react";
import Image from "next/image";

const projectData = {
  headerImage: "/bhadreswar.avif",
  galleryImages: [
    "/pranati1.jpeg",
    "/pranati2.jpeg",
    "/pranati3.jpeg",
    "/pranati4.jpeg",
    "/pranati5.jpeg",
  ],
};

export default function ProjectPranati() {
  return (
    <div className="min-h-screen py-8 px-8 md:py-28 bg-background-100">
      {/* Header Section */}
      <section className="relative h-[500px] overflow-hidden mb-16 rounded-xl mt-8 md:mt-0">
        <Image
          src={projectData.headerImage}
          alt="Project Pranati Header Image"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center opacity-30 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-text-800 sm:text-5xl lg:text-6xl">
            Project Pranati
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            Empowering Through Entrepreneurship
          </p>
        </div>
      </section>

      {/* Article Section */}
      <article className="container mx-auto max-w-3xl text-center px-4">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-secondary-700 sm:text-4xl md:text-5xl mb-10">
          Why Entrepreneurship Matters
        </h2>
        <p className="text-lg text-justify mb-10">
          Entrepreneurship is more than business—it&apos;s the engine of community
          change. For families in rural areas affected by economic instability,
          creating small businesses can provide a steady source of income,
          reduce unemployment, and contribute to the local economy. MEDP not
          only trains individuals but also nurtures an ecosystem of support,
          collaboration, and innovation that grows with each new venture.
        </p>

        {/* Approach Section */}
        <h2 className="text-3xl font-bold text-secondary-700 sm:text-4xl md:text-5xl mb-10">
          Our Approach to Entrepreneurship Development
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* Cards */}
          {[
            {
              title: "Vocational Training and Skill Development",
              text: "Hands-on training in skills like sewing, upcycling, and product development. Each program equips participants with technical expertise to launch their businesses.",
            },
            {
              title: "Business Design and Management",
              text: "In-depth training in business management, financial literacy, and inventory control, preparing entrepreneurs for challenges in running a business.",
            },
            {
              title: "Innovative Product Development",
              text: "Fosters creativity with training in product design, prototyping, and trend analysis to create high-quality, market-relevant products.",
            },
            {
              title: "Market Access and Sales Support",
              text: "Provides access to market research, branding, and product positioning workshops to help participants enter and thrive in the market.",
            },
            {
              title: "Mentorship and Ongoing Support",
              text: "An ecosystem of mentorship and peer collaboration through regular check-ins, mentorship sessions, and peer-support groups.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-background-200 p-6 rounded-xl shadow-lg text-left ${
                index === 4
                  ? "col-span-full md:col-span-2 lg:col-span-2 mx-auto"
                  : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-secondary-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Programs Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-secondary-700 sm:text-4xl md:text-5xl mb-10">
          Our Programs
        </h2>

        <p className="text-lg text-text-700 mb-16 max-w-2xl mx-auto">
          Our program targets women aged 18-30, providing them with the
          opportunity to learn, grow, and take charge of their futures. The core
          components of our MEDP training include:
        </p>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              title: "Sewing Skills Development",
              text: "Training in hand sewing, machine operations, and pattern drafting for foundational product creation skills.",
            },
            {
              title: "Product Development",
              text: "Designing and developing market-appealing products focused on creativity and functionality.",
            },
            {
              title: "Business Management",
              text: "Skills in financial management, quality control, and inventory management for sustainable businesses.",
            },
            {
              title: "Sales and Marketing",
              text: "Strategies for market positioning, customer engagement, and digital literacy to maximize reach and sales.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-background-200 p-6 rounded-xl shadow-lg text-left"
            >
              <h3 className="text-2xl font-semibold text-secondary-700 mb-2">
                {item.title}
              </h3>
              <p className="leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 text-justify px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary-700 sm:text-4xl md:text-5xl mb-10 text-center">
            Building Sustainable Impact
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            At Changespark Foundation, the ultimate goal of our entrepreneurship
            program is to empower individuals to build businesses that are
            resilient, sustainable, and impactful. By nurturing entrepreneurial
            talent and providing lasting support, we create economic
            opportunities that lift individuals, families, and entire
            communities.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We are committed to long-term growth and innovation in our programs,
            integrating the latest practices in digital literacy and vocational
            training to ensure our participants remain competitive in an
            evolving market.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Together, we are building a future where entrepreneurship lights the
            way toward financial independence, social inclusion, and a thriving
            local economy. Through MEDP, Changespark Foundation is paving the
            path to a sustainable, empowered tomorrow.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-secondary-700 sm:text-4xl md:text-5xl mb-10 text-center">
            Project Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {projectData.galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative h-40 overflow-hidden rounded-lg"
              >
                <Image
                  src={img}
                  alt={`Project Pranati Image ${index + 1}`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
