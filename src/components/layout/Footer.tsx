import Link from "next/link";
import { Github, Linkedin, LocationEdit, Mail, Phone } from "lucide-react";
import siteLogo from "../../../public/img/web-logo/logo.jpg";
import Image from "next/image";
import { BsDiscord, BsTelegram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-12 flex justify-center">
        <div className="w-32 h-full bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-b-3xl shadow-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative size-12 rounded-xl overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src={siteLogo}
                  alt="Shourav's Logo"
                  fill
                  className="object-cover"
                  sizes="60px"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Shourav
                <span className="text-indigo-500 dark:text-indigo-400">.</span>
              </span>
            </div>
            <p className="mb-6 max-w-md text-gray-600 dark:text-gray-300">
              Front-end developer specializing in building exceptional web
              experiences with React, Next.js, and modern web technologies.
            </p>

            {/* Social links */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Connect with me
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    href: "https://github.com/developer-shourav",
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/developer-shourav/",
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://wa.me/+8801932376388",
                    icon: <BsWhatsapp className="w-5 h-5" />,
                    label: "WhatsApp",
                  },
                  {
                    href: "mailto:developer@gmail.com",
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                  },
                  {
                    href: "https://discord.com/users/developer.shourav1",
                    icon: <BsDiscord className="w-5 h-5" />,
                    label: "Discord",
                  },
                  {
                    href: "tg://user?id=Developer_Shourav",
                    icon: <BsTelegram className="w-5 h-5" />,
                    label: "Telegram",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="size-10 flex items-center justify-center rounded-full bg-indigo-500 text-white"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 pb-2 border-b border-gray-200 dark:border-gray-700">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/#experience", label: "Experience" },
                { href: "/#skills", label: "Skills" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
                  >
                    <span className="mr-2 text-indigo-500 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 pb-2 border-b border-gray-200 dark:border-gray-700">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="size-10 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </span>
                  <span className="block text-gray-700 dark:text-gray-200">
                    developer@gmail.com
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="size-10 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    Phone
                  </span>
                  <span className="block text-gray-700 dark:text-gray-200">
                    +880192356784
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="size-10 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300">
                  <LocationEdit className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    Location
                  </span>
                  <span className="block text-gray-700 dark:text-gray-200">
                    Nawabganj, Dhaka, BD
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5 pb-2 border-b border-gray-200 dark:border-gray-700">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to get updates on my latest projects and articles.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 dark:text-gray-200"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 size-8 flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                I respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Shourav Rajbongshi. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span
             
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm"
            >
             Never
            </span>
            <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm">
              Stop
            </span>
            <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm">
             Learning
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
