'use client';

import React, { useState } from 'react';
import Button from '../atoms/Button';
import StepIndicator from '../molecules/StepIndicator';
import YearSelectField from '../molecules/YearSelectField';
import { useRouter } from 'next/navigation';
const BirthYearTemplate = () => {
  const [birthYear, setBirthYear] = useState('');
  const router = useRouter();

  const handleNext = () => {
    router.push('/signup/location');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="flex-1 w-full max-w-[15rem] flex flex-col items-center pt-28 sm:pt-32 overflow-y-auto pb-8">
        <div className="mb-4 sm:mb-6">
          <StepIndicator current={3} total={4} />
        </div>

        <h2 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-center text-black mb-6 sm:mb-8">
          태어난 연도를 입력해주세요
        </h2>

        <YearSelectField value={birthYear} onChange={setBirthYear} />
      </div>

      <div className="w-full sticky bottom-10 py-6 sm:py-8 px-4 sm:px-6">
        <Button
          onClick={handleNext}
          disabled={!birthYear}
          variant={birthYear ? 'primary' : 'secondary'}
          size="lg"
          className="w-full text-white"
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default BirthYearTemplate;
