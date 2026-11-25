import React from 'react'
import PhoneMockup from './PhoneMockup';

const MockupGallery = () => {
    const screens = [
    { screen: "bet", title: "Live Bets", desc: "Track every challenge with real-time scores and pool splits." },
    { screen: "win", title: "Instant Wins", desc: "Get paid the moment the match settles. No waiting, no paperwork." },
    { screen: "dashboard", title: "Your Dashboard", desc: "See your win rate, volume, and full bet history at a glance." },
    { screen: "notifications", title: "Smart Alerts", desc: "Goals, kicks-off, rivals matching — never miss a moment." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Everything in your pocket</h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">A full betting experience designed mobile-first — because rivalries don't wait.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {screens.map((s) => (
          <div key={s.screen} className="flex flex-col items-center text-center max-w-[230px]">
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full" />
              <PhoneMockup screen={s.screen} className="relative scale-90" />
            </div>
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MockupGallery