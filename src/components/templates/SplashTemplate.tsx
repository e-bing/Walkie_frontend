'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SplashTemplate = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: 'var(--color-brand-primary)' }}
    >
      <Image src="/icons/mainlogo.svg" alt="WALKIE 로고" width={180} height={180} priority />
    </div>
  );
};

export default SplashTemplate;
