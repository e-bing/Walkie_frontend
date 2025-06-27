'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AgreementForm from '@/components/organisms/AgreementForm';
import Button from '@/components/atoms/Button';
import BottomSheetModal from '@/components/atoms/Modal';

const TermsAgreementScreen: React.FC = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const handleNext = () => {
    setIsModalOpen(true);
    setSelectedTerm('confirm');
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
  };

  const handleClickDetail = (key: string) => {
    setSelectedTerm(key);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-0 px-4 sm:px-6 lg:px-8 mt-15">
      <div className="flex-1 overflow-y-auto pt-10 sm:pt-12">
        <div className="flex justify-left mb-12 sm:mb-16 ml-3">
          <Image
            src="/icons/walkie-logo-character.svg"
            alt="walkie 캐릭터"
            width={72}
            height={72}
          />
        </div>
        <div className="text-xl sm:text-2xl font-semibold text-left text-black mb-12 sm:mb-16 ml-3">
          워키 이용을 위해
          <br />
          약관에 동의해주세요
        </div>
        <div className="max-w-sm mx-auto mb-12 sm:mb-16">
          <AgreementForm onAllChecked={setAllChecked} onClickDetail={handleClickDetail} />
        </div>
      </div>
      <div className="sticky bottom-0 bg-neutral-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-sm mx-auto">
          <Button
            onClick={handleNext}
            disabled={!allChecked}
            variant={allChecked ? 'primary' : 'secondary'}
            size="lg"
            className="w-full text-white"
          >
            다음
          </Button>
        </div>
      </div>
      <BottomSheetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          selectedTerm === 'terms'
            ? '워키 이용약관'
            : selectedTerm === 'privacy'
            ? '개인정보 수집 및 이용 동의'
            : selectedTerm === 'thirdParty'
            ? '개인정보 제3자 제공 동의'
            : selectedTerm === 'location'
            ? '위치기반 서비스 이용약관'
            : '약관 전체 동의 확인'
        }
        confirmText="확인"
        onConfirm={handleModalConfirm}
        height="55dvh"
      >
        {selectedTerm === 'terms' && <p>워키 이용약관에 대한 설명이 들어갑니다.</p>}
        {selectedTerm === 'privacy' && <p>개인정보 수집 및 이용 동의 설명입니다.</p>}
        {selectedTerm === 'thirdParty' && <p>개인정보 제3자 제공 동의 설명입니다.</p>}
        {selectedTerm === 'location' && <p>위치기반 서비스 이용약관 설명입니다.</p>}
        {selectedTerm === 'confirm' && (
          <p>
            워키 이용약관에 대한 간단한 요약을 표시할 수 있습니다.
            <br />
            또는 추가 동의 안내 메시지를 넣을 수도 있습니다.
          </p>
        )}
      </BottomSheetModal>
    </div>
  );
};

export default TermsAgreementScreen;
