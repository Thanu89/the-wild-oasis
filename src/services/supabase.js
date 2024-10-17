import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gefunjpnyfyzmsslcpas.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZnVuanBueWZ5em1zc2xjcGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MjEzNjYsImV4cCI6MjA0NDQ5NzM2Nn0.ByI86qkUYTgTQip9wMuCQYTi2Db8nspyDp0d96zNN7I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
