import { Button } from '@heroui/react';
import Image from 'next/image';

interface ProfileImageButtonProps {
  src: string;
  selected: boolean;
  onSelect: (src: string) => void;
}

const ProfileImageButton: React.FC<ProfileImageButtonProps> = ({ src, selected, onSelect }) => (
  <Button
    isIconOnly
    variant={selected ? 'solid' : 'ghost'}
    color={selected ? 'primary' : 'default'}
    className={`relative aspect-square rounded-[8px] overflow-hidden focus:ring-2 focus:ring-brand-primary ${
      selected ? 'ring-2 ring-brand-primary' : ''
    }`}
    onPress={() => onSelect(src)}
  >
    <Image src={src} alt="프로필" fill style={{ objectFit: 'cover' }} />
  </Button>
);

export default ProfileImageButton;
