'use client';

import React from 'react';
import Logo from '@/app/login/components/Logo';
import SubText from '@/app/login/components/SubText';
import SocialLoginButtons from '@/components/molecules/SocialLoginButtons';

const LoginScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col items-center space-y-6 py-8 sm:py-12 transform -translate-y-8 sm:-translate-y-4">
        <Logo />
        <SubText />
        <div className="w-full space-y-4">
          <SocialLoginButtons />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
