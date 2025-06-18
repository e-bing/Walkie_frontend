'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StepIndicator from '@/components/molecules/StepIndicator';
import OptionButton from '@/app/signup/gender/components/OptionButton';
import Button from '@/components/atoms/Button';

const GENDERS = [
  { value: 'male', label: '남성' },
  { value: 'female', label: '여성' },
] as const;

const GenderSelectionScreen: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    router.push('/signup/birthyear');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4 sm:px-6">
      {/* 메인 컨텐츠 */}
      <div className="flex-1 w-full max-w-[15rem] flex flex-col items-center pt-28 sm:pt-32 overflow-y-auto pb-8">
        {/* 스텝 인디케이터 */}
        <div className="mb-4 sm:mb-6">
          <StepIndicator current={2} total={4} />
        </div>

        {/* 타이틀 */}
        <h2 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-center text-neutral-1100 mb-6 sm:mb-8">
          성별을 입력해주세요!
        </h2>

        {/* 옵션 리스트: 화면 크기에 따라 간격 조절 */}
        <div className="w-full flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
          {GENDERS.map(({ value, label }) => (
            <OptionButton
              key={value}
              label={label}
              selected={selected === value}
              onClick={() => setSelected(value)}
            />
          ))}
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="w-full sticky bottom-0 bg-white py-6 sm:py-8 px-4 sm:px-6">
        <Button
          onClick={handleNext}
          disabled={!selected}
          variant={selected ? 'primary' : 'secondary'}
          size="lg"
          className="w-full text-white"
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default GenderSelectionScreen;
