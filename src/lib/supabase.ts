import { createClient } from "@supabase/supabase-js";

const getUrl = () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    return url && url.length > 0 ? url : "https://dummy.supabase.co";
};
const getKey = () => {
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    return key && key.length > 0 ? key : "dummyKey";
};

const supabaseUrl = getUrl();
const supabaseAnonKey = getKey();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
