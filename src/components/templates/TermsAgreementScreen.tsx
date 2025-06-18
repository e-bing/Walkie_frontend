'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AgreementForm from '@/components/organisms/AgreementForm';
import Button from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

const TermsAgreementScreen: React.FC = () => {
  const [allChecked, setAllChecked] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    router.push('/signup/profile');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      {/* 스크롤 가능한 메인 영역 */}
      <div className="flex-1 overflow-y-auto pt-10 sm:pt-12">
        {/* 로고 */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <Image
            src="/icons/walkie-logo-character.svg"
            alt="walkie 캐릭터"
            width={72}
            height={72}
          />
        </div>

        {/* 안내 텍스트 */}
        <div className="text-xl sm:text-2xl font-semibold text-center text-black mb-12 sm:mb-16">
          워키 이용을 위해
          <br />
          약관에 동의해주세요
        </div>

        {/* 약관 동의 폼 */}
        <div className="max-w-sm mx-auto mb-12 sm:mb-16">
          <AgreementForm onAllChecked={setAllChecked} />
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="sticky bottom-0 bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-sm mx-auto">
          <Button
            onClick={handleNext}
            disabled={!allChecked}
            variant={allChecked ? 'primary' : 'secondary'}
            size="lg"
            className="w-full text-white"
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsAgreementScreen;
