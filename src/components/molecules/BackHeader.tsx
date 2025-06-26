import React from 'react';
import BackButton from '@/components/atoms/BackButton';

interface BackHeaderProps {
  onBack?: () => void;
  title?: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ onBack, title }) => (
  <header className="fixed top-0 left-0 w-full z-50 h-12 flex items-center px-4 my-3">
    <BackButton onClick={onBack} />
    <div className="flex-1 flex justify-center items-center relative">
      {title && <span className="labelL text-neutral-800">{title}</span>}
    </div>
    <div style={{ width: 40 }} />
  </header>
);

export default BackHeader;
