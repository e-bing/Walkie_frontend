import React from 'react';

interface AgreementCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const AgreementCheckbox = ({ checked, onChange }: AgreementCheckboxProps) => {
  return (
    <label className="inline-flex items-center">
      <span
        onClick={onChange}
        className={`w-5 h-5 flex items-center justify-center rounded-md border cursor-pointer
          ${checked ? 'bg-[#2C4EFF] border-[#2C4EFF]' : 'bg-white border-gray-300'}`}
      >
        {checked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
    </label>
  );
};

export default AgreementCheckbox;
