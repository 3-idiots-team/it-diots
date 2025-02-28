import sharedTailwindconfig from '@it-diots/shared/tailwind.config';

import type { Config } from 'tailwindcss';

const config = {
  ...sharedTailwindconfig,
  content: ['./src/**/*.{ts,tsx}', '../../packages/shared/src/**/*.{ts,tsx}'],
} satisfies Config;

export default config;
