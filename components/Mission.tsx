import React from 'react';
import Section from './ui/Section';

const Mission: React.FC = () => {
  return (
    <Section id="mission" bgColor="bg-charcoal" className="text-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
            Building Toward<br/>Google-Grade MLOps — Publicly
          </h2>
          <div className="w-16 h-0.5 bg-stone-600 mb-8"></div>
        </div>
        
        <div className="space-y-6 text-stone-300 font-light leading-relaxed">
          <p>
            My long-term objective is to operate at the level expected of top Google MLOps engineers — not as a title, but as an execution standard.
          </p>
          <p>
            This journey is being built as a public, disciplined roadmap — designed so that even someone starting from zero can follow it and grow into a production-ready engineer.
          </p>
          <p>
            The roadmap is time-boxed, systems-focused, and grounded in real infrastructure.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Mission;