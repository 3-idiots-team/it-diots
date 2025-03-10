'use client';

import { Button, Icon } from '@it-diots/shared/ui';

import { signInWithGithub } from '@/shared/actions/onboarding';

export function GithubLogin() {
  return (
    <Button variant="outline" onClick={signInWithGithub} className="w-80 h-14 text-lg">
      <Icon name="Github" className="mr-4" />
      Continue with Github <Icon name="ArrowRight" size="sm" className="ml-2" />
    </Button>
  );
}
