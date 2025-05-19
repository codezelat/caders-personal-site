'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const buttonStyles = [
    
    'bg-[#03045E]',
    'text-white',
    'px-6',
    'py-3', 
    'rounded',
    'font-poppins',
    'font-medium',
    'transition-colors',
    'cursor-pointer',
    // Hover state
    'hover:bg-[#02034a]',
    // Focus state for accessibility
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-[#03045E]',
    'focus:ring-offset-2',
   
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    // Custom className
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
    </button>
  );
}