'use client';
import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { env } from '@/shared/lib';

import { LoginForm } from '@/features/session/login';

export function LoginPage() {
  const router = useRouter();
  const pathname = usePathname();

  const onComplete = useCallback(() => {
    router.push(pathname ?? '/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Login page</h1>
      <p>
        Use {env.VITE_API_USER_EMAIL} / {env.VITE_API_USER_PASSWORD} as test
        user credentials
      </p>
      <LoginForm onComplete={onComplete} />
    </div>
  );
}
