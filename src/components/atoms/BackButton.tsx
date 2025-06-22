import React from 'react';
import Image from 'next/image';

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  className = '',
  ariaLabel = '뒤로가기',
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center justify-center ${className}`}
    aria-label={ariaLabel}
  >
    <Image src="/icons/chevron-left.svg" alt="뒤로가기" width={24} height={24} />
  </button>
);

export default BackButton;
