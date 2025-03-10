import { PropsWithChildren } from 'react';

import { MainLayout } from '@it-diots/shared/widgets/layouts';

import { signOut } from '@/shared/actions';
import { getUser } from '@/shared/actions/auth';
import { ModeToggle } from '@/shared/ui';

export async function AuthLayout({ children }: PropsWithChildren) {
  const userInfo = await getUser();

  return (
    <MainLayout onSignOut={signOut} userInfo={userInfo}>
      {children}

      <ModeToggle />
    </MainLayout>
  );
}
