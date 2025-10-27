import { supabase } from 'lib/supabase_client';


export async function fetchDownloadsCount() {
  const { data, error } = await supabase.from("website_info").select().single();
  if (error) {
    console.error('Supabase connection error:', error);
    throw new Error('Failed to connect to Supabase. Please check your configuration.');
  }
  return data?.downloads_count ?? null;
}
