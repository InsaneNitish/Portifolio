import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@shared/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full bg-background/90 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-md" : "py-4"
      } px-6 md:px-16`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-playfair font-bold text-primary"
        >
          <span className="text-accent">N</span>itish
          <span className="text-secondary">T</span>hakur
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Nitish_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
          >
            Resume
          </a>
        </div>

        <button className="md:hidden text-primary text-xl" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full left-0 bg-background/95 backdrop-blur-sm shadow-lg py-4 px-6 mt-4 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <a
            href="attached_assets\Nitish_Resume_compressed(1).pdf"
            download="Nitish_Resume.pdf"
            className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
