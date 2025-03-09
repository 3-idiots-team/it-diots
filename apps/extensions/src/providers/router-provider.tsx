import { CustomRouter } from '@/constants/custom-router';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { PropsWithChildren } from 'react';

const router = new CustomRouter();

export const RouterProvider = ({ children }: PropsWithChildren) => {
  const pathname = location.pathname;

  return (
    <PathnameContext value={pathname}>
      <AppRouterContext value={router}>{children}</AppRouterContext>
    </PathnameContext>
  );
};
