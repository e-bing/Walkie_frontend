import React from 'react';
import BackButton from '@/components/atoms/BackButton';

interface BackHeaderProps {
  onBack?: () => void;
}

const BackHeader: React.FC<BackHeaderProps> = ({ onBack }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white h-12 flex items-center px-4 my-3">
    <BackButton onClick={onBack} />
  </header>
);

export default BackHeader;
