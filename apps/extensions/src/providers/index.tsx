import { PropsWithChildren } from 'react';
import { RouterProvider } from './router-provider';

export function Providers({ children }: PropsWithChildren) {
  return <RouterProvider>{children}</RouterProvider>;
}
