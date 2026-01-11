import React from 'react';
import Section from './ui/Section';

const Journey: React.FC = () => {
  return (
    <Section id="journey" bgColor="bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-12 text-center">
            The Journey
        </h2>
        
        <div className="space-y-12 text-lg text-soft-gray leading-relaxed font-light">
            <p>
              <strong className="text-charcoal font-medium">This didn’t start with AI. It started with systems.</strong> My technical foundation began in electrical engineering, where I learned how real systems behave under pressure — where theory meets constraints.
            </p>
            
            <p>
              Curiosity pushed me deeper into software, data, and eventually machine learning. Without access to luxury resources or formal mentorship, I learned by building, breaking, and rebuilding systems — repeatedly.
            </p>
            
            <div className="pl-6 border-l-2 border-stone-200 italic text-xl text-charcoal font-serif py-2">
              While working with small businesses and service companies, a pattern became clear: most problems weren’t “AI problems” — they were systems problems.
            </div>

            <p>
              Today, my work focuses on building practical machine learning pipelines, automation workflows, and MLOps systems that function in real environments — especially within African market realities.
            </p>
            
            <p>
              My belief is simple: <span className="text-charcoal border-b border-stone-300 pb-0.5">AI should be useful, measurable, and responsibly deployed.</span>
            </p>
        </div>
      </div>
    </Section>
  );
};

export default Journey;