"use client";

import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur shadow z-50">
      <div className="container flex justify-between items-center h-14">
        <a href="#home" className="font-bold text-lg text-brand-700">JC</a>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-brand-700 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-xl">
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-black/70 backdrop-blur border-t">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block hover:text-brand-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
