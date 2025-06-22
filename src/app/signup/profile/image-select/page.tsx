'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/components/molecules/BackHeader';
import NextButton from '@/components/atoms/Button';
import ProfileImageGrid from './components/ProfileImageGrid';

const DEFAULT_IMAGES = ['/icons/kakao.svg', '/icons/naver.svg'];

const ProfileImageSelectPage: React.FC = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      localStorage.setItem('profileImage', selectedImage);
      router.back();
    }
  };

  const allImages = [...DEFAULT_IMAGES, ...customImages];

  return (
    <div className="flex flex-col max-w-sm mx-auto px-6 pt-25 pb-[env(safe-area-inset-bottom)] min-h-screen">
      <BackHeader onBack={() => router.back()} title="이미지 선택" />

      <div className="mt-1 flex-1">
        <div className="mb-4 labelL">프로필 이미지</div>
        <ProfileImageGrid
          images={allImages}
          selectedImage={selectedImage}
          onSelect={handleSelect}
          onUploadClick={() => fileInputRef.current?.click()}
          fileInputRef={fileInputRef}
          onFileChange={handleFileChange}
        />
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
