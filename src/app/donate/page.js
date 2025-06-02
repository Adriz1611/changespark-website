// "use client";

// import Image from "next/image";
// import { ClipboardCopy, Heart } from "lucide-react";
// import { CopytoClip } from "@/components/ui/copytoclipboard";
// import { useRouter } from "next/navigation";

// const bankDetails = [
//   { label: "Account Number", value: "20200055762126" },
//   { label: "IFSC Code", value: "BDBL0001674" },
//   { label: "Account Name", value: "Changespark Foundation" },
//   { label: "Bank", value: "Bandhan Bank" },
// ];

// export default function Donate() {
//   const router = useRouter();
//   return (
//     <main className="flex items-center justify-center min-h-screen bg-background-100 p-4 pt-36 md:pt-24">
//       <Image
//         src="/bgline.svg"
//         width={700}
//         height={700}
//         className="absolute top-0 right-0 z-0 w-full h-full"
//         alt="img"
//       />
//       <section className="z-10 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 bg-background-200 rounded-lg p-4 md:p-20 w-full md:w-5/6">
//         <div className="flex flex-col col-start-1 row-start-2 md:col-auto md:row-auto justify-between">
//           <h1 className="text-5xl font-heading mb-4 text-secondary-700 hidden md:block">
//             Donation
//           </h1>
//           <div className="flex flex-col justify-evenly w-full md:w-1/2">
//             {bankDetails.map((detail, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-start justify-center rounded-lg font-paragraph"
//               >
//                 <span className="text-lg font-bold font-heading">
//                   {detail.label}
//                 </span>
//                 <CopytoClip detail={detail} />
//               </div>
//             ))}
//           </div>
//           <div className="w-full md:w-1/2 flex flex-col gap-2 text-center">
//             <p className="text-purple1-dark font-paragraph font-bold">
//               Or just use UPI, NetBanking, Credit/Debit Card
//             </p>
//             <button
//               onClick={() =>
//                 (window.location.href =
//                   "https://test.payumoney.com/url/1IYTyk8CfKiv")
//               }
//               className="flex flex-row w-full items-center justify-center text-center py-3 rounded-lg gap-2 bg-secondary-600 text-white"
//             >
//               Donate Now <Heart size={24} />
//             </button>
//           </div>
//         </div>
//         <div className="col-start-1 row-start-1 text-center md:col-auto md:row-auto md:items-end md:flex md:justify-end">
//           <h1 className="text-5xl font-heading mb-4 text-secondary-600 block md:hidden">
//             Donation
//           </h1>
//           <Image
//             src="/donate.jpg"
//             width={700}
//             height={700}
//             className="rounded-lg shadow-md"
//             alt="img"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Script from "next/script";
import { motion } from "framer-motion";

/**
 * Donation landing page – same colour palette as the rest of your site.
 * Uses only your custom Tailwind tokens (background-100/200, secondary-600/700, etc.).
 */
export default function Donate() {
  const fallbackScript = `setTimeout(function () {
    const c = document.getElementById('ngoContentContainer');
    if (c && c.innerHTML.length < 40) {
      c.innerHTML = "<center><p style='color:#a94442;'>we are sorry that our systems are down. we will be up shortly. apologies for the inconvenience.</p></center>";
    }
  }, 20000);`;

  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* 1. Third-party widget + graceful fallback */}
      {/* ------------------------------------------------------ */}
      <Script
        src="https://danamojo.org/dm/js/widget.js"
        strategy="afterInteractive"
      />
      <Script id="dm-fallback" strategy="afterInteractive">
        {fallbackScript}
      </Script>

      {/* ------------------------------------------------------ */}
      {/* 2. Hero section – brand colours only */}
      {/* ------------------------------------------------------ */}
      <main className="relative flex items-center justify-center min-h-screen px-6 py-36 bg-background-100 overflow-hidden">
        {/* Optional subtle animated accent using brand secondary tint */}
        <motion.span
          className="absolute -z-10 top-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-secondary-200 opacity-20 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.23, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Main panel */}
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:max-w-3xl bg-background-200 border border-secondary-100 shadow-xl rounded-2xl p-10 md:p-14 backdrop-blur-sm/"
        >
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-secondary-700">
            Support Our Mission
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-center text-lg md:text-xl text-secondary-600 font-light">
            Your generosity enables <strong>Changespark Foundation</strong> to
            reach more lives. Every rupee counts—thank you for standing with us!
          </p>

          {/* danamojo containers */}
          <div id="dmScriptContainer" style={{ display: "none" }}>
            <a href="#">Donate Now</a>
          </div>

          <div
            id="ngoContentContainer"
            iNGOId="1319"
            oDisplay="product"
            className="mt-12 flex justify-center"
          >
            <img
              alt="please wait..."
              src="https://danamojo.org/dm/css/images/loading.gif"
              className="mx-auto"
            />
          </div>
        </motion.div>
      </main>
    </>
  );
}