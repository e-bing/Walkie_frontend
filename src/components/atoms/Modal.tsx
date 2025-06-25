'use client';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { ReactNode } from 'react';

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
  height?: string;
}

const BottomSheetModal = ({
  isOpen,
  onClose,
  title = '',
  children,
  confirmText = '확인',
  onConfirm,
  height = '50dvh',
}: BottomSheetModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      placement="bottom"
      backdrop="opaque"
      hideCloseButton
      classNames={{
        wrapper: 'items-end',
        backdrop: 'bg-black/40 backdrop-blur-sm',
      }}
    >
      <ModalContent className={`h-[${height}] w-full bg-white rounded-t-2xl px-4 py-3 shadow-xl`}>
        {() => (
          <div className="flex flex-col h-full">
            {/* 드래그 바 */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

            {/* 헤더 */}
            {title && (
              <ModalHeader className="text-base font-semibold text-neutral-900 p-0 mb-2">
                {title}
              </ModalHeader>
            )}

            {/* 내용 */}
            <ModalBody className="flex-1 overflow-y-auto text-sm text-neutral-700 leading-relaxed p-0">
              {children}
            </ModalBody>

            {/* 확인 버튼 */}
            <ModalFooter className="p-0 mt-4">
              <button
                onClick={onConfirm ?? onClose}
                className="w-full  text-black border border-neutral-300 py-3 rounded-full"
              >
                {confirmText}
              </button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default BottomSheetModal;
