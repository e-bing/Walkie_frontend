import React from 'react';
import ProfileImage from '../atoms/ProfileImage';
import CameraIcon from '../atoms/CameraIcon';

interface ProfileImageWithButtonProps {
  src?: string;
  alt?: string;
  onButtonClick?: () => void;
  imageSize?: number;
  buttonSize?: number;
}

const ProfileImageWithButton: React.FC<ProfileImageWithButtonProps> = ({
  src = '/icons/profile-default.svg',
  alt = '프로필 이미지',
  onButtonClick,
  imageSize = 112,
  buttonSize = 36,
}) => (
  <div className="relative inline-block">
    <ProfileImage src={src} alt={alt} size={imageSize} />
    <button
      type="button"
      onClick={onButtonClick}
      className="absolute right-0 bottom-0 flex items-center justify-center rounded-full shadow"
      style={{
        width: buttonSize,
        height: buttonSize,
        minWidth: buttonSize,
        minHeight: buttonSize,
      }}
      aria-label="프로필 이미지 변경"
    >
      <CameraIcon size={buttonSize} />
    </button>
  </div>
);

export default ProfileImageWithButton;
