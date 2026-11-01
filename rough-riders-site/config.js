// Public settings for the site. These two Supabase values are safe to publish:
// the anon key only allows what the database's access rules allow.
window.RR_CONFIG = {
  supabaseUrl: "PASTE_SUPABASE_PROJECT_URL",
  supabaseAnonKey: "PASTE_SUPABASE_ANON_KEY",
  // Later, map your own web addresses to teams, e.g.
  // hostTeams: { "riders.example.com": "rough-riders", "team2.example.com": "team-two" },
  hostTeams: {}
};
