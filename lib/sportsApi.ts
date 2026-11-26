// Real football data from TheSportsDB (free API, key "3").
// Provides team search, fixtures, live scores, past results, and club crests.

const BASE = "https://www.thesportsdb.com/api/v1/json/3";

async function getJSON(url:string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  const data = await res.json();
  return data;
}

/** Search a team by name. Returns the first match or null. */
export async function searchTeam(name:string) {
  if (!name || name.trim().length < 2) return null;
  const data = await getJSON(`${BASE}/searchteams.php?t=${encodeURIComponent(name.trim())}`);
  if (!data.teams || data.teams.length === 0) return null;
  const t = data.teams[0];
  return {
    id: t.idTeam,
    name: t.strTeam,
    badge: t.strTeamBadge,
    stadium: t.strStadium,
    league: t.strLeague,
    leagueId: t.idLeague,
    formed: t.intFormedYear,
  };
}

/** Upcoming fixtures for a single team. */
export async function getTeamNextEvents(teamId:string) {
  const data = await getJSON(`${BASE}/eventsnext.php?id=${teamId}`);
  return data.events || [];
}

/** All soccer events on a given day (YYYY-MM-DD). */
export async function getEventsByDay(dateStr:string) {
  const data = await getJSON(`${BASE}/eventsday.php?d=${dateStr}&s=Soccer`);
  return data.events || [];
}

/** Past events for a league. */
export async function getLeaguePastEvents(leagueId:string) {
  const data = await getJSON(`${BASE}/eventspastleague.php?id=${leagueId}`);
  return data.events || [];
}

/**
 * Find head-to-head fixtures where teamAName plays teamBName.
 * Searches team A, fetches its upcoming events, filters for the opponent.
 */
export async function findHeadToHead(teamAName:string, teamBName:string) {
  const teamA = await searchTeam(teamAName);
  if (!teamA) return { fixtures: [], teamA: null };
  const events = await getTeamNextEvents(teamA.id);
  const bLower = teamBName.trim().toLowerCase();
  const h2h = events.filter(
    (e:any) =>
      (e.strHomeTeam && e.strHomeTeam.toLowerCase().includes(bLower)) ||
      (e.strAwayTeam && e.strAwayTeam.toLowerCase().includes(bLower))
  );
  return { fixtures: h2h, teamA };
}

/**
 * Normalize a raw event into bet-side data (team_a = the challenger's team).
 * Determines which side (home/away) is team A.
 */
export function normalizeFixture(event:any, teamAName:string) {
  const aLower = teamAName.trim().toLowerCase();
  const aIsHome =
    event.strHomeTeam && event.strHomeTeam.toLowerCase().includes(aLower);
  return {
    fixture_id: event.idEvent,
    team_a_name: aIsHome ? event.strHomeTeam : event.strAwayTeam,
    team_b_name: aIsHome ? event.strAwayTeam : event.strHomeTeam,
    team_a_badge: aIsHome ? event.strHomeTeamBadge : event.strAwayTeamBadge,
    team_b_badge: aIsHome ? event.strAwayTeamBadge : event.strHomeTeamBadge,
    team_a_is_home: aIsHome,
    league_name: event.strLeague,
    league_badge: event.strLeagueBadge,
    game_date: event.strTimestamp,
    venue: event.strVenue,
    team_a_score: event.intHomeScore != null && aIsHome ? Number(event.intHomeScore) : event.intAwayScore != null && !aIsHome ? Number(event.intAwayScore) : 0,
    team_b_score: event.intHomeScore != null && !aIsHome ? Number(event.intHomeScore) : event.intAwayScore != null && aIsHome ? Number(event.intAwayScore) : 0,
    match_status: event.strStatus || "",
  };
}

/** Classify a match status into a phase. */
export function matchPhase(status:string) {
  if (!status) return "scheduled";
  const s = status.toUpperCase().trim();
  if (s === "NS" || s === "NOT STARTED" || s === "") return "scheduled";
  if (s === "FT" || s.includes("FINISHED") || s.includes("MATCH ENDED") || s === "AET" || s === "AP") return "finished";
  if (s === "P" || s.includes("POSTPONED")) return "postponed";
  // live: minute markers like "45'", "67'", or HT, 1H, 2H, ET
  if (s.includes("'") || s === "HT" || s === "1H" || s === "2H" || s === "ET" || s === "BT") return "live";
  return "scheduled";
}

/** Fetch the live status of a single event by id (via eventsnext / past lookup is limited;
 *  we use eventsday on the event's date and match by id). */
export async function getLiveEvent(fixtureId:string, dateStr:string) {
  if (!dateStr) return null;
  const day = dateStr.slice(0, 10);
  const events = await getEventsByDay(day);
  return events.find((e:any) => e.idEvent === fixtureId) || null;
}

// Major league IDs for the browse page
export const LEAGUES = {
  EPL: { id: "4328", name: "Premier League" },
  LALIGA: { id: "4335", name: "La Liga" },
  BUNDESLIGA: { id: "4331", name: "Bundesliga" },
  SERIE_A: { id: "4332", name: "Serie A" },
  LIGUE_1: { id: "4334", name: "Ligue 1" },
  UCL: { id: "4480", name: "Champions League" },
};