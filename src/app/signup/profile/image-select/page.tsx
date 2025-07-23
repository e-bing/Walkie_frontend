'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import BackHeader from '@/components/molecules/BackHeader';
import NextButton from '@/components/atoms/Button';
import BottomSheetModal from '@/components/atoms/Modal';
import ProfileImageGrid from './components/ProfileImageGrid';

const DEFAULT_IMAGES = [
  '/icons/profile-character-1.svg',
  '/icons/profile-character-2.svg',
  '/icons/profile-character-3.svg',
  '/icons/profile-character-4.svg',
  '/icons/profile-character-5.svg',
];

const ProfileImageSelectPage: React.FC = () => {
  const router = useRouter();
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const albumInputRef = useRef<HTMLInputElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [customImages, setCustomImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedImage = localStorage.getItem('profileImage');
      if (storedImage) {
        if (!DEFAULT_IMAGES.includes(storedImage)) {
          setCustomImages([storedImage]);
        } else {
          setCustomImages([]);
        }
        setSelectedImage(storedImage);
      }
    }
  }, []);

  const handleSelect = (src: string) => setSelectedImage(src);

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        setCustomImages((prev) => [...prev, e.target!.result as string]);
        setSelectedImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0]);
      setIsModalOpen(false);
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      localStorage.setItem('profileImage', selectedImage);
      router.back();
    }
  };

  const handleUploadClick = () => setIsModalOpen(true);

  const openCamera = () => {
    setIsModalOpen(false);
    cameraInputRef.current?.click();
  };

  const openAlbum = () => {
    setIsModalOpen(false);
    albumInputRef.current?.click();
  };

  const allImages = [...DEFAULT_IMAGES, ...customImages];

  return (
    <div className="flex flex-col max-w-sm mx-auto px-6 pt-25 pb-[env(safe-area-inset-bottom)] min-h-screen">
      <BackHeader onBack={() => router.back()} title="이미지 선택" />

      <div className="mt-1 flex-1">
        <div className="mb-8 body1 text-center">사용할 프로필 이미지를 선택해주세요.</div>
        <ProfileImageGrid
          images={allImages}
          selectedImage={selectedImage}
          onSelect={handleSelect}
          onUploadClick={handleUploadClick}
        />

        <input
          type="file"
          accept="image/jpeg,image/png"
          capture="environment"
          className="hidden"
          ref={cameraInputRef}
          onChange={handleFileChange}
          tabIndex={-1}
        />
        <input
          type="file"
          accept="image/jpeg,image/png"
          ref={albumInputRef}
          className="hidden"
          onChange={handleFileChange}
          tabIndex={-1}
        />

        <BottomSheetModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title=" "
          confirmText="취소"
          hideFooter={true}
        >
          <div className="flex flex-col gap-4">
            <Button
              onPress={openCamera}
              radius="lg"
              className="w-full body1 text-neutral-1100 text-left justify-start"
            >
              카메라
            </Button>
            <Button
              onPress={openAlbum}
              radius="lg"
              className="w-full body1 text-neutral-1100 text-left justify-start"
            >
              앨범에서 선택
            </Button>
          </div>
        </BottomSheetModal>
      </div>

      <div className="fixed bottom-8 left-0 w-full bg-white z-50 px-6 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-sm mx-auto flex justify-center">
          <NextButton
            onClick={handleNext}
            disabled={!selectedImage}
            variant={selectedImage ? 'primary' : 'secondary'}
          >
            다음
          </NextButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageSelectPage;
