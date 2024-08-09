"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/blog", label: "BLOG" },
  { href: "/team", label: "TEAM" },
  { href: "/projects", label: "PROJECTS" },
];

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
      if (window.scrollY > 80 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const handleDonateClick = () => {
    setOpen(false); 
    router.push("/donate");
  };

  return (
    <nav
      className={`z-50 fixed w-full flex flex-col md:flex-row items-start md:items-center justify-between py-5 px-5 md:gap-0 md:px-10 font-sans ${
        scroll ? "bg-background-800 text-text-200" : "md:bg-transparent"
      } ${open ? "bg-background-800 gap-10" : ""}`}
      ref={menuRef}
    >
      <div className="font-bold md:text-xl flex flex-row items-center">
        <h1
          className={`font-paragraph ${
            scroll ? "text-text-200" : "md:text-text-800"
          } ${open ? "text-text-200" : ""}`}
        >
          ChangeSpark Foundation
        </h1>
      </div>
      <div
        className={`flex flex-col md:flex-row gap-10 items-center justify-center transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:max-h-screen md:opacity-100"
        } overflow-hidden md:overflow-visible`}
      >
        <ul className="flex flex-col md:flex-row gap-5 cursor-pointer">
          {navItems.map((item, index) => (
            <li
              className={`text-base md:block font-medium font-paragraph capitalize ${
                scroll ? "md:text-text-200" : "md:text-text-800"
              } ${open ? "text-text-200" : "text-text-800 hidden"}`}
              key={index}
              onClick={() => setOpen(false)} 
            >
              {item.href.startsWith("/") ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)} 
                >
                  {item.label}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
        <button
          className={`bg-accent-700 text-white font-medium px-5 py-2 md:block rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 ${
            open ? "" : "hidden"
          }`}
          onClick={handleDonateClick}
        >
          Donate
        </button>
      </div>
      {open ? (
        <X
          className="md:hidden cursor-pointer absolute right-5 text-text-200"
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
