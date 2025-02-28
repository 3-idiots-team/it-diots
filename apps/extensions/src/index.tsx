import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { createRoot } from 'react-dom/client';

import { MainLayout } from '@it-diots/shared/widgets/layouts';

import App from './App';
import CustomRouter from './custom-router';

import '@it-diots/shared/globals.css';

const router = new CustomRouter();

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(
  <AppRouterContext.Provider value={router}>
    <MainLayout>
      <App />
    </MainLayout>
  </AppRouterContext.Provider>
);
