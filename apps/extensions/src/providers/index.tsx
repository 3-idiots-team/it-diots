import { PropsWithChildren } from 'react';
import { RouterProvider } from './router-provider';

export const Providers = ({ children }: PropsWithChildren) => {
  return <RouterProvider>{children}</RouterProvider>;
};
