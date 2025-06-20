import React from 'react';
import Image from 'next/image';

interface CameraIconProps {
  size?: number;
  className?: string;
}

const CameraIcon: React.FC<CameraIconProps> = ({ size }) => (
  <Image src="/icons/camera-icon.svg" alt="사진 추가 이미지" width={size} height={size} />
);

export default CameraIcon;
