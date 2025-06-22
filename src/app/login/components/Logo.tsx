import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex justify-center mb-2">
      <Image src="/icons/logo.svg" alt="WALKIE 로고" className="h-14 w-auto" />
    </div>
  );
};

export default Logo;
