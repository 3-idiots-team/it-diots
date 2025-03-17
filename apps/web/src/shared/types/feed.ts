import { Database } from '@it-diots/supabase/types';

export type Feed = Database['public']['Tables']['feeds']['Row'] & {
  users: Database['public']['Tables']['users']['Row'];
};
