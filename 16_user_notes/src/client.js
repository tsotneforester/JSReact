import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mtscrzddjsebhfojjyls.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10c2NyemRkanNlYmhmb2pqeWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NTcyODQsImV4cCI6MjAyOTUzMzI4NH0.K_aj6VNMjD7mJdkK9srIPfBmDCf11xbJCw_4ml2Rej8";

export const supabase = createClient(supabaseUrl, supabaseKey);
