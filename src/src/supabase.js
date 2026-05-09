import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'วาง URL ตรงนี้'
const supabaseKey = 'วาง KEY ตรงนี้'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)