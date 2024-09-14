'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative py-4 fixed w-full top-0 left-0 z-50 transition-transform duration-300 ease-in-out" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="container mx-auto flex items-center justify-between px-6 md:px-8">
        {/* Clickable Logo */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 animate-text">
          <Link href="/" className="hover:text-gray-200 transition-colors duration-300 ease-in-out">
            Furniture Assembly
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/Product" className="relative group">
            <span className="transition-colors duration-300 ease-in-out hover:text-gray-200">Product</span>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-yellow-400 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link href="/about" className="relative group">
            <span className="transition-colors duration-300 ease-in-out hover:text-gray-200">About</span>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-yellow-400 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link href="/services" className="relative group">
            <span className="transition-colors duration-300 ease-in-out hover:text-gray-200">Services</span>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-yellow-400 scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link href="/contact" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-300 ease-in-out">
            Contact
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none transition-transform duration-300 ease-in-out">
            <svg
              className={`w-6 h-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-96 opacity-0'} bg-gray-800 text-white px-4 py-6 absolute top-16 left-0 right-0`}>
        <nav>
          <ul className="space-y-4">
            <li><Link href="/Product" className="block hover:text-gray-200 transition-colors duration-300 ease-in-out">Product</Link></li>
            <li><Link href="/about" className="block hover:text-gray-200 transition-colors duration-300 ease-in-out">About</Link></li>
            <li><Link href="/services" className="block hover:text-gray-200 transition-colors duration-300 ease-in-out">Services</Link></li>
            <li><Link href="/contact" className="block bg-yellow-400 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-300 ease-in-out">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
