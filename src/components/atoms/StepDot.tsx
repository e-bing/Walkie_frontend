import React from 'react';

interface StepDotProps {
  active: boolean;
}

const StepDot: React.FC<StepDotProps> = ({ active }) => {
  return (
    <div
      className={`w-3 h-3 rounded-full transition 
        ${active ? 'bg-[#2750E0]' : 'bg-[#D9D9D9]'}
      `}
    />
  );
};

export default StepDot;
