import { createClient } from '@supabase/supabase-js'

// 修复重复认证头问题
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: 'implicit',
      autoRefreshToken: true,
      detectSessionInUrl: false,
      persistSession: true,
      storage: window.localStorage,
      storageKey: 'sb-auth-token',
      redirectTo: window.location.origin,
      disableMultiFactorAuth: true
    },
    global: {
      headers: {}
    }
  }
)
