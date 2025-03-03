import { Inter } from 'next/font/google';

import { Toaster } from '@it-diots/shared/ui';
import { MainLayout } from '@it-diots/shared/widgets/layouts';
import { createClient } from '@it-diots/supabase/server';

import '@it-diots/shared/globals.css';

type Users = Database['public']['Tables']['users']['Row'];

import { Database } from '../../../../../packages/supabase/dist/types/supabase';

import { TOAST_PROPS } from '@/shared/constants';

const inter = Inter({ subsets: ['latin'] });

export async function FeedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();

  const { data: currentAuth } = await supabase.auth.getUser();

  console.log(currentAuth);

  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('id', currentAuth.user?.id)
    .single<Users>();

  console.log(user);

  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>

        <Toaster {...TOAST_PROPS} />
      </body>
    </html>
  );
}
