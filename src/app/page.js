import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between bg-beige h-20 pr-20 font-sans">
    <div className="font-bold text-xl flex flex-row items-center">
    <Image src="/logo.png" alt="ChangeSpark Foundation logo" width={100} height={100} className="h-min w-40 pl-5 bg-transparent"/>
    <h1 className="text-purp">ChangeSpark<span className="text-gren"> Foundation</span></h1></div>
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

      <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-gray-100 flex-grow">
        <div className="md:w-1/2 mb-8 md:mb-0 ">
          <h1 className="text-4xl font-bold text-purple-900 dark:font-semibold mb-4">
            Changespark Foundation
          </h1>
          <p className="text-xl text-green-700 dark:font-semibold">
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
