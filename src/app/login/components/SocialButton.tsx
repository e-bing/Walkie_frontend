import React from 'react';
import { ReactNode } from 'react';

interface SocialButtonProps {
  icon: ReactNode;
  text: string;
  bgColor: string;
  textColor: string;
  border?: boolean;
  onClick?: () => void;
}

const SocialButton = ({
  icon,
  text,
  bgColor,
  textColor,
  border = false,
  onClick,
}: SocialButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-[3.625rem] flex items-center justify-center gap-2 rounded-full text-base font-medium ${bgColor} ${textColor} ${
        border ? 'border border-gray-400' : ''
      }`}
    >
      {icon}
      {text}
    </button>
  );
};

export default SocialButton;
