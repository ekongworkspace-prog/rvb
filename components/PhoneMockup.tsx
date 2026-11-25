"use client"
/**
 * PhoneMockup — a realistic phone frame rendering different RivalBet app screens.
 * screen: "bet" | "win" | "dashboard" | "notifications"
 */
export function PhoneMockup({ screen = "bet", className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[230px] h-[470px] rounded-[2.4rem] border-[9px] border-slate-800 bg-slate-950 shadow-2xl shadow-emerald-500/10 overflow-hidden ring-1 ring-slate-700/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-2xl z-20" />
        <div className="absolute inset-0 overflow-hidden">
          {screen === "bet" && <BetScreen />}
          {screen === "win" && <WinScreen />}
          {screen === "dashboard" && <DashboardScreen />}
          {screen === "notifications" && <NotificationsScreen />}
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex justify-between items-center px-4 pt-2.5 text-[8px] text-slate-400 font-medium">
      <span>9:41</span>
      <span className="flex gap-0.5">▮▮▮▮</span>
    </div>
  );
}

function TeamDot({ color , label }:{color:string, label:string}) {
  return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-bold text-white shrink-0" style={{ backgroundColor: color }}>
      {label}
    </div>
  );
}

function BetScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-950 text-slate-100">
      <StatusBar />
      <div className="px-3 py-2.5 flex items-center justify-between border-b border-slate-800">
        <span className="text-[11px] font-semibold">Live Bet</span>
        <span className="flex items-center gap-1 text-[8px] text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 67'
        </span>
      </div>
      <div className="px-3 py-3 flex-1">
        <div className="text-[8px] text-slate-500 mb-2.5">Premier League · Emirates</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TeamDot color="#dc2626" label="ARS" />
              <span className="text-[11px] font-medium">Arsenal</span>
            </div>
            <span className="text-base font-bold">2</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TeamDot color="#475569" label="TOT" />
              <span className="text-[11px] font-medium">Spurs</span>
            </div>
            <span className="text-base font-bold">1</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-[8px] text-slate-500 mb-1">
            <span>Pool split</span>
            <span>$240</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden flex">
            <div className="bg-emerald-500" style={{ width: "67%" }} />
            <div className="bg-rose-500" style={{ width: "33%" }} />
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2.5">
          <div className="text-[8px] text-emerald-400 mb-0.5">You backed Arsenal</div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-semibold">Stake $50</span>
            <span className="text-[10px] text-emerald-400 font-bold">Winning 2-1</span>
          </div>
        </div>
        <div className="mt-3 w-full py-2 rounded-lg bg-emerald-500 text-slate-950 text-[10px] font-bold text-center">Add to your side</div>
      </div>
    </div>
  );
}

function WinScreen() {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-emerald-950 to-slate-950 text-slate-100 items-center justify-center">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/40">
          <span className="text-2xl">🏆</span>
        </div>
        <div className="text-[10px] text-emerald-400 font-medium tracking-wide uppercase">Bet Settled</div>
        <div className="text-xl font-bold mt-1">You Won!</div>
        <div className="text-3xl font-bold text-emerald-400 mt-2">+$480</div>
        <div className="mt-5 w-full rounded-xl bg-slate-900/80 border border-slate-800 p-3">
          <div className="flex items-center justify-between text-[9px] text-slate-500 mb-1.5">
            <span>Arsenal vs Spurs</span>
            <span>FT</span>
          </div>
          <div className="flex justify-between text-[11px] font-semibold">
            <span>Arsenal 2</span>
            <span>1 Spurs</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between text-[9px]">
            <span className="text-slate-500">Stake $50</span>
            <span className="text-emerald-400 font-bold">+$430 profit</span>
          </div>
        </div>
        <div className="mt-3 text-[8px] text-slate-500">Winnings added to your balance</div>
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-950 text-slate-100">
      <StatusBar />
      <div className="px-3 py-2.5 border-b border-slate-800">
        <span className="text-[11px] font-semibold">My Bets</span>
      </div>
      <div className="px-3 py-3 flex-1">
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          <div className="rounded-lg bg-slate-900 border border-slate-800 p-2 text-center">
            <div className="text-sm font-bold text-emerald-400">12</div>
            <div className="text-[7px] text-slate-500">Won</div>
          </div>
          <div className="rounded-lg bg-slate-900 border border-slate-800 p-2 text-center">
            <div className="text-sm font-bold">$2.4k</div>
            <div className="text-[7px] text-slate-500">Volume</div>
          </div>
          <div className="rounded-lg bg-slate-900 border border-slate-800 p-2 text-center">
            <div className="text-sm font-bold text-emerald-400">64%</div>
            <div className="text-[7px] text-slate-500">Win rate</div>
          </div>
        </div>
        <div className="text-[8px] text-slate-500 mb-1.5 uppercase tracking-wide">Recent</div>
        <div className="space-y-1.5">
          {[
            { teams: "ARS vs TOT", res: "2-1", status: "won", amt: "+$480" },
            { teams: "BAR vs RMA", res: "1-3", status: "lost", amt: "-$50" },
            { teams: "MCI vs LIV", res: "Live", status: "live", amt: "$100" },
          ].map((b, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800 px-2 py-1.5">
              <div>
                <div className="text-[9px] font-medium">{b.teams}</div>
                <div className="text-[7px] text-slate-500">{b.res}</div>
              </div>
              <span className={`text-[9px] font-bold ${
                b.status === "won" ? "text-emerald-400" : b.status === "lost" ? "text-rose-400" : "text-amber-400"
              }`}>{b.amt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotificationsScreen() {
  const items = [
    { icon: "🔥", title: "Your bet is LIVE", body: "Arsenal vs Spurs just kicked off", time: "2m", accent: "text-amber-400" },
    { icon: "⚽", title: "GOAL! Arsenal scores", body: "You're winning 2-1 — keep stacking", time: "8m", accent: "text-emerald-400" },
    { icon: "⚔️", title: "Rival matched your stake", body: "A Spurs fan added $50 against you", time: "15m", accent: "text-rose-400" },
    { icon: "✅", title: "Bet settled — you won!", body: "+$480 added to your balance", time: "1h", accent: "text-emerald-400" },
  ];
  return (
    <div className="h-full flex flex-col bg-slate-950 text-slate-100">
      <StatusBar />
      <div className="px-3 py-2.5 border-b border-slate-800">
        <span className="text-[11px] font-semibold">Alerts</span>
      </div>
      <div className="px-3 py-2 flex-1 space-y-2">
        {items.map((n, i) => (
          <div key={i} className="rounded-lg bg-slate-900 border border-slate-800 p-2.5">
            <div className="flex items-start gap-2">
              <span className="text-sm leading-none">{n.icon}</span>
              <div className="flex-1 min-w-0">
                <div className={`text-[9px] font-semibold ${n.accent}`}>{n.title}</div>
                <div className="text-[8px] text-slate-400 mt-0.5">{n.body}</div>
              </div>
              <span className="text-[7px] text-slate-600">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneMockup;