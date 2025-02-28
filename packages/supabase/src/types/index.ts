/** 추후 Supabase의 OAuth 기능 추가시 사용  */
export { type Provider } from '@supabase/supabase-js';

import { Database } from './supabase';

/** supabase.ts 사용 예제 */
type TodoInfo = Database['public']['Tables']['todo-temp']['Row'];

export type { TodoInfo };
