'use client';

import { useState } from 'react';
import Image from 'next/image';
import AgreementForm from '@/components/organisms/AgreementForm';
import Button from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';
const TermsAgreementScreen = () => {
  // 전체동의 상태
  const [allChecked, setAllChecked] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col max-w-sm mx-auto px-6 pt-25 pb-[env(safe-area-inset-bottom)]">
      <div className="flex-1 overflow-y-auto">
        <div className="mb-8">
          <Image
            src="/icons/walkie-logo-character.svg"
            alt="walkie 캐릭터"
            width={72}
            height={72}
          />
        </div>
        <div className="text-xl font-semibold leading-snug text-black mb-20">
          워키 이용을 위해
          <br />
          약관에 동의해주세요
        </div>

        {/* 전체동의 여부를 setAllChecked에 전달 */}
        <AgreementForm onAllChecked={setAllChecked} />
      </div>

      <div className="mt-9 mb-10">
        {/* 임시 버튼 */}
        <Button
          onClick={() => router.push('/signup/profile')}
          disabled={!allChecked}
          variant={allChecked ? 'primary' : 'secondary'}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default TermsAgreementScreen;
