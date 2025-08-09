import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, loading = false, type = 'button', children, className }) => {
  const buttonClasses = twMerge(
    'px-4 py-2 rounded text-white',
    disabled || loading ? 'bg-gray-400' : 'bg-action-button hover:bg-hover-action-button',
    className
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={buttonClasses}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;