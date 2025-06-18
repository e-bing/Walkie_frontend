'use client';

import React from 'react';
import Logo from '@/app/login/components/Logo';
import SubText from '@/app/login/components/SubText';
import SocialLoginButtons from '@/components/molecules/SocialLoginButtons';

const LoginScreen: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen px-6 pt-40 pb-20">
      <div className="flex flex-col items-center space-y-3">
        <Logo />
        <SubText />
      </div>
      <div className="w-full max-w-sm mx-auto space-y-4">
        <SocialLoginButtons />
      </div>
    </div>
  );
};

export default LoginScreen;
