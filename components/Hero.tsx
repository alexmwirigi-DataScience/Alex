import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <Section id="home" className="pt-32 md:pt-48 pb-20 md:pb-32 min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-4xl fade-in-up">
        <p className="text-muted-steel font-medium tracking-wide text-sm mb-6 uppercase">
          Machine Learning · MLOps · Automation
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-charcoal mb-8">
          Building production-grade<br className="hidden md:block"/> AI systems for real businesses.
        </h1>
        <p className="text-lg md:text-xl text-soft-gray max-w-2xl leading-relaxed mb-10">
          I design and deploy machine learning and automation systems that reduce operational friction, improve decision-making, and scale sustainably — with a focus on real-world constraints.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="#contact" variant="primary">Start a Conversation</Button>
          <Button href="#journey" variant="outline">View Selected Work</Button>
        </div>
      </div>
      
      <div className="hidden md:flex absolute bottom-12 right-12 animate-bounce duration-[2000ms]">
        <a href="#intro" className="text-stone-400 hover:text-charcoal transition-colors">
            <ArrowDownRight size={24} strokeWidth={1.5} />
        </a>
      </div>
    </Section>
  );
};

export default Hero;