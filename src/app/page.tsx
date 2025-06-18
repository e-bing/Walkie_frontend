'use client';

import React, { useState } from 'react';
import PermissionModal from '@/app/PermissionModal';

export default function Home() {
  const [granted, setGranted] = useState(false);

  return (
    <>
      {/* 권한 모달 */}
      {!granted && <PermissionModal onGranted={() => setGranted(true)} />}

      {/* 권한 허용 후에만 활성화 */}
      <div
        className={`flex flex-col items-center justify-center mt-10 font-bold text-2xl text-black w-full\`
          ${granted ? '' : 'opacity-50 pointer-events-none'}
        `}
      >
        <h1>test page</h1>
      </div>
    </>
  );
}
