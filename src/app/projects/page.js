import Image from 'next/image';

const Projects = () => {
  const images = [
    { src: "/bhadreswar.jpg", alt: "Women at Tailoring", caption: "Women at Tailoring", link: "/projects/bhadreswar" },
    { src: "/goghat.jpg", alt: "Children at School", caption: "Children at School", link: "/projects/goghat" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-background-100 p-8">
      <h1 className="text-4xl font-bold font-heading text-purple-900 mb-12">Projects</h1>
      <div className="flex flex-col md:flex-row justify-evenly space-y-8 md:space-y-0 md:space-x-4 w-full max-w-6xl">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col items-center">
            <a href={img.link} className="group">
              <div className="w-[400px] h-[300px] relative overflow-hidden rounded-md shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 uppercase font-bold text-xl font-paragraph text-green-700 text-center group-hover:text-green-900 transition-colors duration-300">
                {img.caption}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
