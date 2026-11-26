// Team color helpers and a small preset of popular clubs.

export const TEAM_PRESETS = [
  { name: "Chelsea", color: "#034694" },
  { name: "Manchester United", color: "#DA291C" },
  { name: "Manchester City", color: "#6CABDD" },
  { name: "Liverpool", color: "#C8102E" },
  { name: "Arsenal", color: "#EF0107" },
  { name: "Tottenham", color: "#132257" },
  { name: "Real Madrid", color: "#FEBE10" },
  { name: "Barcelona", color: "#A50044" },
  { name: "Bayern Munich", color: "#DC052D" },
  { name: "PSG", color: "#004170" },
  { name: "Juventus", color: "#000000" },
  { name: "AC Milan", color: "#FB090B" },
  { name: "Inter Milan", color: "#010E80" },
  { name: "Borussia Dortmund", color: "#FDE100" },
  { name: "Atletico Madrid", color: "#CB3524" },
  { name: "Newcastle", color: "#241F20" },
];

const FALLBACK_PALETTE = [
  "#0EA5E9", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#EF4444", "#6366F1", "#14B8A6",
];

function hashString(str:string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function teamColor(name:string) {
  if (!name) return FALLBACK_PALETTE[0];
  const preset = TEAM_PRESETS.find((t) => t.name.toLowerCase() === name.toLowerCase());
  if (preset) return preset.color;
  return FALLBACK_PALETTE[hashString(name) % FALLBACK_PALETTE.length];
}

export function teamInitials(name:string) {
  if (!name) return "?";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}