/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SUPABASE_URL: "http://localhost:54321",
    SUPABASE_KEY: "supabase-key",
  },
};

module.exports = nextConfig;
