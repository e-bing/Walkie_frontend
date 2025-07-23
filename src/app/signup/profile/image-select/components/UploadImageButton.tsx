import { Button } from '@heroui/react';
import React from 'react';
import Image from 'next/image';

interface UploadImageButtonProps {
  onClick: () => void;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = ({ onClick }) => (
  <Button
    isIconOnly
    radius="full"
    className="relative w-full h-full aspect-square rounded-full bg-neutral-500"
    onPress={onClick}
    aria-label="내 사진 업로드"
  >
    <Image
      src="/icons/camera-icon.svg"
      alt="카메라 아이콘"
      layout="fill"
      className="object-cover"
      style={{ width: '100%', height: '100%' }}
    />
  </Button>
);

export default UploadImageButton;
