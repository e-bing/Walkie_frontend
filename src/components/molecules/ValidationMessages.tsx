import React from 'react';
import StepDot from '../atoms/StepDot';

interface ValidationMessageProps {
  messages: string[];
  status: 'default' | 'success' | 'error';
}

const colorMap = {
  default: 'text-[#D9D9D9]',
  success: 'text-[#2750E0]',
  error: 'text-[#FB1D1D]',
};

const ValidationMessage: React.FC<ValidationMessageProps> = ({ messages, status }) => (
  <div className={`mt-3 text-xs ${colorMap[status]}`}>
    {messages.map((msg, idx) => (
      <div key={idx} className="py-1 flex items-center gap-2">
        <StepDot active={false} />
        <span>{msg}</span>
      </div>
    ))}
  </div>
);

export default ValidationMessage;
