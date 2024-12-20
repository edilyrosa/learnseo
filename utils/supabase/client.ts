// src/utils/supabase/client.ts

import { createClient } from '@supabase/supabase-js';

// Supongo que tienes tus variables de entorno configuradas
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Crea el cliente de Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { supabase };
