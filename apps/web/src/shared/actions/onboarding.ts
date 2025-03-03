'use server';

import { redirect } from 'next/navigation';

import { createClient } from '@it-diots/supabase/server';

const O_AUTH_PROVIDER = 'github';

export async function signInWithGithub() {
  const supabase = await createClient();

  const authorizeCallbackUrl = `${process.env.BASE_URL}/onboarding/auth`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: O_AUTH_PROVIDER,
    options: {
      redirectTo: authorizeCallbackUrl,
    },
  });

  if (error) {
    console.error('Github 로그인에 실패했습니다.');
  }

  if (!data.url) {
    throw new Error('Github 로그인 주소를 가져오는 데 실패했습니다.');
  }

  redirect(data.url);
}
