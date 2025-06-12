import React from 'react';
import Logo from '@/app/login/components/Logo';
import SubText from '@/app/login/components/SubText';
import SocialLoginButtons from '@/components/molecules/SocialLoginButtons';

const LoginScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center  px-6 pt-[8.75rem]">
      <div className="w-full max-w-sm">
        <Logo />
        <div className="mt-[1.25rem]">
          <SubText />
        </div>
        <div className="mt-[4.375rem] space-y-[1.25rem]">
          <SocialLoginButtons />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
