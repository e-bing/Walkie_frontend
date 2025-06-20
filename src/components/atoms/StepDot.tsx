import React from 'react';

interface StepDotProps {
  active: boolean;
}

const StepDot: React.FC<StepDotProps> = ({ active }) => {
  if (!active) {
    return <div className="w-3 h-3 rounded-full bg-neutral-300" />;
  }
  return (
    <div className="relative w-3 h-3">
      <div className="absolute inset-0 rounded-full bg-brand-primary" />
      <div
        className="absolute inset-0 rounded-full blur-[1px] -m-[2px] bg-brand-primary/30"
        style={{
          width: 'calc(100% + 4px)',
          height: 'calc(100% + 4px)',
        }}
      />
    </div>
  );
};

export default StepDot;
