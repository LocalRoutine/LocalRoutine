import React from 'react';
import { Mail, Instagram, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="bg-lr-green p-2 rounded-full border-2 border-white hover:scale-110 transition-transform">
                <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
                <span className="font-display text-2xl block">Local Routine</span>
                <span className="text-gray-400 text-xs">지구를 위한 매일의 습관</span>
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <a 
              href="https://www.instagram.com/LOCAL_ROUTINE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-lr-green transition-colors"
            >
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
              </div>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
               <div className="p-2 bg-gray-800 rounded-full">
                  <Mail className="w-5 h-5" />
               </div>
               <span className="text-sm font-medium">december790@naver.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="font-medium">&copy; 2025 Local Routine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;