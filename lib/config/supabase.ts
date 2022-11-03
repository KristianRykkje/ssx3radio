import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://uiocwfaqmetqkvbvmptu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpb2N3ZmFxbWV0cWt2YnZtcHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcwMjcwMjksImV4cCI6MTk4MjYwMzAyOX0.9FA5Q4gVqdjPDeW9Q9Q4u7IfJEesoA75zGm7GVJM5wY"
);
