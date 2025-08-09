import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder = "Search...", className }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={twMerge("w-full p-2 inputText rounded-md focus:outline-none focus:ring-1 duration-200 peer focus:ring-white bg-(--subheading)/10", className)}
    />
  );
};

interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder = "Enter text...", className }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={twMerge("w-full p-2 rounded-md focus:outline-none focus:ring-1 duration-200 peer focus:ring-white bg-(--subheading)/10", className)}
    />
  );
};

export { TextInput, TextArea };