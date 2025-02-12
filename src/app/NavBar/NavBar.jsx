import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-80 text-white py-4 px-8 flex justify-between items-center z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500 cursor-pointer">Utsav</h1>

      {/* Navigation Links */}
      <nav className={`md:flex space-x-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="bg-black border-2 border-gray-700 py-3 px-5 text-zinc-600 rounded-lg md:flex gap-6">
          <a href="#" className="hover:bg-[#1F1F1F] transition">Home</a>
          <a href="#" className="hover:bg-[#1F1F1F] transition">Upcoming</a>
          <a href="#" className="hover:bg-[#1F1F1F] transition">Latest</a>
          <a href="#" className="hover:bg-[#1F1F1F] transition">Popular</a>
          <a href="#" className="hover:bg-[#1F1F1F] transition">Top Rated</a>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <i className="ri-menu-line"></i>
      </button>

      {/* Search & Notifications */}
      <div className="hidden md:flex text-xl mr-28 items-center gap-5">
        <button className="text-white">
          <i className="ri-search-line"></i>
        </button>
        <button className="text-white">
          <i className="ri-notification-3-line"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
