"use client"

import { Button } from "@heroui/react";
import { CalendarDays, CheckCheck, ChevronLeft, ChevronRight, Clock, Loader2, Radio } from "lucide-react";
import Link from "next/link";
import MatchCard from "./MatchCard";
import { useEffect, useMemo, useState } from "react";
import { getEventsByDay, matchPhase } from "@/lib/sportsApi";
import moment from "moment";

const Matches = () => {
    const TABS = [
        { key: "live", label: "Live", icon: Radio },
        { key: "upcoming", label: "Upcoming", icon: Clock },
        { key: "finished", label: "Past", icon: CheckCheck },
    ];

    const [date, setDate] = useState("");
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState("live");
    const [query, setQuery] = useState("");

      const filtered = useMemo(() => {
        let list = events;
        if (tab === "live") list = events.filter((e: any) => matchPhase(e.strStatus) === "live");
        if (tab === "upcoming") list = events.filter((e: any) => matchPhase(e.strStatus) === "scheduled");
        if (tab === "finished") list = events.filter((e: any) => matchPhase(e.strStatus) === "finished");
        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter(
                (e: any) =>
                    e.strHomeTeam?.toLowerCase().includes(q) ||
                    e.strAwayTeam?.toLowerCase().includes(q) ||
                    e.strLeague?.toLowerCase().includes(q)
            );
        }
        return list.sort((a: any, b: any) => (a.strTimestamp || "").localeCompare(b.strTimestamp || ""));
    }, [events, tab, query]);


    useEffect(() => {
    const currentDate = moment().format("YYYY-MM-DD");
    setDate(currentDate);
  }, []);
  
 
  
    const liveCount = events.filter((e: any) => matchPhase(e.strStatus) === "live").length;

    const shiftDate = (days: any) => {
        setDate(moment(date).add(days, "days").format("YYYY-MM-DD"));
    };

    useEffect(() => {
        setLoading(true);
        getEventsByDay(date)
            .then(setEvents)
            .catch(() => setEvents([]))
            .finally(() => setLoading(false));
    }, [date]);


    if (!date) {
    return null; // Or a loading skeleton
  }

  
    return (
        <section className=" flex justify-center  items-center">
            <div className="sm:w-285 w-full mx-auto px-4 sm:px-6 py-10 sm:py-16 ">
                <div className="space-y-6 w-full">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div>
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                <CalendarDays className="w-6 h-6 text-emerald-400" /> Match Centre
                            </h1>
                            <p className="text-sm text-slate-400">Live scores, fixtures & results — pick a match and open a rivalry bet.</p>
                        </div>
                        <Link href="/open-bet">
                            <Button className="bg-emerald-500 rounded-lg hover:bg-emerald-400 text-slate-950 font-semibold">
                                Open a Bet
                            </Button>
                        </Link>
                    </div>

                    {/* Date navigator */}
                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                        <Button onClick={() => shiftDate(-1)} className="text-slate-400 bg-transparent hover:text-emerald-400">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <div className="text-center">
                            <div className="font-semibold">{moment(date).format("dddd, MMM D")}</div>
                            {date === moment().format("YYYY-MM-DD") && (
                                <div className="text-xs text-emerald-400">Today</div>
                            )}
                        </div>
                        <Button onClick={() => shiftDate(1)} className="text-slate-400 bg-transparent hover:text-emerald-400">
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center gap-2 flex-wrap">
                        {TABS.map((t) => {
                            const Icon = t.icon;
                            const active = tab === t.key;
                            const count = t.key === "live" ? liveCount : null;
                            return (
                                <button
                                    key={t.key}
                                    onClick={() => setTab(t.key)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${active ? "bg-emerald-500 text-slate-950" : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {t.label}
                                    {count != null && count > 0 && (
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${active ? "bg-slate-950/20" : "bg-rose-500/20 text-rose-400"}`}>
                                            {count}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Search */}
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Filter by team or league…"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50"
                    />

                    {/* Grid */}
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-20 rounded-2xl border border-dashed border-slate-800">
                            <p className="text-slate-400">
                                {tab === "live" ? "No live matches right now." : tab === "upcoming" ? "No upcoming matches on this day." : "No finished matches on this day."}
                            </p>
                            <p className="text-sm text-slate-500 mt-1">Try another date.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {filtered.map((e: any) => (
                                <MatchCard key={e.idEvent} event={e} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Matches