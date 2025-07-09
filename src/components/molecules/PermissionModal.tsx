'use client';

import React from 'react';
import BottomSheetModal from '@/components/atoms/Modal';
import PermissionModalContent from '@/components/atoms/PermissionModalContent';
// import { requestLocationPermission } from '@/utils/permissionHandlers';

interface PermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  type: 'activity' | 'notification' | 'locationAlways' | 'locationAccess';
}

const ACCEPT_VALUES = ['허용', '설정', '앱 사용 중에만 허용'];

const PermissionModal = ({ isOpen, onClose, onNext, type }: PermissionModalProps) => {
  const handleSelect = async (value: string) => {
    if (type === 'locationAccess') {
      // const granted = await requestLocationPermission();

      // if (granted) {
      //   onNext();
      // } else {
      //   alert('위치 권한 요청에 실패했습니다. 설정에서 권한을 허용해 주세요.');
      //   onClose();
      // }
      return;
    }

    if (ACCEPT_VALUES.includes(value)) {
      onNext();
    } else {
      alert('해당 권한은 앱 이용을 위해 필요합니다.\n수락 후 앱을 이용해 주세요.');
      onClose();
    }
  };

  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose} height="60dvh" hideFooter={true}>
      <PermissionModalContent type={type} onSelect={handleSelect} />
    </BottomSheetModal>
  );
};

export default PermissionModal;
