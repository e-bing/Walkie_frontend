import { Button } from '@heroui/react';
import React from 'react';

interface UploadImageButtonProps {
  onClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = ({
  onClick,
  fileInputRef,
  onFileChange,
}) => (
  <Button
    isIconOnly
    radius="lg"
    className="relative aspect-square rounded-[8px] overflow-hidden bg-neutral-500"
    onPress={onClick}
    aria-label="내 사진 업로드"
  >
    <span className="text-3xl font-bold text-neutral-0">+</span>
    <input
      type="file"
      accept="image/jpeg,image/png,image/webp"
      ref={fileInputRef}
      className="hidden"
      onChange={onFileChange}
      tabIndex={-1}
    />
  </Button>
);

export default UploadImageButton;
