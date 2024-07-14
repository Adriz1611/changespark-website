import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between w-full p-4 bg-white shadow-md">
        <Image
          src="/logo.png"
          alt="ChangeSpark Foundation logo"
          width={150}
          height={100}
        />
        <ul className="flex space-x-12">
          {["Home", "Skills", "Projects", "Contact", "Donate"].map((item) => (
            <li key={item} className="list-none">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-gray-100 flex-grow">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            Changespark Foundation
          </h1>
          <p className="text-xl text-yellow-500 font-semibold">
            EMPOWERING POWER IGNITING CHANGE
          </p>
        </div>
        <div className="md:w-1/2 h-full flex items-center justify-center">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl">
            <iframe
              width="710"
              height="400"
              src="https://www.youtube.com/embed/Sqqj_14wBxU?si=gvouxtwpb9pqEbyc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
