import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Existing blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
        
        {/* Atmospheric Light Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl transform -skew-x-12" />
        </div>
        
        {/* Spotlights */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
           {Array.from({ length: 25 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  opacity: Math.random() * 0.1 + 0.05,
                  animationDuration: `${12 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * -10}s`
                }}
              />
           ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
          Waitlist now open
        </div>

        <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.9] max-w-5xl mx-auto">
          Master every nuance. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
            Isolate any sound.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          The first practice tool that understands music like you do. Type natural requests to isolate instruments, remove distractions, or dissect complex layers in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={scrollToWaitlist} className="w-full sm:w-auto group">
            Request Access
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg" onClick={scrollToDemo} className="w-full sm:w-auto">
            <PlayCircle className="mr-2 w-4 h-4" />
            See how it works
          </Button>
        </div>

        {/* Abstract Visual Cue */}
        <div className="mt-24 opacity-40 relative h-32 max-w-4xl mx-auto mask-linear-gradient">
           <div className="absolute inset-0 flex items-end justify-center gap-1.5">
              {Array.from({ length: 40 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 bg-gradient-to-t from-white to-transparent rounded-full"
                    style={{ 
                      height: `${Math.max(15, Math.random() * 100)}%`,
                      opacity: Math.max(0.3, Math.random()) 
                    }} 
                  />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;