import { supabase } from '../../utils/supabaseCreate'

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res)
}