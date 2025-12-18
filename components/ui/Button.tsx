import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  // Switched to rounded-full for a more modern app feel
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-transparent",
    secondary: "bg-surface text-white border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 backdrop-blur-sm",
    outline: "bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  // Override primary for that gradient feel if requested, but white/black is cleaner for high-end. 
  // Let's stick to the high-contrast white on black for primary.
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;