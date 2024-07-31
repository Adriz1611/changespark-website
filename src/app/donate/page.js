"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCopyToClipboard } from "usehooks-ts";
import { ClipboardCopy, Check } from "lucide-react";

const bank = [
  {
    label: "Bank Name",
    value: "1234567890",
  },
  {
    label: "Account Number",
    value: "1234567890",
  },
  {
    label: "IFSC Code",
    value: "1234567890",
  },
];

export default function Donate() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <main className="flex flex-col items-center py-20 md:py-0 justify-center min-h-screen w-full bg-background-100">
      <div className="">
        {/* <Image
          src="/donate.jpg"
          alt="Donate"
          width={100}
          height={100}
          className="object-cover 
            z-0 w-full opacity-30 "
        /> */}
      </div>

      <section className="bg-background-300 flex flex-col rounded-lg z-10 py-10 px-10 font-paragraph w-[80%]">
        <h1 className="font-heading text-5xl mb-10">Bank Details</h1>
   
      </section>
    </main>
  );
}
