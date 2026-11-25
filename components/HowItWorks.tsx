import React from 'react'

const HowItWorks = () => {
  const steps = [
    { n: "01", title: "Open a bet", desc: "Choose your team and a real upcoming fixture. Set your stake and the minimum for challengers." },
    { n: "02", title: "Rival matches", desc: "The opposing fan backs their side. Both pools fill as fans from each side stack their stakes." },
    { n: "03", title: "Match kicks off", desc: "Follow the live score with our momentum bar. When the whistle blows, the winning side takes the pool." },
  ];
  return (
    <section className="bg-slate-900/30 border-y border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Three steps to a rivalry</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="text-5xl font-bold text-emerald-500/20 mb-3">{s.n}</div>
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks