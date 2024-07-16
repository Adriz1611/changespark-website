"use client";

import Image from "next/image";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "#about", label: "ABOUT US" },
  { href: "#team", label: "TEAM" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#join-us", label: "JOIN US" },
  { href: "#donate", label: "DONATE" },
];

const Nav = () => {
  return (
    <nav className="md:flex md:items-center md:justify-between bg-beige md:h-20 md:pr-20 font-sans ">
      <div className="font-bold text-xl flex flex-row items-center">
        <Image
          src="/logo2.png"
          alt="ChangeSpark Foundation logo"
          width={100}
          height={100}
          className="h-min w-40 pl-5 bg-transparent"
        />
        <h1 className="text-black">
          ChangeSpark<span className="text-black"> Foundation</span>
        </h1>
      </div>
      <ul className="md:flex md:space-x-20 md:static absolute bg-beige w-full ">
        {navItems.map((item, index) => (
          <li className="list-none" key={index}>
            <a
              href={item.href}
              className="text-base font-medium text-black capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;