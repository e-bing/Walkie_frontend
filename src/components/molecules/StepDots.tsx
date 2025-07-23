import React from 'react';

{
  /* <StepDots steps={전체 단계 수} current={현재 단계} /> */
}
interface StepDotsProps {
  steps: number; // 전체 단계 수
  current: number; // 현재 단계 (0부터 시작)
}

const StepDots: React.FC<StepDotsProps> = ({ steps, current }) => {
  return (
    <div className="flex gap-3">
      {Array.from({ length: steps }).map((_, idx) => {
        const isActive = idx === current;

        if (!isActive) {
          return <div key={idx} className="w-3 h-3 rounded-full bg-neutral-300" />;
        }
        return (
          <div key={idx} className="relative w-3 h-3">
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
      })}
    </div>
  );
};

export default StepDots;
