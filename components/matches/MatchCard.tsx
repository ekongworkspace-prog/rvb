import { matchPhase } from "@/lib/sportsApi";
import moment from "moment";
import TeamRow from "../TeamRow";
import Image from "next/image";

const PHASE_STYLES = {
  live: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  scheduled: "bg-slate-700/50 text-slate-400 border-slate-600/50",
  finished: "bg-slate-800 text-slate-500 border-slate-700",
  postponed: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

const MatchCard = ({ event }:{ event :any}) => {
     const phase = matchPhase(event.strStatus);
  const homeScore = event.intHomeScore;
  const awayScore = event.intAwayScore;
  const hasScore = homeScore != null && awayScore != null;
  const homeWon = hasScore && Number(homeScore) > Number(awayScore);
  const awayWon = hasScore && Number(awayScore) > Number(homeScore);


   const statusLabel = () => {
    if (phase === "live") return event.strStatus || "LIVE";
    if (phase === "finished") return "FT";
    if (phase === "postponed") return "PPD";
    return moment(event.strTimestamp).format("HH:mm");
  };
  return (
     <div className="rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-colors p-4">
      {/* League + status */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 min-w-0">
          {event.strLeagueBadge && (
            <Image width={100} height={100} src={event.strLeagueBadge} alt="" className="w-5 h-5 object-contain shrink-0" />
          )}
          <span className="text-[11px] text-slate-500 truncate">{event.strLeague}</span>
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wide shrink-0 ${PHASE_STYLES[phase]}`}>
          {phase === "live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 mr-1 animate-pulse" />}
          {statusLabel()}
        </span>
      </div>

      {/* Teams + score */}
      <div className="space-y-2">
        <TeamRow
          name={event.strHomeTeam}
          badge={event.strHomeTeamBadge}
          score={hasScore ? homeScore : null}
          won={homeWon}
          phase={phase}
        />
        <TeamRow
          name={event.strAwayTeam}
          badge={event.strAwayTeamBadge}
          score={hasScore ? awayScore : null}
          won={awayWon}
          phase={phase}
        />
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-800">
        <span className="text-[11px] text-slate-600">
          {moment(event.strTimestamp).format("ddd, MMM D · HH:mm")}
        </span>
        {event.strVenue && <span className="text-[11px] text-slate-600 truncate ml-2">{event.strVenue}</span>}
      </div>
    </div>
  )
}

export default MatchCard