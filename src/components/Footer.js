import React from "react";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61560185391368",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/changespark-foundation/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/changesparkfoundation/",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:connect@changespark.in", label: "Email" },
  ];

  const developers = [
    { name: "Adrij", linkedIn: "https://www.linkedin.com/in/adrijbhadra/" },
    { name: "Monodeep", linkedIn: "https://www.linkedin.com/in/monodeepdas/" },
    { name: "Priyanshu", linkedIn: "https://www.linkedin.com/in/priyanshu-debnath/" },
  ];

  return (
    <footer className="bg-secondary-600 text-white py-6 z-40 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 w-full">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm md:text-base font-heading">
            &copy; {currentYear} Changespark Foundation. All rights reserved.
          </p>
        </div>
        <div className="mb-4 md:mb-0 text-center">
          <p className="text-xs md:text-sm">
            Designed and developed by{" "}
            {developers.map((dev, index) => (
              <React.Fragment key={dev.name}>
                <a
                  href={dev.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                >
                  {dev.name}
                </a>
                {index === developers.length - 2
                  ? " and "
                  : index < developers.length - 2
                  ? ", "
                  : ""}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="flex gap-2 md:gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
