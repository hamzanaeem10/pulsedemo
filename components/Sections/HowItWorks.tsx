import React from 'react';
import { Upload, Mic, Music } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "1. Drop any track",
    description: "Drag & drop your audio. We handle the complexity, supporting everything from high-res FLACs to standard MP3s."
  },
  {
    icon: Mic,
    title: "2. Ask naturally",
    description: "Don't toggle sliders. Just ask. 'Remove the drums', 'Solo the rhythm guitar', or 'Keep only the bass and vocals'.",
    badge: "AI Powered"
  },
  {
    icon: Music,
    title: "3. Instant backing track",
    description: "Get a studio-grade practice mix in seconds. Loop difficult sections, adjust tempo, and play along."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-surface/30 border-y border-zinc-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">How it works</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg font-light">
            Simple, intuitive, and designed for flow. No complex mixing desks—just pure practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 shadow-2xl group-hover:border-zinc-600 group-hover:shadow-primary/20 transition-all duration-500 relative z-10">
                <step.icon size={32} className="text-zinc-200 group-hover:scale-110 transition-transform duration-300" />
                {step.badge && (
                  <span className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-full text-white shadow-lg">
                    {step.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;