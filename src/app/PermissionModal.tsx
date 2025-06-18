// 임시 테스트 모달 위치정보 및, 건강앱 권한 허용 모달 테스트 필요함
'use client';

import React, { useEffect, useState } from 'react';

interface PermissionModalProps {
  onGranted: () => void;
}

const PermissionModal: React.FC<PermissionModalProps> = ({ onGranted }) => {
  // 1단계: 위치, 2단계: 건강연동
  const [step, setStep] = useState<1 | 2>(1);
  const [requesting, setRequesting] = useState(false);
  const [, setLocationGranted] = useState(false);

  useEffect(() => {
    // 모달 표시
  }, []);

  const handleAllow = () => {
    if (step === 1) {
      // 위치 요청
      setRequesting(true);
      if (!navigator.geolocation) {
        alert('위치 정보를 지원하지 않습니다.');
        setRequesting(false);
        return;
      }
      navigator.geolocation.getCurrentPosition(
        () => {
          setRequesting(false);
          setLocationGranted(true);
          setStep(2); // 다음 단계로
        },
        () => {
          setRequesting(false);
          alert('위치 권한이 거부되었습니다. 앱 사용 불가');
          window.location.href = 'about:blank';
        },
        { enableHighAccuracy: true },
      );
    } else {
      // 건강 앱 연동 단계
      // Android 인텐트 호출
      const intentUrl =
        'intent://com.google.android.apps.fitness#Intent;scheme=googlefit;package=com.google.android.apps.fitness;end';
      window.location.href = intentUrl;
      // 시뮬레이션
      setTimeout(() => {
        onGranted();
      }, 1000);
    }
  };

  const handleReject = () => {
    // 거절 시 앱 종료
    alert('권한 거부 시 앱 사용이 불가합니다. 앱을 종료합니다.');
    window.location.href = 'about:blank';
  };

  // 단계별 문구
  const title = step === 1 ? '위치 권한 요청' : '건강 앱 연동 요청';
  const description =
    step === 1
      ? '앱 기능 사용을 위해 위치 권한을 허용해주세요.'
      : '원활한 건강 데이터 사용을 위해 건강 앱을 연동해주세요.';
  const allowLabel = step === 1 ? '허용' : '허용';

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-xs text-center border border-black">
        <h2 className="text-lg font-semibold mb-2 text-black">{title}</h2>
        <p className="text-sm text-gray-600 mb-6">{description}</p>

        <div className="flex justify-center space-x-4">
          <button onClick={handleReject} className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            거절
          </button>
          <button
            onClick={handleAllow}
            disabled={requesting}
            className={`px-4 py-2 bg-[#2750E0] text-white rounded hover:bg-blue-700 ${
              requesting ? 'opacity-50' : ''
            }`}
          >
            {requesting ? '요청 중...' : allowLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionModal;
