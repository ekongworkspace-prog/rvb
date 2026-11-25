import { Swords, Trophy, Users } from 'lucide-react';
import React from 'react'

const Features = () => {
  const features = [
    { icon: Swords, title: "Challenge a rival", desc: "Pick your team, set the stake floor, and dare the opposing fan to back their side. If they don't match, the bet never happens." },
    { icon: Users, title: "Stack with your fans", desc: "Your fellow fans pile onto your side of the pool. More believers, bigger payout when your team delivers." },
    { icon: Trophy, title: "Win on merit", desc: "No accumulators, no lottery odds. One match, head-to-head — your team wins, your side of the pool wins." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Built for real rivalries</h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">Every feature is designed around one thing: putting your money where your team is.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-emerald-500/30 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
              <f.icon className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features