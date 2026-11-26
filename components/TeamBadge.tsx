import { teamColor, teamInitials } from "@/lib/teams";

interface TeamBadgeProps{
  name:string; color?:string; badge:string; size:"sm" | "md" | "lg" | "xl"
}

const TeamBadge = ({ name, color, badge, size = "md" }:TeamBadgeProps) => {
 const bg = color || teamColor(name);
  const sizes = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-12 h-12 text-xs",
    lg: "w-16 h-16 text-sm",
    xl: "w-20 h-20 text-base",
  };
  if (badge) {
    return (
      <img
        src={badge}
        alt={name}
        className={`${sizes[size]} rounded-full object-contain shrink-0 shadow-md ring-2 ring-white/10 bg-white/5 p-0.5`}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    );
  }
  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center font-bold text-white shrink-0 shadow-md ring-2 ring-white/10`}
      style={{ backgroundColor: bg }}
    >
      {teamInitials(name)}
    </div>
  );

}

export default TeamBadge