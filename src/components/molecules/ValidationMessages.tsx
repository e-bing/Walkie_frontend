import React from 'react';
// import StepDot from '../atoms/StepDot';
import Image from 'next/image';

interface ValidationMessageProps {
  messages: string[];
  status: 'default' | 'success' | 'error';
}

const colorMap = {
  default: 'text-neutral-600',
  success: 'text-brand-primary',
  error: 'text-semantic-error',
};

const ValidationMessage: React.FC<ValidationMessageProps> = ({ messages, status }) => (
  <div className={`mt-3 captionS ${colorMap[status]}`}>
    {messages.map((msg, idx) => (
      <div key={idx} className="py-1 flex items-center gap-2">
        {status === 'error' ? (
          <Image src="/icons/warning-icon.svg" alt="경고" width={18} height={18} />
        ) : (
          <div
            className={`p-[2px] w-[15px] h-[15px] rounded-full flex-shrink-0 ${
              status === 'success' ? 'bg-brand-primary' : 'bg-neutral-300'
            }`}
          />
        )}
        <span>{msg}</span>
      </div>
    ))}
  </div>
);

export default ValidationMessage;
