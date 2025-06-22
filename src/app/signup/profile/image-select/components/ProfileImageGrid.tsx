import React from 'react';
import ProfileImageButton from './ProfileImageButton';
import UploadImageButton from './UploadImageButton';

interface ProfileImageGridProps {
  images: string[];
  selectedImage: string | null;
  onSelect: (src: string) => void;
  onUploadClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileImageGrid: React.FC<ProfileImageGridProps> = ({
  images,
  selectedImage,
  onSelect,
  onUploadClick,
  fileInputRef,
  onFileChange,
}) => (
  <div className="grid grid-cols-3 gap-4 mb-6">
    {images.map((src, idx) => (
      <ProfileImageButton
        key={src + idx}
        src={src}
        selected={selectedImage === src}
        onSelect={onSelect}
      />
    ))}
    <UploadImageButton
      onClick={onUploadClick}
      fileInputRef={fileInputRef}
      onFileChange={onFileChange}
    />
  </div>
);

export default ProfileImageGrid;
