'use client';

import React from 'react';

interface StepIndicatorProps {
  current: number;
  total: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ current, total }) => {
  return (
    <div className="flex justify-center space-x-3 mb-4">
      {Array.from({ length: total }, (_, idx) => idx + 1).map((step) => (
        <span
          key={step}
          className={`
            block w-3 h-3 rounded-full
            ${step === current ? 'bg-blue-500' : 'bg-neutral-200'}
            `}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
