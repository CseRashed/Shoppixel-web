import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1f2937] text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="40" height="40" fill="currentColor" className="text-orange-400" viewBox="0 0 24 24">
                <path d="M22.672 15.226l-2.432.811..."></path>
              </svg>
              <span className="text-xl font-bold text-white">Shoppixel</span>
            </div>
            <p className="text-sm text-gray-400">
              Reliable, stylish, and affordable products since 1992.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white transition">
                <svg width="20" height="20" fill="currentColor" className="text-gray-400 hover:text-white" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.15..."></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg width="20" height="20" fill="currentColor" className="text-gray-400 hover:text-white" viewBox="0 0 24 24">
                  <path d="M21.75 0H2.25C1.01 0 0 1.01..."></path>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg width="20" height="20" fill="currentColor" className="text-gray-400 hover:text-white" viewBox="0 0 24 24">
                  <path d="M22 5.72c-.77.34-1.6.57-2.46.68..."></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-orange-400">Branding</a></li>
              <li><a className="hover:text-orange-400">Design</a></li>
              <li><a className="hover:text-orange-400">Marketing</a></li>
              <li><a className="hover:text-orange-400">Advertisement</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-orange-400">About us</a></li>
              <li><a className="hover:text-orange-400">Contact</a></li>
              <li><a className="hover:text-orange-400">Jobs</a></li>
              <li><a className="hover:text-orange-400">Press kit</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">Get the latest updates and offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded bg-gray-700 text-sm focus:outline-none text-white"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-600 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} ACME Shop. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ by Rashed</p>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[200px] right-6 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-lg z-50 transition"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
