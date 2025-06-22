import React from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';

interface CurrentPositionButtonProps {
  onClick: () => void;
  loading?: boolean;
  className?: string;
}

const CurrentPositionButton: React.FC<CurrentPositionButtonProps> = ({
  onClick,
  loading = false,
  className = '',
}) => (
  <Button
    onPress={onClick}
    size="md"
    className={`w-full flex items-center justify-center border-2 border-brand-primary
         text-brand-primary py-1.5 ${className} rounded-[12px] my-2`}
    disabled={loading}
  >
    <Image src="/icons/location-icon.svg" alt="현재 위치 이미지" width={20} height={20} />
    <span className="labelL">{loading ? '위치 찾는 중...' : '현재 위치로 찾기'}</span>
  </Button>
);

export default CurrentPositionButton;
