import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(
    url && url.startsWith('http') ? url : 'https://dummy.supabase.co',
    key && key.length > 0 ? key : 'dummy'
);
