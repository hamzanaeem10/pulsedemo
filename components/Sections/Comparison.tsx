import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-32 bg-surface/30 border-y border-zinc-800 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">
              Stems are rigid. <br/>Pulse is fluid.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">
              Legacy splitters force you into four fixed boxes: Vocals, Drums, Bass, Other. 
              <br /><br />
              But music isn't that simple. <strong className="text-white font-semibold">Pulse uses adaptive AI</strong> to understand specific instruments, playing styles, and even background textures based on your natural language description.
            </p>
          </div>

          <div className="bg-zinc-950/80 rounded-3xl border border-zinc-800 p-10 shadow-2xl">
            <div className="space-y-8">
              {/* Row 1 */}
              <div className="flex items-start gap-4 pb-8 border-b border-zinc-900">
                <div className="flex-1">
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 font-bold">Traditional Splitters</span>
                  <div className="text-zinc-400 font-mono text-sm bg-zinc-900/50 p-2 rounded inline-block border border-zinc-800/50">"Split into 4 stems"</div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
                  <X size={14} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <span className="block text-[10px] uppercase tracking-widest text-primary mb-2 font-bold">Pulse AI</span>
                  <div className="text-white font-mono text-lg font-medium">"Remove the crowd noise and isolate the sax solo"</div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Check size={14} />
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-zinc-900">
              <div className="text-xs text-zinc-500 flex justify-between items-center font-mono">
                <span>Model: Meta SAM Audio Architecture</span>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;