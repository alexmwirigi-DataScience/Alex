import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", bgColor = "bg-transparent" }) => {
  return (
    <section id={id} className={`w-full py-20 md:py-32 px-6 md:px-12 lg:px-24 ${bgColor} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;