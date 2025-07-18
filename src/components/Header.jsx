import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1C1C1E] text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between rounded-b-2xl border-b border-[#333]">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-[#E50914] tracking-wide">
          Fitness<span className="text-[#32CD32]">Pro</span>
        </Link>
      </div>

    </header>
  );
};

export default Header;
