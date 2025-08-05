import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, loading = false, type = 'button', children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={`px-4 py-2 rounded ${disabled || loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;