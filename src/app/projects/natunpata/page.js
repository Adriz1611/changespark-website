import React from "react";
import Image from "next/image";

const projectData = {
  headerImage: "/goghat-header.jpeg",
  galleryImages: [
    "/goghat1.jpeg",
    "/goghat2.jpeg",
    "/goghat3.jpeg",
    "/goghat4.jpeg",
    "/goghat5.jpeg",
  ],
};

export default function NatunPata() {
  return (
    <div className="min-h-screen py-8 px-8 lg:py-28 bg-background-100">
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={projectData.headerImage}
          alt="Early Childhood Education Header Image"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center rounded-xl opacity-30"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-text-800">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Natun Pata
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:mt-5 sm:text-xl lg:text-2xl">
            Early Childhood Education: Where It All Begins
          </p>
        </div>
      </section>

      <article className="container mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <div className="prose prose-lg prose-neutral mx-auto max-w-3xl dark:prose-invert text-text-700">
          <h2 className="text-5xl font-bold text-center mb-8 text-secondary-700">
            Why Early Childhood Education Matters?
          </h2>
          <p className="text-lg pt-5 text-justify">
            Imagine the wonder of a child discovering letters, counting numbers,
            or painting a picture of their world. Early Childhood Education
            (ECE) is that spark—a time when young minds bloom, and their natural
            curiosity fuels growth across all areas of development. <br></br>{" "}
            <br></br> In these formative years, children build the foundation of
            who they will become. ECE is vital because it nurtures cognitive
            skills, social awareness, emotional resilience, and physical
            abilities that shape a child&apos;s journey. But for many rural children,
            barriers like limited access and scarce resources make this
            opportunity feel distant.
          </p>

          <h3 className="text-5xl font-bold text-center mb-8 text-secondary-700 m-10 mt-14">
            A Vision with Impact
          </h3>
          <p className="text-lg pt-5">
            At Changespark, we don&apos;t just teach—we transform. Guided by
            in-depth research and a genuine commitment to community needs, our
            approach brings meaningful change to early childhood education.
          </p>
          <div className="grid gap-8 max-w-7xl mx-auto">
            {/* First row with 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tailored Needs Assessment */}
              <div className="group h-64 [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-background-200 rounded-xl shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold text-secondary-700 group-hover:scale-105 transition-transform duration-500">
                      Tailored Needs Assessment
                    </h3>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-background-200 p-8 text-secondary-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center">
                      <p className="md:text-sm leading-relaxed">
                        We understand that every community is unique. Through
                        dedicated needs assessments, we adapt our programs to
                        reflect each area&apos;s strengths and challenges, ensuring
                        our support is impactful and sustainable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empowering Educators */}
              <div className="group h-64 [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-background-200 rounded-xl shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold text-secondary-700 group-hover:scale-105 transition-transform duration-500">
                      Empowering Educators
                    </h3>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-background-200 p-8 text-secondary-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center">
                      <p className="md:text-sm leading-relaxed">
                        The heart of our program lies with our teachers, trained
                        with the expertise to inspire young minds. Our
                        educators, certified in early childhood development,
                        create engaging, nurturing classrooms where children
                        feel safe and eager to learn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Class Sizes, Big Impacts */}
              <div className="group h-64 [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-background-200 rounded-xl shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold text-secondary-700 group-hover:scale-105 transition-transform duration-500">
                      Small Class Sizes, Big Impacts
                    </h3>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-background-200 p-8 text-secondary-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center">
                      <p className="md:text-sm leading-relaxed">
                        We believe that learning is personal. By maintaining
                        small class sizes, we ensure every child receives the
                        attention they need to thrive, with a teacher who truly
                        knows them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second row with 2 centered cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center lg:justify-around">
              {/* Community as Partners in Learning */}
              <div className="group h-64 [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-background-200 rounded-xl shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold text-secondary-700 group-hover:scale-105 transition-transform duration-500">
                      Community as Partners in Learning
                    </h3>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-background-200 p-8 text-secondary-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center">
                      <p className="md:text-sm leading-relaxed">
                        A child&apos;s first teacher is their family. That&apos;s why we
                        host monthly workshops for parents on child development,
                        creating a shared journey where learning extends beyond
                        the classroom and into the heart of each home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play-Based, Creative Curriculum */}
              <div className="group h-64 [perspective:1000px]">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-background-200 rounded-xl shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold text-secondary-700 group-hover:scale-105 transition-transform duration-500">
                      Play-Based, Creative Curriculum
                    </h3>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-background-200 p-8 text-secondary-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center">
                      <p className="md:text-sm leading-relaxed">
                        Learning is an adventure at Changespark. Our play-based
                        curriculum blends joy and discovery, encouraging
                        children to explore, create, and grow. From storytelling
                        to art, each day is crafted to inspire a lifelong love
                        for learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-5xl font-bold text-center m-16 mt-20 text-secondary-700">
            Our Age-Specific Programs
          </h2>
          <p className="text-lg text-center pt-5 mb-12 max-w-3xl mx-auto">
            Our programs offer a continuum of care and learning designed to fit
            the developmental needs of children at every stage.
          </p>

          <div className="relative flex flex-col items-center lg:items-start lg:flex-row lg:justify-center lg:gap-8 max-w-7xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute h-full w-1 bg-secondary-300 lg:left-1/2 lg:transform lg:-translate-x-1/2"></div>

            {/* Timeline Item: Playgroup */}
            <div className="relative flex flex-col items-center lg:items-start mb-16 lg:w-1/2">
              <div className="flex items-center">
                <div className="bg-secondary-700 h-8 w-8 rounded-full"></div>
                <h3 className="ml-4 text-2xl font-semibold text-secondary-700">
                  Playgroup (2-3 years)
                </h3>
              </div>
              <p className="mt-4 text-center lg:text-left  max-w-md">
                A world of exploration and gentle guidance.
              </p>
            </div>

            {/* Timeline Item: Nursery */}
            <div className="relative flex flex-col items-center lg:items-start mb-16 lg:w-1/2 lg:self-end">
              <div className="flex items-center">
                <div className="bg-secondary-700 h-8 w-8 rounded-full"></div>
                <h3 className="ml-4 text-2xl font-semibold text-secondary-700">
                  Nursery (3-4 years)
                </h3>
              </div>
              <p className="mt-4 text-center lg:text-left  max-w-md">
                A vibrant introduction to structured learning.
              </p>
            </div>

            {/* Timeline Item: Junior KG */}
            <div className="relative flex flex-col items-center lg:items-start mb-16 lg:w-1/2">
              <div className="flex items-center">
                <div className="bg-secondary-700 h-8 w-8 rounded-full"></div>
                <h3 className="ml-4 text-2xl font-semibold text-secondary-700">
                  Junior KG (4-5 years)
                </h3>
              </div>
              <p className="mt-4 text-center lg:text-left max-w-md">
                A stepping stone for creativity and curiosity.
              </p>
            </div>

            {/* Timeline Item: Senior KG */}
            <div className="relative flex flex-col items-center lg:items-start mb-16 lg:w-1/2 lg:self-end">
              <div className="flex items-center">
                <div className="bg-secondary-700 h-8 w-8 rounded-full"></div>
                <h3 className="ml-4 text-2xl font-semibold text-secondary-700">
                  Senior KG (5-6 years)
                </h3>
              </div>
              <p className="mt-4 text-center lg:text-left max-w-md">
                A preparation ground for the exciting journey into formal
                schooling.
              </p>
            </div>
          </div>

          <section className="min-h-screen bg-background-100 py-16 px-8">
            <h2 className="text-5xl font-bold text-center mb-8 text-secondary-700">
              Our Vision for Impact
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              Our commitment doesn&apos;t end in the classroom. We envision a future
              of expanded access, empowered families, passionate learners, and
              supportive communities.
            </p>

            <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center bg-secondary-700 h-16 w-16 rounded-full text-white font-bold text-2xl mb-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-secondary-700 mb-2">
                  Broadened Access to Quality ECE
                </h3>
                <p className="t max-w-md">
                  Bringing education closer to underserved communities so every
                  child has a fair start.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center bg-secondary-700 h-16 w-16 rounded-full text-white font-bold text-2xl mb-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-secondary-700 mb-2">
                  Empowered Parents and Caregivers
                </h3>
                <p className="max-w-md">
                  Guiding families to be active, supportive partners in their
                  child&apos;s learning journey.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center bg-secondary-700 h-16 w-16 rounded-full text-white font-bold text-2xl mb-4">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-secondary-700 mb-2">
                  Engaged, Passionate Learners
                </h3>
                <p className="max-w-md">
                  Instilling a curiosity for life, creating learners who think,
                  question, and aspire.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center bg-secondary-700 h-16 w-16 rounded-full text-white font-bold text-2xl mb-4">
                  4
                </div>
                <h3 className="text-2xl font-semibold text-secondary-700 mb-2">
                  A Stronger, Supportive Community
                </h3>
                <p className=" max-w-md">
                  Partnering with local leaders to weave education deeply into
                  the fabric of community life.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      <section className="container mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-text-800">
          Project Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {projectData.galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative h-40 overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt={`Natun Pata Image ${index + 1}`}
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
