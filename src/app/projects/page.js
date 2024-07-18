import Image from 'next/image';

const Projects = () => {
  const images = [
    { src: "/bhadreswar.jpg", alt: "Women at Tailoring", caption: "Women at Tailoringg" },
    { src: "/goghat.jpg", alt: "Children at School", caption: "Children at School" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white p-8">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <div className="flex flex-col md:flex-row justify-evenly space-y-8 md:space-y-0 md:space-x-4 w-full max-w-6xl">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-[400px] h-[300px] relative">
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md shadow-md"
              />
            </div>
            <p className="mt-4 uppercase font-bold text-xl font-sans text-center text-gray-600">
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
