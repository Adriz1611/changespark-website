import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projectData = {
  title: "Empowering Schools Together",
  subheading: "If you deserve, we serve.",
  headerImage: "/goghat-header.jpeg",
  description:
    "The ChangeSpark Foundation is making significant progress toward school transformation, and we need you to be a part of this change! Our goal is to improve education by giving schools the tools, support, and cutting-edge programs they need to make learning better for every student.",
  approach: [
    "Enhancing school infrastructure, providing libraries, technology, and electricity",
    "Supporting teachers with professional development through platforms like Diksha",
    "Promoting inclusive education for students from disadvantaged backgrounds",
    "Fostering physical, mental, and life-skills development through programs like the Fit India Movement",
  ],
  galleryImages: [
    "/goghat1.jpeg",
    "/goghat2.jpeg",
    "/goghat3.jpeg",
    "/goghat4.jpeg",
    "/goghat5.jpeg",
  ],
};

export default function EmpoweringSchools() {
  return (
    <div className="min-h-screen py-8 px-8 lg:py-28 bg-background-100">
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={projectData.headerImage}
          alt="Empowering Schools Together"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center rounded-xl opacity-30"
          style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-text-800">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {projectData.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:mt-5 sm:text-xl lg:text-2xl">
            {projectData.subheading}
          </p>
        </div>
      </section>

      <article className="container mx-auto my-12 px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8">
        <div className="prose prose-lg prose-neutral mx-auto max-w-3xl dark:prose-invert text-text-700">
          <h2 className="text-3xl font-semibold">
            About Empowering Schools Together
          </h2>
          <p className="text-lg">{projectData.description}</p>

          <h3 className="text-2xl font-semibold mt-6">Our Approach</h3>
          <ul className="list-disc list-inside ml-6">
            {projectData.approach.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mt-6">Every Child Matters</h3>
          <p className="text-lg">
            Children are the purest manifestations of love, joy, and hope. Their
            dreams matter, their lives matter. Every child deserves access to
            education, care, and love, no matter their background or
            circumstances.
          </p>
          <p className="text-lg mt-4">
            We owe it to these children to build a future where education is not
            a privilege, but a right. Every child has a mind capable of great
            things—a mind that just needs a chance to flourish.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            Enhancing School Infrastructure
          </h3>
          <p className="text-lg">
            Schools need more than just teachers and textbooks. Enhancing
            infrastructure—adding classrooms, libraries, and digital
            tools—creates conducive learning environments. Government programs
            like Samagra Shiksha Abhiyan help bridge this gap, especially in
            rural areas.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Empowering Teachers</h3>
          <p className="text-lg">
            Teachers are at the heart of the education system. Initiatives like
            Diksha offer digital training, enabling educators to stay updated
            with modern teaching techniques and empower them to deliver
            high-quality education.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            Promoting Inclusive Education
          </h3>
          <p className="text-lg">
            Programs like Sarva Shiksha Abhiyan work to ensure children from
            disadvantaged backgrounds receive equal access to education.
            Empowering schools also means creating inclusive environments where
            every child feels valued and has the opportunity to succeed.
          </p>

          <h3 className="text-2xl font-semibold mt-6">
            Focus on Holistic Growth
          </h3>
          <p className="text-lg">
            Education extends beyond academics. Programs like the Fit India
            Movement promote the overall development of students—mentally,
            physically, and emotionally. These programs ensure children grow
            into well-rounded individuals ready to face lifes challenges.
          </p>
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
                alt={`Empowering Schools Image ${index + 1}`}
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="text-center mt-12">
        <Button asChild>
          <Link href="/donate">Support Our Initiative</Link>
        </Button>
      </div>
    </div>
  );
}
