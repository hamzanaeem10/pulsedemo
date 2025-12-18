import React from 'react';
import { Drum, Guitar, User, GraduationCap, Search } from 'lucide-react';
import { USE_CASES } from '../../constants';

const icons: Record<string, React.ReactNode> = {
  drums: <Drum className="w-6 h-6" />,
  guitar: <Guitar className="w-6 h-6" />,
  bass: <div className="font-bold text-xl leading-none">B</div>, 
  education: <GraduationCap className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
};

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Built for every musician</h2>
          <p className="text-zinc-400 text-lg font-light">Whether you're teaching, learning, or transcribing.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-surface/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                {icons[useCase.icon]}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{useCase.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">{useCase.description}</p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="p-8 rounded-3xl border border-dashed border-zinc-800 flex flex-col items-center justify-center text-center bg-transparent hover:bg-zinc-900/30 transition-colors">
            <h3 className="font-display text-lg font-bold text-white mb-2">And much more</h3>
            <p className="text-zinc-500 text-sm">Orchestral, electronic, field recordings...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;