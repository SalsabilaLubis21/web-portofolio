"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            Salsa
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 z-50 w-full bg-[#0d1224] text-sm opacity-90 md:relative md:top-0 md:z-auto md:flex md:h-auto md:w-auto md:flex-row md:space-x-1 md:border-0 md:bg-transparent md:opacity-100`}
          id="navbar-default"
        >
          <li className="text-center">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
              onClick={toggleMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li className="text-center">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
              onClick={toggleMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </Link>
          </li>
          <li className="text-center">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
              onClick={toggleMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </Link>
          </li>
          <li className="text-center">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#certifications"
              onClick={toggleMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                CERTIFICATIONS
              </div>
            </Link>
          </li>
          <li className="text-center">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
              onClick={toggleMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </Link>
          </li>
          <li className="text-center">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#contact"
              onClick={toggleMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                CONTACT
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
