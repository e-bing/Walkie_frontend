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
        rounded-full border bg-neutral-0
        text-base font-medium transition
        /* 모바일: 상하 0.75rem, 좌우 1rem */
        px-4 py-3
        /* sm 이상: 상하 1rem, 좌우 1.5rem */
        sm:px-6 sm:py-4
        ${
          selected
            ? 'border-blue-500 text-blue-500'
            : 'border-neutral-200 text-black hover:bg-neutral-50'
        }
      `}
    >
      {label}
    </button>
  );
};

export default OptionButton;
