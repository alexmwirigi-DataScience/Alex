import React from 'react';
import Section from './ui/Section';

const services = [
  {
    title: 'Machine Learning & MLOps',
    description: 'Production-ready models, pipelines, monitoring, and deployment architectures designed for reliability.'
  },
  {
    title: 'Automation Systems',
    description: 'WhatsApp integrations, CRM synchronization, workflow automation, and custom operational tooling.'
  },
  {
    title: 'Applied Data Systems',
    description: 'Robust data pipelines, analytics infrastructure, and decision support systems.'
  },
  {
    title: 'Consulting & Technical Direction',
    description: 'Strategic architecture guidance for teams adopting AI, focusing on feasibility and ROI.'
  }
];

const Services: React.FC = () => {
  return (
    <Section id="services" className="border-b border-stone-200/50">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Areas of Expertise</h2>
        <p className="text-soft-gray">High-impact technical services for forward-thinking organizations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {services.map((service, index) => (
          <div key={index} className="group">
            <h3 className="text-xl font-medium text-charcoal mb-3 group-hover:text-muted-steel transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-soft-gray leading-relaxed text-sm md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;