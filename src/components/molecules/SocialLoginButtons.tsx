'use client';

import React from 'react';
import SocialButton from '@/app/login/components/SocialButton';
import { API_URL } from '@/constants/api';

const SocialLoginButtons = () => {
  const handleLogin = (provider: 'kakao' | 'naver' | 'google') => {
    window.location.href = `${API_URL}/oauth2/authorization/${provider}`;
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <SocialButton
        icon={<img src="/icons/kakao.svg" alt="카카오" className="w-5 h-5" />}
        text="카카오 로그인"
        bgColor="bg-[#FEE500]"
        textColor="text-black"
        onClick={() => handleLogin('kakao')}
      />
      <SocialButton
        icon={<img src="/icons/naver.svg" alt="네이버" className="w-5 h-5" />}
        text="네이버 로그인"
        bgColor="bg-[#03C75A]"
        textColor="text-white"
        onClick={() => handleLogin('naver')}
      />
      <SocialButton
        icon={<img src="/icons/google.svg" alt="구글" className="w-5 h-5" />}
        text="구글로 로그인"
        bgColor="bg-white"
        textColor="text-black"
        border
        onClick={() => handleLogin('google')}
      />
    </div>
  );
};

export default SocialLoginButtons;
