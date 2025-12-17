import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-4 px-8 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg active:scale-95 text-center";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-brand-200",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white shadow-secondary-200",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};