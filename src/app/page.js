import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between bg-beige h-20 pr-20 font-sans">
        <div className="font-bold text-xl flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="ChangeSpark Foundation logo"
            width={100}
            height={100}
            className="h-min w-40 pl-5 bg-transparent"
          />
          <h1 className="text-purp">
            ChangeSpark<span className="text-gren"> Foundation</span>
          </h1>
        </div>
        <ul className="flex space-x-20">
          <li className="list-none">
            <a
              href="/"
              className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
            >
              HOME
            </a>
          </li>
          <li className="list-none">
            <a
              href="#about"
              className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
            >
              ABOUT US
            </a>
          </li>
          <li className="list-none">
            <a
              href="#team"
              className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
            >
              TEAM
            </a>
          </li>
          <li className="list-none">
            <a
              href="#projects"
              className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
            >
              PROJECTS
            </a>
          </li>
          <li className="list-none">
            <a
              href="#join-us"
              className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
            >
              JOIN US
            </a>
          </li>
          <li className="list-none">
            <a
              href="#donate"
              className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
            >
              DONATE
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col md:flex-row items-stretch p-8 bg-lavender h-screen">
        <div className="md:flex-shrink-0 mb-8 md:mb-0 md:mr-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-purple-900 dark:font-semibold mb-4">
            Changespark Foundation
          </h1>
          <p className="text-xl text-green-700 dark:font-semibold">
            EMPOWERING POWER IGNITING CHANGE
          </p>
        </div>
        <div className="md:flex-grow flex items-center justify-center">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/Sqqj_14wBxU?si=gvouxtwpb9pqEbyc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="bg-rose text-center p-10 rounded-md shadow-md w-screen  mx-auto">
        <h2 class="text-3xl font-bold text-purple-900 mb-6">About Us</h2>
        <p class="text-lg text-gray-700 mb-4">
          We are an organization committed to providing a high-quality education
          for every child in India. We believe that every child, regardless of
          their socio-economic status, location or circumstances, deserves an
          opportunity to reach their full potential.
        </p>
        <p class="text-lg text-gray-700">
          We exist to enable government schools in India to provide quality
          education to every child. We believe that a good ‘quality’ education
          is the foundation of a child’s future, and we are dedicated to
          supporting the government in delivering this to all children in India.
          
        </p>
      </div>
    </main>
  );
}
