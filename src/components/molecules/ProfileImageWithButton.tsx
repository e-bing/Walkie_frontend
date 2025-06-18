import React from 'react';
import ProfileImage from '../atoms/ProfileImage';
import IconPlus from '../atoms/IconPlus';

interface ProfileImageWithButtonProps {
  src?: string;
  alt?: string;
  onButtonClick?: () => void;
  imageSize?: number;
  buttonSize?: number;
}

const ProfileImageWithButton: React.FC<ProfileImageWithButtonProps> = ({
  src = '/icons/walkie-logo-character.svg',
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
      className="absolute right-0 bottom-0 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow"
      style={{
        width: buttonSize,
        height: buttonSize,
        minWidth: buttonSize,
        minHeight: buttonSize,
      }}
      aria-label="프로필 이미지 변경"
    >
      <IconPlus size={buttonSize * 0.55} color="#888" />
    </button>
  </div>
);

export default ProfileImageWithButton;
