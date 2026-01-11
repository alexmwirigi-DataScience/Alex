import React from 'react';
import Section from './ui/Section';

const Intro: React.FC = () => {
  return (
    <Section id="intro" className="border-t border-stone-200/50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="text-sm font-bold tracking-wider uppercase text-charcoal mb-4">
            Professional Profile
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl md:text-3xl font-serif text-charcoal leading-relaxed mb-8">
            Alex Mwangi is a machine learning engineer and automation specialist focused on building deployable, maintainable, production-ready systems.
          </p>
          <p className="text-base text-soft-gray leading-relaxed max-w-2xl">
            His work sits at the intersection of software engineering, data systems, and real business operations. Rather than chasing hype, he builds infrastructure that works quietly and effectively.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Intro;