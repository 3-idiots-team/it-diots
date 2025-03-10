import { PropsWithChildren } from 'react';

import { MainLayout } from '@it-diots/shared/widgets/layouts';

import { signOut } from '@/shared/actions';
import { getUser } from '@/shared/actions/auth';

export async function AuthLayout({ children }: PropsWithChildren) {
  const userInfo = await getUser();

  return (
    <MainLayout onSignOut={signOut} userInfo={userInfo}>
      {children}
    </MainLayout>
  );
}
