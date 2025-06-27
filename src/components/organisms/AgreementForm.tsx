'use client';

import React, { useState, useEffect } from 'react';
import AgreementItem from '@/components/molecules/AgreementItem';

export interface AgreementFormProps {
  onAllChecked: (checked: boolean) => void;
  onClickDetail?: (key: string) => void;
}

const AgreementForm = ({ onAllChecked, onClickDetail }: AgreementFormProps) => {
  const [all, setAll] = useState(false);
  const [age, setAge] = useState(false);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [thirdParty, setThirdParty] = useState(false);
  const [location, setLocation] = useState(false);

  useEffect(() => {
    const nextAll = age && terms && privacy && thirdParty && location;
    setAll(nextAll);
  }, [age, terms, privacy, thirdParty, location]);

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
    <div className="mt-8 border-t border-neutral-200 pt-4 space-y-2">
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
        onClickArrow={() => onClickDetail?.('terms')}
      />
      <AgreementItem
        checked={privacy}
        label="개인정보 수집 및 이용 동의"
        required
        showArrow
        onToggle={() => setPrivacy((prev) => !prev)}
        onClickArrow={() => onClickDetail?.('privacy')}
      />
      <AgreementItem
        checked={thirdParty}
        label="개인정보 제3자 제공 동의"
        required
        showArrow
        onToggle={() => setThirdParty((prev) => !prev)}
        onClickArrow={() => onClickDetail?.('thirdParty')}
      />
      <AgreementItem
        checked={location}
        label="위치기반 서비스 이용약관"
        required
        showArrow
        onToggle={() => setLocation((prev) => !prev)}
        onClickArrow={() => onClickDetail?.('location')}
      />
    </div>
  );
};

export default AgreementForm;
