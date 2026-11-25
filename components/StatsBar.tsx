import React from 'react'

const StatsBar = () => {
 const stats = [
    { value: "$2M+", label: "Staked by fans" },
    { value: "15k", label: "Rivalries settled" },
    { value: "8k+", label: "Active fans" },
    { value: "64%", label: "Avg. win rate" },
  ];
  return (
    <section className="border-y border-slate-800/60 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{s.value}</div>
            <div className="text-xs text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar