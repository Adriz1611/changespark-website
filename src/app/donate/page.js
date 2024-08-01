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
      <div className="absolute w-full h-[80%] overflow-hidden">
        <Image
          src="/donate.jpg"
          alt="Donate"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green1-light via-transparent to-green1-light"></div>
      </div>

      <section className="bg-background-300 flex flex-col rounded-lg z-10 py-10 px-10 font-paragraph w-[80%]">
        <h1 className="font-heading text-5xl mb-10">Bank Details</h1>
        
      </section>
    </main>
  );
}
