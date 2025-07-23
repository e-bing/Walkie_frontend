import React from 'react';
import Image from 'next/image';

interface CameraIconProps {
  size?: number;
  className?: string;
}

const CameraIcon: React.FC<CameraIconProps> = ({ size }) => (
  <span
    className="inline-block rounded-full border-2 border-neutral-0"
    style={{ width: size, height: size }}
  >
    <Image src="/icons/camera-icon.svg" alt="사진 추가 이미지" width={size} height={size} />
  </span>
);

export default CameraIcon;
