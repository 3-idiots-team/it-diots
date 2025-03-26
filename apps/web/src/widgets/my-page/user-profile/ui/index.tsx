'use client';

import { Avatar, AvatarImage, Button } from '@it-diots/shared/ui';

import { UserMetric } from './user-metric';

import { LinkCopyButton } from '@/features/my-page/link-copy-button/ui';

export function UserProfile() {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="flex items-center justify-between">
        <p className="text-xl font-bold">Profile</p>

        <Button variant="secondary" size="sm" className="rounded-xl">
          프로필 수정
        </Button>
      </section>

      <section className="h-24 rounded-3xl bg-sky-50">
        <Avatar className="h-24 w-24 rounded-3xl">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </section>

      <section className="flex flex-col gap-3 text-sm">
        <p className="text-2xl font-bold">John Doe</p>

        <p>
          @johndoe <time className="text-gray-400">• Joined March 2024</time>
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex gap-2">
          <UserMetric number={58} label="Followers" />
          <UserMetric number={59} label="Following" />
        </div>

        <div className="flex gap-2">
          <UserMetric number={1024} label="Reputation" />
          <UserMetric number={1022} label="Views" />
          <UserMetric number={922} label="Upvotes" />
        </div>

        <div className="mt-4 text-gray-600">
          안녕하세요, 저는 John Doe입니다. 웹 개발과 소프트웨어 엔지니어링에 관심이 있습니다. 현재는
          Flexport에서 소프트웨어 엔지니어로 일하고 있습니다.
        </div>
      </section>

      <section>
        <p className="text-2xl font-bold">친구 초대하기</p>

        <p className="mt-2 text-gray-600">
          it-diots와 함께 개발 트렌드를 파악할 수 있도록, 링크를 공유하여 친구들을 초대하세요!
        </p>

        <LinkCopyButton link="https://it-diots.com" />
      </section>
    </div>
  );
}
