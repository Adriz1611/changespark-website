import React from "react";
import Image from "next/image";

const AboutUs = () => {
  const images = [
    { src: "/1.jpg", alt: "Education", caption: "Quality Education" },
    { src: "/3.jpg", alt: "Children", caption: "Every Child Matters" },
    { src: "/2.jpg", alt: "School", caption: "Empowering Schools" },
  ];

  return (
    <div className="bg-rose min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 text-center pt-8 mb-6">
          About Us
        </h2>
        <div className="text-lg text-gray-700 mb-8 pb-6">
          <p className="mb-4">
            We are an organization committed to providing a high-quality
            education for every child in India. We believe that every child,
            regardless of their socio-economic status, location or
            circumstances, deserves an opportunity to reach their full
            potential.
          </p>
          <p>
            We exist to enable government schools in India to provide quality
            education to every child. We believe that a good 'quality' education
            is the foundation of a child's future, and we are dedicated to
            supporting the government in delivering this to all children in
            India.
          </p>
        </div>
        <div className="flex justify-between space-x-4">
          {images.map((img, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[330px] h-[300px] relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md shadow-md"
                />
              </div>
              <p className="mt-2 text-center text-gray-600">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
