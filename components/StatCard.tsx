"use client"

interface StatCardProps {
  icon: React.ReactElement;
  value: string;
  label: string;
}
const StatCard = ({icon, value, label}:StatCardProps) => {
  return (
    <div className="rounded-2xl w-full border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
      {icon}
      {/* <Icon className="w-5 h-5 text-emerald-400 mb-2" /> */}
      <div className="text-xl sm:text-2xl font-bold">{value}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
  )
}

export default StatCard