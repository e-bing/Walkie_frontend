import React from 'react';
import ProfileImageButton from './ProfileImageButton';
import UploadImageButton from './UploadImageButton';

interface ProfileImageGridProps {
  images: string[];
  selectedImage: string | null;
  onSelect: (src: string) => void;
  onUploadClick: () => void;
}

const ProfileImageGrid: React.FC<ProfileImageGridProps> = ({
  images,
  selectedImage,
  onSelect,
  onUploadClick,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <UploadImageButton onClick={onUploadClick} />
      {images.map((src, idx) => (
        <ProfileImageButton
          key={src + idx}
          src={src}
          selected={selectedImage === src}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default ProfileImageGrid;
