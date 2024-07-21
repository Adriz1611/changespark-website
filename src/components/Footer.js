import React from 'react';
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61560185391368', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:example@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm font-heading">&copy; {currentYear} Changespark Foundation. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors duration-300 text-lg"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
