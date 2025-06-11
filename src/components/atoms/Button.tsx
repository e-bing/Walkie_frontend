// 가장 작은 단위의 UI 요소  ( 변경 해야함 )
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

export default Button;
