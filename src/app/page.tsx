'use client';

import React, { useState, useEffect } from 'react';
import PermissionModal from '@/app/PermissionModal';
import { fetchTodaySteps } from '@/utils/fitness';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [granted, setGranted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('permissionGranted') === 'true';
    }
    return false;
  });
  const router = useRouter();
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
      {!granted && (
        <PermissionModal
          onGranted={() => {
            setGranted(true);
            localStorage.setItem('permissionGranted', 'true');
          }}
        />
      )}

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
      <div className="flex flex-col gap-4 mt-3">
        <button
          className="bg-blue-500 text-white px-1 py-2 rounded-md"
          onClick={() => router.push('/signup/profile')}
        >
          회원가입 페이지
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => router.push('/signup/gender')}
        >
          성별 선택 페이지
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => router.push('/signup/terms')}
        >
          약관 동의 페이지
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => router.push('/login')}
        >
          로그인 페이지
        </button>
      </div>
    </>
  );
}
