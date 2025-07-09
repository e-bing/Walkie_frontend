'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PermissionSection from '@/components/molecules/PermissionSection';
import PermissionItem from '@/components/atoms/PermissionItem';
import Button from '@/components/atoms/Button';
import PermissionModal from '@/components/molecules/PermissionModal';

// 보여줄 모달 순서 정의
const modalOrder: ('activity' | 'notification' | 'locationAlways' | 'locationAccess')[] = [
  'activity',
  'notification',
  'locationAlways',
  'locationAccess',
];

const PermissionTemplate = () => {
  const [modalIndex, setModalIndex] = useState<number>(-1);
  const router = useRouter();

  // 다음 모달로 넘어가는 핸들러
  const handleNextModal = () => {
    if (modalIndex < modalOrder.length - 1) {
      setModalIndex((prev) => prev + 1);
    } else {
      // 모든 모달이 끝나면 /login으로 이동
      setModalIndex(-1);
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-col px-6 py-8 min-h-screen bg-white text-neutral-900">
      <h1 className="title2 text-center">앱 접근권한 안내</h1>
      <p className="body2 text-center mt-1 mb-6 text-neutral-600">
        서비스 이용을 위해 아래 권한이 필요합니다.
      </p>

      <hr className="border-neutral-300 mb-4" />

      {/* 필수 권한 섹션 */}
      <PermissionSection title="필수적 접근권한">
        <PermissionItem
          icon={<img src="/icons/activity.svg" alt="신체 활동 아이콘" className="w-6 h-6" />}
          title="신체 활동"
          description="실시간 걸음 수 및 활동 상태를 측정합니다."
        />
        <PermissionItem
          icon={<img src="/icons/location.svg" alt="위치 아이콘" className="w-6 h-6" />}
          title="위치"
          description="위치 기반 활동 기록에 사용됩니다."
        />
        <PermissionItem
          icon={
            <img
              src="/icons/battery.svg"
              alt="배터리 사용량 최적화 제외 아이콘"
              className="w-6 h-6"
            />
          }
          title="배터리 사용량 최적화 제외"
          description="앱을 실행하지 않아도 걸음 수, 활동 기록을 자동으로 측정합니다."
        />
      </PermissionSection>

      {/* 선택 권한 섹션 */}
      <PermissionSection title="선택적 접근권한">
        <PermissionItem
          icon={<img src="/icons/camera.svg" alt="카메라 아이콘" className="w-6 h-6" />}
          title="카메라"
          description="걷기 인증 사진을 촬영할 수 있습니다."
        />
        <PermissionItem
          icon={<img src="/icons/gallery.svg" alt="갤러리 아이콘" className="w-6 h-6" />}
          title="사진 및 동영상"
          description="촬영한 인증 사진을 저장하고 불러올 수 있습니다."
        />
        <PermissionItem
          icon={<img src="/icons/notification.svg" alt="알림 아이콘" className="w-6 h-6" />}
          title="알림"
          description="앱 알림을 통해 걸음 수 수정 및 공지사항을 안내합니다."
        />
      </PermissionSection>

      <hr className="border-neutral-300" />

      {/* 안내 문구 */}
      <ul className="body2 text-neutral-500 mt-4 list-disc list-inside">
        <li>필수 권한은 다음 단계에서 &apos;허용&apos;을 선택해 주세요.</li>
        <li>선택 권한은 필요 시에만 허용하셔도 됩니다.</li>
      </ul>

      {/* 확인 버튼 */}
      <div className="mt-8">
        <Button onClick={() => setModalIndex(0)} variant="primary" size="lg">
          확인
        </Button>
      </div>

      {/* 모달 */}
      {modalIndex >= 0 && (
        <PermissionModal
          isOpen={modalIndex >= 0}
          onClose={() => setModalIndex(-1)}
          onNext={handleNextModal}
          type={modalOrder[modalIndex]}
        />
      )}
    </div>
  );
};

export default PermissionTemplate;
