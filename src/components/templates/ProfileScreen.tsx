'use client';

import { useState } from 'react';
// import Image from 'next/image';
import Button from '@/components/atoms/Button';
import StepDots from '../molecules/StepDots';
import { useRouter } from 'next/navigation';
import NicknameCheckForm from '../organisms/NicknameCheckForm';
import ProfileImageWithButton from '../molecules/ProfileImageWithButton';
const ProfileScreen = () => {
  const [isNicknameVerified, setIsNicknameVerified] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col max-w-sm mx-auto px-6 pt-25 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-center mt-8 mb-5">
        <StepDots steps={4} current={0} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="text-xl font-semibold leading-snug text-black my-10 text-center">
          프로필을 완성해주세요!
        </div>
        <div className="flex justify-center mb-20">
          <ProfileImageWithButton />
        </div>

        <NicknameCheckForm onVerify={setIsNicknameVerified} />
      </div>

      <div className="fixed bottom-20 left-0 w-full bg-white z-50 px-6 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-sm mx-auto flex justify-center">
          {/* 임시 버튼 */}
          <Button
            onClick={() => router.push('/signup/gender')}
            disabled={!isNicknameVerified}
            variant={isNicknameVerified ? 'primary' : 'secondary'}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
