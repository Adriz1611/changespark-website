"use client";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import CoreValuesSection from "@/components/CoreValuesSection";

export default function Home() {
  const images = [
    { src: "/IMG_20240903_083424.jpg", alt: "Education", caption: "Quality Education" },
    { src: "/IMG_20240913_091930.jpg", alt: "Children", caption: "Every Child Matters" },
    { src: "/IMG_20241008_091327.jpg", alt: "School", caption: "Empowering Schools" },
  ];

  const carousel = [
    { src: "/pranati3.jpg" },
    { src: "/home3.avif" },
    { src: "/home1.avif" },
  ];

  return (
    <main className="bg-background-100 min-h-screen">
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-36">
        <div className="flex-col">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-secondary-700 dark:font-semibold mb-4">
            Changespark Foundation
          </h1>
          <p className="text-xl md:text-2xl text-green-700 font-paragraph font-bold md:px-2">
            EMPOWERING POWER IGNITING CHANGE
          </p>
          <Link href="/join-us" passHref>
            <button className="mt-7 mb-10 px-5 py-2 md:text-2xl md:py-3 md:px-9 font-medium text-white bg-background-600 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              Join Us
            </button>
          </Link>
        </div>
        <div className="w-[89vw] h-[49vh] md:w-[40vw]">
          <Carousel slideInterval={1500} pauseOnHover>
            {carousel.map((img, index) => (
              <div key={index} className="relative w-full h-full">
                <Image
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <div id="about" className="bg-background-200 min-h-screen p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold font-heading text-secondary-700 text-center dark:font-semibold pt-14 mb-6">
            About Us
          </h2>
          <div className="font-paragraph text-lg text-text-700 mb-8 pb-6">
            <p className="mb-4 text-justify">
            At Changespark Foundation, we are driven by a single vision: to empower communities through the transformative power of Education and Livelihood Development. As a nonprofit organization dedicated to creating lasting impact, we work hand-in-hand with rural communities to close educational gaps and cultivate skills that ignite progress.
            </p>
            <p className="mb-4 text-justify">
            Our approach is built on the belief that meaningful change starts with opportunity. We focus on delivering quality Early Childhood Education (ECE) to give young children a strong start, while our Livelihood Development Programs equip individuals with the tools and training they need to thrive as micro-entrepreneurs.
            </p>
            <p className="text-justify">
            Founded with a commitment to social equity and sustainable growth, Changespark Foundation combines compassionate action with evidence-based strategies. By building partnerships with local schools, training dedicated educators, and fostering a spirit of entrepreneurship, we nurture environments where children can learn, families can prosper, and entire communities can flourish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full h-[300px] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    objectFit="cover"
                    className="rounded-md shadow-md"
                  />
                </div>
                <p className="mt-4 uppercase font-bold text-lg font-paragraph text-center text-gray-600">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CoreValuesSection />

      <section className="mx-4 md:mx-0 pb-10 grid md:grid-cols-4 md:grid-rows-2 grid-cols-1 grid-rows-4 min-h-screen items-center justify-center bg-background-200">
        <div className="flex flex-col items-center">
          <h1 className="font-heading text-5xl text-secondary-700 dark:font-semibold">
            Vision
          </h1>
        </div>
        <div className="md:col-span-3">
          <p className="font-paragraph text-lg text-text-700 p-3 text-justify md:px-10">
            Changespark Foundation envisions a world where every individual is
            empowered through education and sustainable livelihood development.
            We foresee a future where all people, regardless of their background
            or circumstances, have access to the necessary tools, resources, and
            opportunities to overcome barriers, realize their potential, and
            thrive. Through our dedicated efforts, we aim to build brighter
            tomorrows, fostering communities where individuals are equipped to
            lead fulfilling lives, contribute positively to society, and drive
            transformative change.
          </p>
        </div>
        <div className="flex flex-col items-center md:col-start-4 md:row-start-2">
          <h1 className="font-heading text-5xl font-bold text-secondary-700 dark:font-semibold">
            Mission
          </h1>
        </div>
        <div className="md:col-span-3 md:col-start-1 md:row-start-2">
          <p className="font-paragraph text-lg text-text-700 p-3 md:px-10 text-justify">
            Changespark Foundation is dedicated to igniting sustainable progress
            in rural communities by unlocking individual potential through
            transformative education and fostering a vibrant culture of
            entrepreneurship. Our mission is to empower individuals with the
            knowledge, skills, and resources needed to overcome challenges,
            innovate, and create lasting positive change. By providing access to
            quality education and encouraging an entrepreneurial spirit, we aim
            to build self-reliant communities where every person has the
            opportunity to achieve their dreams, improve their quality of life,
            and contribute to the overall development of their region. Through
            our comprehensive programs and initiatives, we strive to create an
            inclusive environment where growth, learning, and prosperity are
            within everyone&aposs reach.
          </p>
        </div>
      </section>

      <Testimonials />
    </main>
  );
}
