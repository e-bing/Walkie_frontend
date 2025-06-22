import React from 'react';

interface CustomInputProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  endContent?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  borderColor?: string;
  className?: string;
  inputClassName?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  onClick,
  placeholder,
  readOnly = false,
  endContent,
  size = 'md',
  borderColor = 'border-neutral-300',
  className = '',
  inputClassName = '',
}) => {
  const sizeMap = {
    sm: 'py-2',
    md: 'py-3',
    lg: 'py-4',
  };

  return (
    <div className={`relative w-full ${className}`}>
      <input
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`
          w-full pr-10 bg-transparent outline-none text-neutral-1000 font-body1
          ${sizeMap[size]}
          ${inputClassName}
          ${readOnly ? 'cursor-pointer' : ''}
        `}
        tabIndex={readOnly ? -1 : 0}
      />
      {endContent && <div className="absolute right-2 top-1/2 -translate-y-1/2">{endContent}</div>}
      <div
        className={`absolute left-0 right-0 bottom-0 h-0.5 mt-2 ${borderColor} transition-colors border-b`}
      />
    </div>
  );
};

export default CustomInput;
