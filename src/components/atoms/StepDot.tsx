import React from 'react';

interface StepDotProps {
  active: boolean;
}

const StepDot: React.FC<StepDotProps> = ({ active }) => {
  return (
    <div
      className={`w-3 h-3 rounded-full transition 
        ${active ? 'bg-blue-500' : 'bg-neutral-200'}
      `}
    />
  );
};

export default StepDot;
