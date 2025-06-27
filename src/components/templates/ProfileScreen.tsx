'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/atoms/Button';
import StepDots from '../molecules/StepDots';
import { useRouter } from 'next/navigation';
import NicknameCheckForm from '../organisms/NicknameCheckForm';
import ProfileImageWithButton from '../molecules/ProfileImageWithButton';
import BackHeader from '../molecules/BackHeader';

const DEFAULT_PROFILE_IMAGE = '/icons/profile-default.svg';

const ProfileScreen = () => {
  const [isNicknameVerified, setIsNicknameVerified] = useState(false);
  const [profileImage, setProfileImage] = useState<string>(DEFAULT_PROFILE_IMAGE);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedImage = localStorage.getItem('profileImage');
      if (storedImage) {
        setProfileImage(storedImage);
      } else {
        setProfileImage(DEFAULT_PROFILE_IMAGE);
      }
    }
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto px-6 pt-25 pb-[env(safe-area-inset-bottom)]">
      <BackHeader onBack={handleBack} />
      <div className="flex justify-center mt-8 mb-5">
        <StepDots steps={4} current={0} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="title1 my-10 text-center">프로필을 완성해주세요!</div>
        <div className="flex justify-center mb-20">
          <ProfileImageWithButton
            src={profileImage}
            onButtonClick={() => {
              router.push('/signup/profile/image-select');
            }}
          />
        </div>

        <NicknameCheckForm onVerify={setIsNicknameVerified} />
      </div>

      <div className="fixed bottom-20 left-0 w-full bg-white z-50 px-6 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-sm mx-auto flex justify-center">
          <Button
            onClick={() => router.push('/signup/gender')}
            disabled={!isNicknameVerified || profileImage === DEFAULT_PROFILE_IMAGE}
            variant={
              isNicknameVerified && profileImage !== DEFAULT_PROFILE_IMAGE ? 'primary' : 'secondary'
            }
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
