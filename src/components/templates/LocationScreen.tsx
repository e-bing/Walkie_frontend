'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LocationSearchForm from '../organisms/LocationSearchForm';
import StepDots from '../molecules/StepDots';
import Button from '../atoms/Button';
import BackHeader from '../molecules/BackHeader';

const LocationScreen: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    const location = searchParams.get('selected');
    if (location) setSelectedLocation(location);
  }, [searchParams]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto px-6 pt-25 pb-[env(safe-area-inset-bottom)]">
      <BackHeader onBack={handleBack} />
      <div className="flex justify-center mt-8 mb-5">
        <StepDots steps={4} current={3} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="title1 mt-10 mb-20 text-center">
          주로 산책하는 지역을
          <br />
          입력해주세요!
        </div>

        <LocationSearchForm value={selectedLocation} />
      </div>

      <div className="fixed bottom-10 left-0 w-full bg-neutral-0 z-50 px-6 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-sm mx-auto">
          <Button
            onClick={() => router.push('')}
            disabled={!selectedLocation}
            variant={selectedLocation ? 'primary' : 'secondary'}
            size="lg"
            className="w-full title2 text-white"
          >
            시작하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationScreen;
