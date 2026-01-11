import React from 'react';
import Section from './ui/Section';

const pillars = [
  { category: 'Software Engineering', techs: 'Python, Linux, Git' },
  { category: 'Data Engineering', techs: 'Pipelines, Storage, BigQuery' },
  { category: 'Machine Learning', techs: 'Training, Evaluation, Monitoring' },
  { category: 'MLOps', techs: 'CI/CD, Containers, Kubernetes, GKE' },
  { category: 'Cloud Systems', techs: 'GCP, Vertex AI' },
];

const Pillars: React.FC = () => {
  return (
    <Section id="pillars">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-wider uppercase text-muted-steel">Engineering Pillars</h2>
      </div>
      
      <div className="border-t border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-stone-200 border-l border-r divide-stone-200">
            {pillars.slice(0, 3).map((pillar, idx) => (
                <div key={idx} className="p-8 hover:bg-white transition-colors duration-300">
                    <h3 className="font-serif text-lg text-charcoal mb-2">{pillar.category}</h3>
                    <p className="text-sm text-soft-gray font-mono">{pillar.techs}</p>
                </div>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b border-stone-200 border-l border-r divide-stone-200">
             {pillars.slice(3).map((pillar, idx) => (
                <div key={idx} className="p-8 hover:bg-white transition-colors duration-300">
                    <h3 className="font-serif text-lg text-charcoal mb-2">{pillar.category}</h3>
                    <p className="text-sm text-soft-gray font-mono">{pillar.techs}</p>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Pillars;