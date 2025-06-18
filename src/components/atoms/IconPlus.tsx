import React from 'react';

interface IconPlusProps {
  size?: number;
  color?: string;
  className?: string;
}

const IconPlus: React.FC<IconPlusProps> = ({ size = 20, color = '#888', className = '' }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" fill="#fff" />
    <path d="M12 8v8M8 12h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default IconPlus;
