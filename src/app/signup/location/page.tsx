'use client';

import React from 'react';
import { Suspense } from 'react';
import LocationScreen from '@/components/templates/LocationScreen';

const LocationPage: React.FC = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <LocationScreen />
    </Suspense>
  );
};

export default LocationPage;
