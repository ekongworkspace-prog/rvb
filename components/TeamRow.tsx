import TeamBadge from "./TeamBadge";


interface TeamRowProps{
    name:string; badge:string; score:string; won:boolean; phase:string
}
const TeamRow = ({ name, badge, score, won, phase }:TeamRowProps) => {
   return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5 min-w-0">
        <TeamBadge name={name} badge={badge} size="sm" />
        <span className={`text-sm truncate ${won ? "font-bold text-white" : "font-medium text-slate-300"}`}>{name}</span>
      </div>
      {score != null && (
        <span className={`text-lg font-bold tabular-nums ${won ? "text-white" : phase === "finished" ? "text-slate-500" : "text-slate-300"}`}>
          {score}
        </span>
      )}
    </div>
  );
}

export default TeamRow