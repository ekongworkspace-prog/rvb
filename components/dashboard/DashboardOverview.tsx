"use client"
import React, { useEffect, useState } from 'react'
import StatCard from '../StatCard'
import { Plus, Swords, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@heroui/react'

const DashboardOverview = () => {
    const [challenges, setChallenges] = useState([]);
  const [stakes, setStakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

   const user = {
    full_name: "Ekong Emmanuel",
    email: "ekong@gmail.com"
  };

    const loadData = async () => {
    setLoading(true);
    try {
      const [ch, st] = await Promise.all([
       [],[]
      ]);
      setChallenges(ch);
      setStakes(st);
    } finally {
      setLoading(false);
    }
  };

//   useEffect(() => {
//     loadData();
//     // const unsubCh = base44.entities.Challenge.subscribe(() => loadData());
//     // const unsubSt = base44.entities.Stake.subscribe(() => loadData());
//     // return () => {
//     //   unsubCh?.();
//     //   unsubSt?.();
//     // };
//   }, []);

//   const poolFor = (challengeId, side) =>
//     stakes.filter((s) => s.challenge_id === challengeId && s.side === side).reduce((sum, s) => sum + s.amount, 0);
//   const countFor = (challengeId) => stakes.filter((s) => s.challenge_id === challengeId).length;

//   const visible = challenges.filter((c) => {
//     if (filter === "open") return c.status === "open";
//     if (filter === "settled") return c.status === "settled";
//     return true;
//   });

//   const totalVolume = stakes.reduce((sum, s) => sum + s.amount, 0);
//   const openCount = challenges.filter((c) => c.status === "open").length;

  return (
     <div className="space-y-8 w-full mt-8 flex flex-col items-center ">
      {/* Hero */}
      <section className="relative  w-full overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 sm:p-12">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-5">
            <Swords className="w-3.5 h-3.5" /> Fan vs Fan betting
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
            Don't bet on random games.<br />
            <span className="text-emerald-400">Bet the rival fan.</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl text-base sm:text-lg">
            Open a challenge for your team, let the opposing fan match your stake, and stack with your own fans.
            One win, multiple wins — no accumulator lottery.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/bet/create">
              <Button className="bg-emerald-500 rounded-lg hover:bg-emerald-400 text-slate-950 font-semibold h-12 px-6">
                <Plus className="w-5 h-5 mr-1" /> Open a Bet
              </Button>
            </Link>
            <Link href="/dashboard/profile">
              <Button variant="outline" className="h-12 rounded-lg px-6 border-slate-700 bg-transparent hover:bg-slate-800 text-white">
                My Bets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid sm:grid-cols-3 grid-cols-1  w-full gap-3 sm:gap-4">
        <StatCard icon={<Swords className='text-emerald-400'/>} label="Open rivalries" value={"10"} />
        <StatCard icon={<TrendingUp className='text-emerald-400'/>} label="Total volume" value={`6`} />
        <StatCard icon={<Users className='text-emerald-400'/>} label="Stakes placed" value={ "2"} />
      </section>

       {/* Filters */}
      <div className="flex sm:items-center w-full sm:flex-row flex-col gap-2 justify-between">
        <h2 className="text-xl font-bold">Active rivalries</h2>
        <div className="flex gap-1 p-1 w-max rounded-xl bg-slate-900 border border-slate-800">
          {[
            { key: "all", label: "All" },
            { key: "open", label: "Open" },
            { key: "settled", label: "Settled" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === f.key ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

       {/* Grid */}
      {/* {loading ? (
        <div className="grid sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-56 rounded-2xl border border-slate-800 bg-slate-900/40 animate-pulse" />
          ))}
        </div>
      ) : visible.length === 0 ? (
        <div className="text-center py-20 rounded-2xl border border-dashed border-slate-800">
          <p className="text-slate-400 mb-4">No rivalries here yet.</p>
          <Link to="/create">
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold">
              Be the first to open one
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {visible.map((c) => (
            <ChallengeCard
              key={c.id}
              challenge={c}
              poolA={poolFor(c.id, "a")}
              poolB={poolFor(c.id, "b")}
              stakesCount={countFor(c.id)}
            />
          ))}
        </div>
      )} */}
      </div>
  )
}

export default DashboardOverview