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
        w-full
        rounded-lg border bg-white
        text-base font-medium transition
        /* 모바일: 상하 0.75rem, 좌우 1rem */
        px-4 py-3
        /* sm 이상: 상하 1rem, 좌우 1.5rem */
        sm:px-6 sm:py-4
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
