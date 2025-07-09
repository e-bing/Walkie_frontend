'use client';

import React from 'react';

interface PermissionModalContentProps {
  type: 'activity' | 'notification' | 'locationAlways' | 'locationAccess';
  onSelect: (value: string) => void;
}

// 모달 내용의 공통 타입 정의
interface ModalContent {
  title: string;
  buttonList: string[];
  icon: string;
  description?: string;
}

// 타입 안정성을 위한 명시적 타입 선언
const modalData: Record<PermissionModalContentProps['type'], ModalContent> = {
  activity: {
    title: '워크온에서 내 신체 활동 정보에\n액세스하도록 허용하시겠습니까?',
    buttonList: ['허용', '허용 안함'],
    icon: '/icons/activity.svg',
  },
  notification: {
    title: '워크온에서 알림을 보내도록\n허용하시겠습니까?',
    buttonList: ['허용', '허용 안함'],
    icon: '/icons/notification.svg',
  },
  locationAlways: {
    title: "위치 '항상 허용' 권한 안내",
    description:
      "위기에서는 활동 기록에 전기 운동 경로를 표시하고,\n위치 기반 챌린지의 원활한 참여를 위해 위치권한 '항상 허용'을 권장하고 있습니다.\n\n위치 권한을 '항상 허용'하지 않아도 앱을 사용할 수 있지만, 일부 위치 기반 서비스가 제한될 수 있습니다.",
    buttonList: ['거부', '설정'],
    icon: '/icons/location.svg',
  },
  locationAccess: {
    title: '워크온에서 이 기기의 위치 정보에\n액세스하도록 허용하시겠습니까?',
    description: '앱에서 위치 데이터를 서드 파티와 공유할 수 있다고 명시했습니다.',
    buttonList: ['앱 사용 중에만 허용', '허용 안함'],
    icon: '/icons/location.svg',
  },
};

const PermissionModalContent = ({ type, onSelect }: PermissionModalContentProps) => {
  const { title, description, buttonList, icon } = modalData[type];

  return (
    <div className="flex flex-col justify-between h-full text-center px-2">
      {/* 아이콘 */}
      <img src={icon} alt="icon" className="w-10 h-10 mx-auto mb-4" />

      {/* 타이틀 */}
      <p className="whitespace-pre-line font-medium text-base text-black">{title}</p>

      {/* 설명 (옵션) */}
      {description && (
        <p className="text-sm text-neutral-600 whitespace-pre-line mt-2">{description}</p>
      )}

      {/* 버튼 리스트 */}
      <div className="flex flex-col gap-3 mt-6">
        {buttonList.map((label) => (
          <button
            key={label}
            onClick={() => onSelect(label)} // ✅ 클릭 시 상위로 전달
            className="py-3 w-full border border-neutral-300 rounded-full text-black text-sm"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PermissionModalContent;
