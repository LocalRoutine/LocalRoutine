import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '소개', href: '#about' },
    { name: '기능', href: '#features' },
    { name: '시장분석', href: '#market' },
    { name: '로드맵', href: '#roadmap' },
    { name: '팀', href: '#team' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-2 border-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-lr-green p-1 rounded-full border-2 border-black">
                <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-2xl text-black">Local Routine</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-lr-green font-bold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-lr-green text-white px-4 py-2 rounded-lg font-bold border-2 border-black hover:bg-lr-green-dark shadow-cartoon-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
              앱 다운로드
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lr-green hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
             <button className="w-full mt-4 bg-lr-green text-white px-4 py-2 rounded-lg font-bold border-2 border-black shadow-cartoon-sm">
              앱 다운로드
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;