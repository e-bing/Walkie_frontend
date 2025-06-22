import React from 'react';
import BackButton from '@/components/atoms/BackButton';

interface BackHeaderProps {
  onBack?: () => void;
  title?: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ onBack, title }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white h-12 flex items-center px-4 my-3">
    <BackButton onClick={onBack} />
    {title && <span className="ml-3 title3">{title}</span>}
  </header>
);

export default BackHeader;
