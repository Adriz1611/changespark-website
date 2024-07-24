import Image from "next/image";

export default function Home() {
    const images = [
      { src: "/1.jpg", alt: "Education", caption: "Quality Education" },
      { src: "/3.jpg", alt: "Children", caption: "Every Child Matters" },
      { src: "/2.jpg", alt: "School", caption: "Empowering Schools" },
    ];
  return (
    <main className="bg-background-100 min-h-screen">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-36">
        <div className="flex-col">
          <h1 className="text-6xl font-heading font-bold text-purple-900 dark:font-semibold mb-4">
            Changespark Foundation
          </h1>
          <p className="text-2xl text-green-700 font-paragraph font-bold px-2">
            EMPOWERING POWER IGNITING CHANGE
          </p>
          <button className="mx-2 my-4 text-2xl font-bold py-2 px-8 font-paragraph text-white bg-background-600">
            Join Us
          </button>
        </div>
        <div>
          <iframe
            className="w-[90vw] h-[40vh] md:w-[40vw]"
            src="https://www.youtube.com/embed/Sqqj_14wBxU?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&si=gvouxtwpb9pqEbyc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <div className="bg-background-200 min-h-screen p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold font-heading text-secondary-700 text-center pt-8 mb-6">
            About Us
          </h2>
          <div className="font-paragraph text-lg text-text-700 mb-8 pb-6">
            <p className="mb-4 text-center">
              We are an organization committed to providing a high-quality
              education for every child in India. We believe that every child,
              regardless of their socio-economic status, location or
              circumstances, deserves an opportunity to reach their full
              potential.
            </p>
            <p className="text-center">
              We exist to enable government schools in India to provide quality
              education to every child. We believe that a good
              &apos;quality&apos; education is the foundation of a child&apos;s
              future, and we are dedicated to supporting the government in
              delivering this to all children in India.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between space-x-4 space-y-7">
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
                <p className="mt-4 uppercase font-bold text-xl font-paragraph text-center text-gray-600">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
