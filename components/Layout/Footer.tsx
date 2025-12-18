import React from 'react';
import { Twitter, Mail, AudioWaveform } from 'lucide-react';
import { APP_NAME } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-800 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-zinc-50">
            <AudioWaveform size={20} className="text-primary" />
            <span className="font-bold">{APP_NAME}</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs">
            "Your practice room, reimagined."
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="mailto:hello@pulse.demo" className="text-zinc-500 hover:text-white transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;