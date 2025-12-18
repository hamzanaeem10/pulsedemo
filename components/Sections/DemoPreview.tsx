import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Wand2, MoreHorizontal } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { MOCK_WAVEFORM_DATA } from '../../constants';

const DemoPreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Remove drums, keep guitar solo";
  
  // Simulated typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-6">
            Preview — Demo Visuals
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">See the magic</h2>
        </div>

        {/* Mock Interface Window */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-zinc-800 bg-[#0A0A0C] shadow-2xl overflow-hidden relative group hover:border-zinc-700 transition-colors duration-500">
          
          {/* Header/Toolbar */}
          <div className="h-14 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between px-6 backdrop-blur-md">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700/50 group-hover:bg-[#FF5F57] transition-colors" />
              <div className="w-3 h-3 rounded-full bg-zinc-700/50 group-hover:bg-[#FEBC2E] transition-colors" />
              <div className="w-3 h-3 rounded-full bg-zinc-700/50 group-hover:bg-[#28C840] transition-colors" />
            </div>
            <div className="text-xs text-zinc-500 font-medium tracking-wide">PULSE STUDIO <span className="text-zinc-700 ml-1">BETA</span></div>
            <MoreHorizontal size={16} className="text-zinc-600" />
          </div>

          <div className="p-8 md:p-12">
            {/* Input Area */}
            <div className="mb-10 relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Wand2 className="h-5 w-5 text-primary animate-pulse" />
              </div>
              <input 
                type="text" 
                readOnly
                value={text}
                className="w-full bg-zinc-900/50 border border-zinc-700 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm shadow-inner"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                 <span className="text-[10px] uppercase font-bold text-zinc-600">Processing</span>
              </div>
            </div>

            {/* Visualizer */}
            <div className="h-80 bg-zinc-900/20 rounded-xl border border-zinc-800/50 mb-10 relative overflow-hidden">
               {/* Grid Lines */}
               <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-5">
                 {Array.from({length: 12}).map((_, i) => (
                    <div key={i} className="border-r border-zinc-400 h-full"></div>
                 ))}
               </div>
               
               <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_WAVEFORM_DATA}>
                  <defs>
                    <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={[0, 100]} />
                  <Area 
                    type="step" 
                    dataKey="value" 
                    stroke="#a855f7" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorWave)" 
                    isAnimationActive={true}
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
              
              {/* Playhead */}
              <div className="absolute top-0 bottom-0 w-[1px] bg-white left-1/3 shadow-[0_0_15px_white] z-10" />
              
              {/* Track Label Overlay */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-zinc-300 border border-zinc-800/50 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Original Track: Neon Nights.mp3
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-10">
               <button className="text-zinc-600 hover:text-white transition-colors"><SkipBack size={28} /></button>
               <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
               >
                 {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
               </button>
               <button className="text-zinc-600 hover:text-white transition-colors"><SkipForward size={28} /></button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;