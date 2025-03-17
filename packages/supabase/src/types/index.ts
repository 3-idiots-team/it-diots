import { Database } from './supabase';

export { type Provider } from '@supabase/supabase-js';

export type OAuthUser = Database['public']['Tables']['users']['Row'];
export { type Database, type Tables } from './supabase';
