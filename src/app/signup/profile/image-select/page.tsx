'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/components/molecules/BackHeader';

const ProfileImageSelectPage: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto px-6 pt-25 pb-[env(safe-area-inset-bottom)]">
      <BackHeader onBack={handleBack} title={'이미지 선택'} />
      <div>이미지 선택 페이지</div>
    </div>
  );
};

export default ProfileImageSelectPage;
