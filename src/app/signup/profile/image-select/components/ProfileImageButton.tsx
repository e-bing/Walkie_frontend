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
    className={'relative w-full h-full aspect-square rounded-full overflow-hidden'}
    onPress={() => onSelect(src)}
  >
    <Image src={src} alt="프로필" fill style={{ objectFit: 'cover' }} />
    {selected && (
      <div className="absolute inset-0 bg-neutral-1100/30 pointer-events-none rounded-full z-10" />
    )}

    {selected && (
      <span
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{ pointerEvents: 'none' }}
      >
        <span className="rounded-full p-2 shadow flex items-center justify-center">
          <Image src="/icons/check-icon.svg" alt="" width={30} height={30} />
        </span>
      </span>
    )}
  </Button>
);

export default ProfileImageButton;
