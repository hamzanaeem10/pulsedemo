import React, { useState } from 'react';
import Button from '../ui/Button';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [instrument, setInstrument] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Submitted:', { email, instrument });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <section id="waitlist" className="py-32 bg-zinc-900/30">
        <div className="container mx-auto px-6 text-center max-w-lg">
           <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-500">
             <span className="text-4xl">✓</span>
           </div>
           <h2 className="font-display text-4xl font-bold text-white mb-6">You're on the list.</h2>
           <p className="text-zinc-400 text-lg">We'll let you know as soon as spots open up. Keep practicing.</p>
           <button 
             onClick={() => setStatus('idle')}
             className="mt-10 text-sm font-medium text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
           >
             Register another email
           </button>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-32 bg-gradient-to-b from-background to-zinc-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">Join the studio.</h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-12 text-xl font-light">
          We’re refining our models with a select group of beta testers. Request access to shape the future of music practice.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input 
              id="email"
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <label htmlFor="instrument" className="sr-only">Main Instrument</label>
            <select 
              id="instrument"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>What do you play? (Optional)</option>
              <option value="drums">Drums</option>
              <option value="guitar">Guitar</option>
              <option value="bass">Bass</option>
              <option value="keys">Keys/Piano</option>
              <option value="vocals">Vocals</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full mt-4"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Joining...' : 'Request Access'}
          </Button>
          
          <p className="text-xs text-center text-zinc-600 mt-6 font-medium">
            No spam. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;