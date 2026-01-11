import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-ivory border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
        <div className="mb-4 md:mb-0">
          © 2026 Alex Mwangi
        </div>
        <div className="font-serif italic">
          Built with intention. No noise.
        </div>
      </div>
    </footer>
  );
};

export default Footer;