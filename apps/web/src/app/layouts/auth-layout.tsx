import { PropsWithChildren } from 'react';

import { MainLayout } from '@it-diots/shared/widgets/layouts';

export function AuthLayout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
