import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-guru-dark";
  
  const variants = {
    // Primary stays same on both modes (Brand color)
    primary: "bg-gradient-to-r from-guru-primary to-guru-secondary hover:from-red-600 hover:to-orange-600 text-white shadow-lg shadow-red-900/30 dark:shadow-red-900/30 border border-transparent",
    // Secondary: Light BG on Dark mode, Dark BG on Light mode
    secondary: "bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-guru-dark shadow-lg shadow-black/10 dark:shadow-white/10",
    // Outline: Adapts border color
    outline: "border border-gray-300 dark:border-white/20 hover:border-gray-500 dark:hover:border-white/40 text-gray-900 dark:text-white bg-transparent backdrop-blur-sm",
    // Ghost: Adapts text color
    ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-guru-muted hover:text-gray-900 dark:hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};