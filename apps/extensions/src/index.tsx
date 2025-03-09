import { createRoot } from 'react-dom/client';

import { MainLayout } from '@it-diots/shared/widgets/layouts';

import App from './App';

import '@it-diots/shared/globals.css';
import { Providers } from './providers';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(
  <Providers>
    <MainLayout>
      <App />
    </MainLayout>
  </Providers>
);
