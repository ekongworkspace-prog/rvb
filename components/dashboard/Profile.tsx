"use client"
import { Button } from '@heroui/react';
import { Loader2, Plus, TrendingDown, TrendingUp, Trophy, Wallet } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import TeamBadge from '../TeamBadge';
import moment from 'moment';

const Profile = () => {
    const user = {
        id: "hddgdhdhd",
        full_name: "Ekong Emmanuel",
        email: "test@gmail.com"
    };
    const [stakes, setStakes] = useState([]);
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const [myStakes, myChallenges] = await Promise.all([
                    // base44.entities.Stake.list("-created_date", 500),
                    // base44.entities.Challenge.list("-created_date", 100),
                    [],[]
                ]);
                setStakes(myStakes.filter((s: any) => s.created_by_id === user?.id));
                setChallenges(myChallenges.filter((c: any) => c.created_by_id === user?.id));
            } finally {
                setLoading(false);
            }
        })();
    }, [user?.id]);

    if (loading) {
        return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-emerald-400" /></div>;
    }

    const totalStaked = stakes.reduce((s: any, x: any) => s + x.amount, 0);
    const won = stakes.filter((s: any) => s.status === "won");
    const lost = stakes.filter((s: any) => s.status === "lost");
    const wonAmount = won.reduce((s, x: any) => s + x.amount, 0);
    const lostAmount = lost.reduce((s, x: any) => s + x.amount, 0);
    const net = wonAmount - lostAmount;

    const challengeMap = Object.fromEntries(challenges.map((c: any) => [c.id, c]));
    // Also need challenges I staked on (not just ones I created)
    const stakedChallengeIds = [...new Set(stakes.map((s: any) => s.challenge_id))];

    return (
        <div className="space-y-8 sm:w-285 w-full mx-auto px-4 sm:px-0 py-10 sm:py-16">
            {/* Profile header */}
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                    <div className="sm:w-16 sm:h-16 w-12 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center sm:text-2xl text-xl font-bold text-slate-950">
                        {(user?.full_name || user?.email || "F")[0].toUpperCase()} 
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{user?.full_name || "Fan"}</h1>
                        <p className="text-slate-400">{user?.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                    <Stat icon={<Wallet />} label="Total staked" value={`$${totalStaked.toLocaleString()}`} />
                    <Stat icon={<Trophy />} label="Wins" value={`${won.length}`} accent="text-emerald-400" />
                    <Stat icon={<TrendingDown />} label="Losses" value={`${lost.length}`} accent="text-rose-400" />
                    <Stat
                        icon={net >= 0 ? <TrendingUp /> : <TrendingDown />}
                        label="Net P/L"
                        value={`${net >= 0 ? "+" : "-"}$${Math.abs(net).toLocaleString()}`}
                        accent={net >= 0 ? "text-emerald-400" : "text-rose-400"}
                    />
                </div>
            </div>

            {/* My challenges */}
            <section>
                <h2 className="text-xl font-bold mb-4">Challenges you opened</h2>
                {challenges.length === 0 ? (
                    <EmptyState text="You haven't opened a rivalry yet." cta  />
                ) : (
                    <div className="space-y-3">
                        {challenges.map((c:any) => (
                            <Link key={c.id} href={`/challenge/${c.id}`} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/40 p-4 transition-colors">
                                <div className="flex items-center gap-3">
                                    <TeamBadge name={c.team_a_name} color={c.team_a_color} badge={c.team_a_badge} size="sm" />
                                    <span className="text-slate-500 text-xs">vs</span>
                                    <TeamBadge name={c.team_b_name} color={c.team_b_color} badge={c.team_b_badge} size="sm" />
                                </div>
                                <div className="text-right">
                                    <div className="font-medium text-sm">{c.title}</div>
                                    <div className="text-xs text-slate-500">{c.status} · {moment(c.created_date).fromNow()}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* My stakes */}
            <section>
                <h2 className="text-xl font-bold mb-4">Your stakes</h2>
                {stakes.length === 0 ? (
                    <EmptyState text="No stakes placed yet. Find a rivalry and back your team." />
                ) : (
                    <div className="space-y-2">
                        {stakes.map((s:any) => {
                            const ch = challengeMap[s.challenge_id];
                            const teamName = ch ? (s.side === "a" ? ch.team_a_name : ch.team_b_name) : "Unknown";
                            return (
                                <div key={s.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                    <div className="flex items-center gap-3 min-w-0">
                                        {ch && (s.side === "a" ? ch.team_a_badge : ch.team_b_badge) ? (
                                            <TeamBadge name={ch ? (s.side === "a" ? ch.team_a_name : ch.team_b_name) : ""} badge={ch ? (s.side === "a" ? ch.team_a_badge : ch.team_b_badge) : null} color={ch ? (s.side === "a" ? ch.team_a_color : ch.team_b_color) : "#475569"} size="sm" />
                                        ) : (
                                            <div className="w-2 h-10 rounded-full" style={{ backgroundColor: ch ? (s.side === "a" ? ch.team_a_color : ch.team_b_color) : "#475569" }} />
                                        )}
                                        <div className="min-w-0">
                                            <div className="font-medium truncate">{ch ? ch.title : "Challenge"}</div>
                                            <div className="text-xs text-slate-500">Backed {teamName} · {moment(s.created_date).fromNow()}</div>
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="font-semibold">${s.amount.toLocaleString()}</div>
                                        <StatusBadge status={s.status} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    )
}

export default Profile


const Stat = ({ icon, label, value, accent = "text-white" }: { icon: React.ReactElement, label: string, value: string, accent?: string }) => {
    return (
        <div className="rounded-2xl bg-slate-950/50 border border-slate-800 p-4">
            {icon}
            {/* <Icon className="w-4 h-4 text-slate-500 mb-2" /> */}
            <div className={`text-xl font-bold ${accent}`}>{value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
        </div>
    );
}

const StatusBadge = ({ status }: { status: string }) => {
    const styles: Record<string, string> = {
        active: "bg-slate-700 text-slate-300",
        won: "bg-emerald-500/15 text-emerald-400",
        lost: "bg-rose-500/15 text-rose-400",
        refunded: "bg-slate-700 text-slate-400",
    };
    return <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase ${styles[status] || styles.active}`}>{status}</span>;
}

const EmptyState = ({ text, cta }: { text: string, cta?: boolean }) => {
    return (
        <div className="text-center py-12 rounded-2xl border border-dashed border-slate-800">
            <p className="text-slate-400 mb-4">{text}</p>
            {cta && (
                <Link href="/open-bet">
                    <Button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold">
                        <Plus className="w-4 h-4 mr-1" /> Open a Bet
                    </Button>
                </Link>
            )}
        </div>
    );
}