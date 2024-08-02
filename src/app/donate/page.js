"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ClipboardCopy, Heart } from "lucide-react";
import { CopytoClip } from "@/components/ui/copytoclipboard";

const bankDetails = [
  { label: "Account Number", value: "20200055762126" },
  { label: "IFSC Code", value: "BDBL0001674" },
  { label: "Account Name", value: "Changespark Foundation" },
  { label: "Bank", value: "Bandhan Bank" },
];

export default function Donate() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex items-center justify-center min-h-screen bg-background-100 p-4 pt-24">
      <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1  bg-background-200 rounded-lg py-3 px-6 w-full  md:w-5/6">
        <div className="flex flex-col col-start-1 row-start-2 md:col-auto md:row-auto justify-between">
          <h1 className="text-5xl font-heading mb-4 text-secondary-600 hidden md:block">
            Donation
          </h1>
          <div className="flex flex-col justify-evenly w-full md:w-1/2">
            {bankDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center rounded-lg"
              >
                <span className="text-lg font-bold font-heading">
                  {detail.label}
                </span>
                <CopytoClip detail={detail} />
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-2 text-center">
            <p className=" text-purple1-dark font-paragraph font-bold">
              Or just use UPI, NetBanking, Credit/Debit Card
            </p>
            <button className="flex flex-row w-full  items-center justify-center text-center py-3 rounded-lg gap-2  bg-secondary-600 text-white">
              Donate Now <Heart size={24} />
            </button>
          </div>
        </div>
        <div className="col-start-1 row-start-1 text-center md:col-auto md:row-auto md:items-end md:flex md:justify-end">
          <h1 className="text-5xl font-heading mb-4 text-secondary-600 block md:hidden">
            Donation
          </h1>
          <Image
            src={count === 3 ? "/monodeep.jpg" : "/donate.jpg"}
            // fill
            width={700}
            height={700}
            className="rounded-lg  shadow-md"
            alt="img"
            onClick={
              // add +1 to count on every click and when count becomes 3, reset it to 0
              () => setCount((count) => (count === 3 ? 0 : count + 1))
            }
          />
        </div>
      </section>
    </main>
  );
}
