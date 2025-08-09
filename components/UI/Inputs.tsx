import React from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  fieldName: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  fieldName,
  className,
}) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={twMerge(
          "w-full p-2 inputText rounded-md peer focus:outline-none focus:ring-1 duration-200 peer focus:ring-white bg-(--subheading)/10",
          className
        )}
      />
      <h3 className="text-xs mb-1 peer-focus:text-white peer-focus:font-bold duration-200 text-gray-400">
        {fieldName}
      </h3>
    </div>
  );
};

interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  fieldName: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = "Enter text...",
  fieldName,
  className,
}) => {
  return (
    <div className="flex flex-col-reverse">
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={twMerge(
          "w-full inputText p-2 rounded-md peer focus:outline-none focus:ring-1 duration-200 peer focus:ring-white bg-(--subheading)/10",
          className
        )}
      />
      <h3 className="text-xs mb-1 peer-focus:text-white peer-focus:font-bold duration-200 text-gray-400">
        {fieldName}
      </h3>
    </div>
  );
};

interface ImageUploaderProps {
  onDrop: (files: File[]) => void;
  fieldName: string;
  className?: string;
  id?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onDrop, fieldName="Upload Image", className, id = "file-upload" }) => {
  const [preview, setPreview] = React.useState<string | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    onDrop(files);
    if (files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreview(fileReader.result as string);
      };
      fileReader.readAsDataURL(files[0]);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    onDrop(files);
    if (files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreview(fileReader.result as string);
      };
      fileReader.readAsDataURL(files[0]);
    }
  };

  return (
    <>
      <h3 className="text-xs text-white mb-1">{fieldName}</h3>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={twMerge(
          "w-full p-6 border-[1px] flex flex-col items-center justify-center border-dashed rounded-lg text-center bg-gray-800 text-white hover:bg-gray-700 border-white/40 transition-all duration-300",
          className
        )}
      >
        {preview ? (
          <div className="mb-4 ">
            <img
              src={preview}
              alt="Preview"
              className={twMerge("object-cover rounded-md", className)}
            />
          </div>
        ) : (
          <div className="flex flex-col w-full items-center justify-center">
            <p className="text-lg font-semibold mb-2">Upload Image</p>
            <p className="text-sm text-gray-400">
              Drag and drop an image here or click to upload
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id={id}
        />
        <label
          htmlFor={id}
          className="cursor-pointer inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Choose File
        </label>
      </div>
    </>
  );
};

export { TextInput, TextArea, ImageUploader };
