import Image from 'next/image';
import React from 'react';

interface ProfileImageProps {
  src: string;
  alt?: string;
  size?: number; // px 단위, 기본값 112 (w-28 h-28)
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt = '프로필 이미지',
  size = 112,
  className = '',
}) => (
  <div
    className={`relative overflow-hidden rounded-full ${className}`}
    style={{ width: size, height: size }}
  >
    <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} sizes={`${size}px`} />
  </div>
);

export default ProfileImage;
