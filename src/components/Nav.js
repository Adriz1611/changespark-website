"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

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
      className={`z-10 fixed w-full flex flex-col md:flex-row items-start md:items-center justify-between py-5 px-5 md:px-10 font-sans ${
        scroll ? `md:bg-background-800` : `md:bg-transparent`
      } ${open ? `bg-background-800` : `bg-transparent`}`}
    >
      <div className="font-bold md:text-xl flex flex-row items-center">
        {/* <Image
          src="/logo.png"
          alt="ChangeSpark Foundation logo"
          width={100}
          height={100}
          className="h-min w-40 pl-5 bg-transparent"
        /> */}
        <h1
          className={`font-paragraph ${
            scroll ? "md:text-text-200" : "md:text-text-800"
          } ${open ? `text-text-200 ` : `text-text-800`}`}
        >
          ChangeSpark Foundation
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:my-0 my-10">
        <ul className="flex flex-col md:flex-row gap-5 ">
          {navItems.map((item, index) => (
            <li
              className={`text-base md:block font-medium font-paragraph capitalize ${
                scroll ? "md:text-text-200" : "md:text-text-800"
              } ${open ? `text-text-200 ` : `text-text-800 hidden`}`}
              key={index}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button
          className={`bg-accent-700 text-white font-medium px-5 py-2 md:block ${
            open ? "" : "hidden"
          }`}
        >
          Donate
        </button>
      </div>
      {open ? (
        <X
          className="md:hidden  cursor-pointer absolute right-5"
          onClick={() => setOpen(false)}
        />
      ) : (
        <Menu
          className="md:hidden cursor-pointer absolute right-5"
          onClick={() => setOpen(true)}
        />
      )}
    </nav>
  );
}
