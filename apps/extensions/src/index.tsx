import { createRoot } from 'react-dom/client';

import { MainLayout } from '@it-diots/shared/widgets/layouts';

import App from './App';

import '@it-diots/shared/globals.css';
import { Providers } from './providers';

const VIRTUAL_USER = {
  thumbnail:
    'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  nickname: 'it-diots',
  email: 'itdiots@gmail.com',
};

/** FIXME: 로그아웃, 유저정보 추가 필요 */
const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(
  <Providers>
    <MainLayout
      onSignOut={() => alert('로그아웃')}
      userInfo={{
        avatar_url: VIRTUAL_USER.thumbnail,
        email: VIRTUAL_USER.email,
        id: '',
        username: VIRTUAL_USER.nickname,
      }}
    >
      <App />
    </MainLayout>
  </Providers>
);
