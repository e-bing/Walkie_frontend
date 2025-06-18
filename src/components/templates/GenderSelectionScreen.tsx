'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StepIndicator from '@/components/molecules/StepIndicator';
import OptionButton from '@/app/signup/gender/components/OptionButton';
import Button from '@/components/atoms/Button';

const GENDERS = [
  { value: 'male', label: '남성' },
  { value: 'female', label: '여성' },
  { value: 'none', label: '비공개' },
] as const;

const GenderSelectionScreen: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    // TODO: 선택값 저장 로직 추가예정
    router.push('/signup/birthyear');
  };

  return (
    <div
      className="
        flex flex-col items-center
        min-h-screen overflow-y-auto
        px-[1.5rem] pt-[5.75rem]
        pb-[env(safe-area-inset-bottom)]
      "
    >
      {/* 1) 스텝 */}
      <StepIndicator current={2} total={4} />

      {/* 타이틀 */}
      <h2
        className="
          mt-[3.5rem] text-xl font-semibold
          text-center mb-[1.3rem] text-black
        "
      >
        성별을 입력해주세요!
      </h2>

      <div className="flex flex-col items-center space-y-[1.75rem] mt-[1rem]">
        {GENDERS.map(({ value, label }) => (
          <OptionButton
            key={value}
            label={label}
            selected={selected === value}
            onClick={() => setSelected(value)}
          />
        ))}
      </div>

      {/* 다음 버튼 */}
      <div className="w-full flex justify-center mt-[13rem] mb-[1rem]">
        <Button
          onClick={handleNext}
          disabled={!selected}
          variant={selected ? 'primary' : 'secondary'}
          size="lg"
          className="text-white w-[15rem]"
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default GenderSelectionScreen;
