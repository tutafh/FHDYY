'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Suspense } from 'react';

function LoginPageClient() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center text-gray-500 dark:text-gray-400">
        正在跳转，请稍候...
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageClient />
    </Suspense>
  );
}
