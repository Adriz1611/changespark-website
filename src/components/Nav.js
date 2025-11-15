"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/green-walkathon-2026", label: "GREEN WALKATHON 2026" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/team", label: "TEAM" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact-us", label: "CONTACT US" },
];

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const router = useRouter();
  const menuRef = useRef(null);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Enhanced scroll handling with hide/show on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show background after minimal scroll (20px instead of 80px)
      setScroll(currentScrollY > 20);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setNavHidden(true);
        setOpen(false); // Close mobile menu on scroll
      } else {
        // Scrolling up
        setNavHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Set active navigation item based on current path
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveItem(window.location.pathname);
    }
  }, []);

  const handleDonateClick = () => {
    setOpen(false);
    window.location.href = "https://changespark.in/donate";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href) => {
    setActiveItem(href);
    setOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`z-50 fixed w-full transition-all duration-500 ease-in-out ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scroll
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-gradient-to-b from-black/20 to-transparent py-5"
        }`}
        ref={menuRef}
      >
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={() => handleNavClick("/")}>
              <div className="font-bold flex items-center group cursor-pointer">
                <h1
                  className={`text-lg md:text-xl font-paragraph transition-all duration-300 ${
                    scroll
                      ? "text-gray-800 group-hover:text-green-600"
                      : "text-white group-hover:text-green-300"
                  }`}
                >
                  ChangeSpark Foundation
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navItems.map((item, index) => (
                  <li key={index} className="relative">
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`text-base font-medium font-paragraph capitalize transition-all duration-300 hover:scale-105 ${
                          scroll
                            ? "text-gray-700 hover:text-green-600"
                            : "text-white hover:text-green-300"
                        } ${activeItem === item.href ? "font-bold" : ""}`}
                      >
                        {item.label}
                        {/* Active indicator */}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                            activeItem === item.href ? "w-full" : "w-0"
                          }`}
                        />
                      </Link>
                    ) : (
                      <ScrollLink
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className={`cursor-pointer text-base font-medium font-paragraph capitalize transition-all duration-300 hover:scale-105 ${
                          scroll
                            ? "text-gray-700 hover:text-green-600"
                            : "text-white hover:text-green-300"
                        }`}
                      >
                        {item.label}
                      </ScrollLink>
                    )}
                  </li>
                ))}
              </ul>

              {/* Desktop Donate Button */}
              <button
                className={`relative overflow-hidden px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  scroll
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                }`}
                onClick={handleDonateClick}
              >
                <span className="relative z-10">Donate Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <X
                  className={`w-6 h-6 transition-all duration-300 ${
                    scroll ? "text-gray-800" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 transition-all duration-300 ${
                    scroll ? "text-gray-800" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 md:hidden transition-all duration-500 transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">Menu</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      onClick={() => {
                        handleNavClick(item.href);
                        setOpen(false);
                      }}
                      className={`block px-5 py-3 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 ${
                        activeItem === item.href
                          ? "bg-green-50 text-green-600 border-l-4 border-green-600"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <ScrollLink
                      to={item.href}
                      smooth={true}
                      duration={500}
                      onClick={() => setOpen(false)}
                      className="block px-5 py-3 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 cursor-pointer"
                    >
                      {item.label}
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-5 border-t border-gray-100">
            <button
              className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={handleDonateClick}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
