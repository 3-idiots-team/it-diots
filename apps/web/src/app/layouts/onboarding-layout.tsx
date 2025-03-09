import '@it-diots/shared/globals.css';

import { ModeToggle } from '@/shared/ui';

export function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-screen">{children}</div>
      <ModeToggle />
    </>
  );
}
