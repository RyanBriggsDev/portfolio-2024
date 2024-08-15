"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact", buttonType: "primary" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-screen bg-black min-h-[50px] flex justify-center items-center z-50"
    >
      <div className="container w-full px-4 mx-auto flex justify-between items-center">
        <Link href="#hero" className="btn">
          <h3 className="text-xl">RyanBriggs.Dev</h3>
        </Link>
        <div className="lg:hidden pr-4">
          <button
            onClick={toggleMenu}
            className="text-white w-6 h-6 relative focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
        <ul
          className={`flex flex-col lg:flex-row gap-6 md:gap-3 items-center ${
            isMenuOpen
              ? "absolute top-full left-0 w-full bg-black p-4 pr-8 lg:pr-4 text-end md:text-center"
              : "hidden lg:flex"
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="w-full lg:w-auto">
              <Link
                href={item.href}
                className={`btn ${
                  item.buttonType === "primary" ? "btn-primary" : ""
                } w-full lg:w-auto text-center`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
