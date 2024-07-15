import Image from "next/image";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />

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
