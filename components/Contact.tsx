import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Let’s discuss work that requires clarity.</h2>
          <p className="text-lg text-soft-gray mb-10">
            Available for projects demanding depth and technical execution.
          </p>
          
          <div className="space-y-4 text-sm font-medium tracking-wide">
            <div>
              <span className="block text-stone-400 mb-1 text-xs uppercase">Email</span>
              <a href="mailto:mwirigialex351@gmail.com" className="text-charcoal hover:underline decoration-1 underline-offset-4">
                mwirigialex351@gmail.com
              </a>
            </div>
            <div>
              <span className="block text-stone-400 mb-1 text-xs uppercase">WhatsApp</span>
               <a href="https://wa.me/254111475368" className="text-charcoal hover:underline decoration-1 underline-offset-4">
                +254 111 475 368
              </a>
            </div>
            <div>
              <span className="block text-stone-400 mb-1 text-xs uppercase">Location</span>
              <span className="text-charcoal">Nairobi, Kenya</span>
            </div>
             <div>
              <span className="block text-stone-400 mb-1 text-xs uppercase">GitHub</span>
               <a href="https://github.com/alexmwirigi-DataScience" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:underline decoration-1 underline-offset-4">
                github.com/alexmwirigi-DataScience
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-8 mt-8 lg:mt-0" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            <div className="group">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 group-focus-within:text-charcoal transition-colors">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full border-b border-stone-200 py-2 text-charcoal bg-transparent focus:outline-none focus:border-charcoal transition-colors placeholder-stone-300" 
                placeholder="John Doe"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 group-focus-within:text-charcoal transition-colors">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full border-b border-stone-200 py-2 text-charcoal bg-transparent focus:outline-none focus:border-charcoal transition-colors placeholder-stone-300" 
                placeholder="john@company.com"
              />
            </div>
            <div className="group">
              <label htmlFor="org" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 group-focus-within:text-charcoal transition-colors">Organization</label>
              <input 
                type="text" 
                id="org" 
                className="w-full border-b border-stone-200 py-2 text-charcoal bg-transparent focus:outline-none focus:border-charcoal transition-colors placeholder-stone-300" 
                placeholder="Company Ltd."
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2 group-focus-within:text-charcoal transition-colors">What are you trying to build?</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full border-b border-stone-200 py-2 text-charcoal bg-transparent focus:outline-none focus:border-charcoal transition-colors placeholder-stone-300 resize-none"
                placeholder="Tell me about the constraints and the goal..."
              ></textarea>
            </div>
          </div>
          <div className="pt-4">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;