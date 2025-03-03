'use client';

import { Button, Icon } from '@it-diots/shared/ui';

import { signInWithGithub } from '@/shared/actions/onboarding';

export function GithubLogin() {
  return (
    <Button variant="outline" onClick={signInWithGithub}>
      <Icon name="Github" className="mr-2" />
      Github
    </Button>
  );
}
