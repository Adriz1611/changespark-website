import React from "react";
import { Facebook, Linkedin, Instagram, Mail, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61560185391368",
      label: "Facebook",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/changespark-foundation/",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/changesparkfoundation/",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: Mail,
      href: "mailto:connect@changespark.in",
      label: "Email",
      color: "hover:text-green-400"
    },
  ];

  const developers = [
    { name: "Adrij", linkedIn: "https://www.linkedin.com/in/adrijbhadra/" },
    { name: "Sanjit", linkedIn: "https://www.linkedin.com/in/sanjit-mathur-346209320/" },
    { name: "Sarthak", linkedIn: "https://www.linkedin.com/in/sarthak-rajput-744848328/" },
    { name: "Monodeep", linkedIn: "https://www.linkedin.com/in/monodeepdas/" },
    { name: "Priyanshu", linkedIn: "https://www.linkedin.com/in/priyanshu-debnath/" },
  ];

  // This array is currently empty. If you add maintainers in the future,
  // you would also need to re-add the JSX to display them.
  const maintainers = [];

  const renderContributors = (contributors, linkClass) => {
    return contributors.map((contributor, index) => (
      <React.Fragment key={contributor.name}>
        <a
          href={contributor.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} transition-colors duration-300 mx-1`}
        >
          {contributor.name}
        </a>
        {contributors.length > 1 && index < contributors.length - 2 && <span>,</span>}
        {contributors.length > 1 && index === contributors.length - 2 && <span className="text-gray-500 mx-1">&</span>}
      </React.Fragment>
    ));
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
              <Sparkles className="text-white" size={20} />
            </div>
            <div>
              <p className="font-semibold text-base text-gray-100">ChangeSpark Foundation</p>
              {/* Increased font size slightly from text-sm to text-[15px] */}
              <p className="text-gray-400 font-light text-[15px]">© {currentYear} • Empowering Change</p>
            </div>
          </div>

          {/* Increased font size slightly from text-sm to text-[15px] */}
          <div className="hidden md:flex items-center text-[15px] text-gray-400">
            <span className="flex items-center">
              Built with <Heart className="w-4 h-4 inline mx-1.5 text-red-500" /> by
            </span>
            {renderContributors(developers, "text-green-400 hover:text-green-300")}
          </div>

          <div className="flex items-center space-x-2">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-9 h-9 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-300 ${color} hover:bg-gray-700/80 transition-all duration-300 hover:scale-110`}
                aria-label={label}
              >
                <Icon size={16} />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out origin-bottom bg-gray-950 text-white text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Increased font size slightly from text-xs to text-sm */}
        <div className="md:hidden mt-8 pt-6 border-t border-gray-700/50 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center mb-2">
            Built with <Heart className="w-3.5 h-3.5 inline mx-1.5 text-red-500" /> by
          </p>
          <div className="flex justify-center items-center flex-wrap">
            {renderContributors(developers, "text-green-400")}
          </div>
        </div>
      </div>
    </footer>
  );
}