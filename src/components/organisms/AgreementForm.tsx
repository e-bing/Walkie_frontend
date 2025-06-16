'use client';

import React, { useState, useEffect } from 'react';
import AgreementItem from '@/components/molecules/AgreementItem';

export interface AgreementFormProps {
  onAllChecked: (checked: boolean) => void;
}

const AgreementForm = ({ onAllChecked }: AgreementFormProps) => {
  const [all, setAll] = useState(false);
  const [age, setAge] = useState(false);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [thirdParty, setThirdParty] = useState(false);
  const [location, setLocation] = useState(false);

  // 개별 체크 변화에 따라 전체동의 상태 자동 계산
  useEffect(() => {
    const nextAll = age && terms && privacy && thirdParty && location;
    setAll(nextAll);
  }, [age, terms, privacy, thirdParty, location]);

  // 전체동의 상태가 바뀔 때마다 부모에 알림
  useEffect(() => {
    onAllChecked(all);
  }, [all, onAllChecked]);

  const toggleAll = () => {
    const next = !all;
    setAll(next);
    setAge(next);
    setTerms(next);
    setPrivacy(next);
    setThirdParty(next);
    setLocation(next);
  };

  return (
    <div className="mt-8 border-t border-gray-300 pt-4 space-y-2">
      <AgreementItem checked={all} label="전체동의" onToggle={toggleAll} />
      <AgreementItem
        checked={age}
        label="만 14세 이상입니다."
        required
        onToggle={() => setAge((prev) => !prev)}
      />
      <AgreementItem
        checked={terms}
        label="워키 이용약관"
        required
        showArrow
        onToggle={() => setTerms((prev) => !prev)}
      />
      <AgreementItem
        checked={privacy}
        label="개인정보 수집 및 이용 동의"
        required
        showArrow
        onToggle={() => setPrivacy((prev) => !prev)}
      />
      <AgreementItem
        checked={thirdParty}
        label="개인정보 제3자 제공 동의"
        required
        showArrow
        onToggle={() => setThirdParty((prev) => !prev)}
      />
      <AgreementItem
        checked={location}
        label="위치기반 서비스 이용약관"
        required
        showArrow
        onToggle={() => setLocation((prev) => !prev)}
      />
    </div>
  );
};

export default AgreementForm;
