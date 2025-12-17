import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${dark ? 'bg-stone-50' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {children}
      </div>
    </section>
  );
};