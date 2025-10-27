import { createClient } from '@supabase/supabase-js'

const url = "https://fuxxsmvgtdebmqzdyeyx.supabase.co"
const serviceRoleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1eHhzbXZndGRlYm1xemR5ZXl4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTIzNjE3MiwiZXhwIjoyMDc2ODEyMTcyfQ.nw3UJ48z4-gKxMog9Lw3Ws63DhAEghnltJ5UENyp4Tc"

if (!url || !serviceRoleKey) throw new Error('Missing server SUPABASE env vars')

export const supabase = createClient(url, serviceRoleKey)
