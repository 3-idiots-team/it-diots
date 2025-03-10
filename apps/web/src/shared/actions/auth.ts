'use server';

import { redirect } from 'next/navigation';

import { createClient } from '@it-diots/supabase/server';
import { OAuthUser } from '@it-diots/supabase/types';

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error('로그아웃에 실패했습니다.');
  }

  redirect('/onboarding');
}

export async function getUser(): Promise<OAuthUser> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('사용자를 찾을 수 없습니다.');
  }

  return {
    id: user.id,
    email: user.email || '',
    avatar_url: user.user_metadata.avatar_url,
    username: user.user_metadata.user_name,
  };
}
