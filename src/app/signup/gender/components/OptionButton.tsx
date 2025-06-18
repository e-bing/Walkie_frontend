// src/app/signup/gender/components/OptionButton.tsx
'use client';

import React from 'react';

interface OptionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-block
        h-[3.5rem]
        px-[5.7rem]
        min-w-[12rem]
        rounded-lg
        border
        bg-white
        text-base
        font-medium
        transition
        ${
          selected
            ? 'border-[#2750E0] text-[#2750E0]'
            : 'border-gray-300 text-black hover:bg-gray-50'
        }
      `}
    >
      {label}
    </button>
  );
};

export default OptionButton;
