"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";
import siteLogoDark from "../../../public/img/web-logo/logo.jpg";
import siteLogo from "../../../public/img/web-logo/logo-light.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative size-10 rounded-lg overflow-hidden">
            {/* Dark theme logo */}
            <Image
              src={siteLogoDark}
              alt="Shourav's Logo Dark"
              fill
              className="object-cover hidden dark:block"
              sizes="40px"
              priority
            />
            {/* Light theme logo */}
            <Image
              src={siteLogo}
              alt="Shourav's Logo Light"
              fill
              className="object-cover block dark:hidden"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Shourav
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hidden sm:inline-flex"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          {/* Hire Me CTA */}
          <Button asChild className="hidden md:inline-flex dark:bg-white">
            <Link href="#contact">Hire Me</Link>
          </Button>

          {/* Mobile Dropdown Menu */}
          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <Menu className="h-7 w-7" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 p-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
            >
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link
                    href={link.href}
                    className="w-full text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="w-full p-2 justify-start"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="h-5 w-5 mr-2" />
                      Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun className="h-5 w-5 mr-2" />
                      Light Mode
                    </>
                  )}
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button asChild className="w-full p-1 my-2">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hire Me
                  </Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
