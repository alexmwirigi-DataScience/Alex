import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'My Journey', href: '#journey' },
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ivory/90 backdrop-blur-md py-4 border-b border-stone-200' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-lg font-serif font-medium tracking-tight text-charcoal z-50">
          Alex Mwangi
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-soft-gray hover:text-charcoal transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <span className="text-xs font-medium text-stone-400 border-l border-stone-300 pl-4 ml-4">
            EN <span className="mx-1">|</span> SW
          </span>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-charcoal z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-ivory flex flex-col items-center justify-center space-y-8 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-serif text-charcoal"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <span className="text-sm font-medium text-stone-400 mt-8">
              EN | SW
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;