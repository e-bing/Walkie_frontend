'use client';

import React, { useState, useEffect } from 'react';
import PermissionModal from '@/app/PermissionModal';
import { fetchTodaySteps } from '@/utils/fitness';

export default function Home() {
  const [granted, setGranted] = useState(false);
  const [steps, setSteps] = useState<number | null>(null);

  useEffect(() => {
    if (granted) {
      fetchTodaySteps()
        .then((count) => setSteps(count))
        .catch(() => setSteps(NaN));
    }
  }, [granted]);

  return (
    <>
      {/* 권한 모달 */}
      {!granted && <PermissionModal onGranted={() => setGranted(true)} />}

      {/* 권한 허용 후 걸음 수 표시 */}
      <div
        className={`flex flex-col items-center justify-center mt-10 font-bold text-2xl text-black w-full ${
          granted ? '' : 'opacity-50 pointer-events-none'
        }`}
      >
        <h1>오늘 걸음 수</h1>
        <p className="mt-4 text-6xl">
          {granted ? (steps === null ? '...' : isNaN(steps) ? 'NaN' : steps) : '--'}
        </p>
      </div>
    </>
  );
}
