import React from 'react';
import StepDot from '../atoms/StepDot';

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
      {Array.from({ length: steps }).map((_, idx) => (
        <StepDot key={idx} active={idx === current} />
      ))}
    </div>
  );
};

export default StepDots;
