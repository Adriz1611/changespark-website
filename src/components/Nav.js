"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "#about", label: "ABOUT US" },
  { href: "/team", label: "TEAM" },
  { href: "/projects", label: "PROJECTS" },
];

export default function Nav() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  return (
    <nav
      className={`fixed w-full flex items-center justify-between h-20 px-10 font-sans ${
        scroll ? `bg-background-800` : `bg-transparent`
      }`}
    >
      <div className="font-bold text-xl flex flex-row items-center">
        {/* <Image
          src="/logo.png"
          alt="ChangeSpark Foundation logo"
          width={100}
          height={100}
          className="h-min w-40 pl-5 bg-transparent"
        /> */}
        <h1
          className={`font-paragraph ${
            scroll ? "text-text-200" : "text-text-800"
          }`}
        >
          ChangeSpark Foundation
        </h1>
      </div>
      <div className="flex flex-row gap-10 items-center justify-center">
        <ul className="flex flex-row gap-5 ">
          {navItems.map((item, index) => (
            <li
              className={`text-base font-medium font-paragraph capitalize ${
                scroll ? "text-text-200" : "text-text-800"
              }`}
              key={index}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="bg-green-700 text-white font-medium px-5 py-2 ">
          Donate
        </button>
      </div>
    </nav>
  );
};


