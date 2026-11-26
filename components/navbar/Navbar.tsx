"use client"
import { Button } from "@heroui/react";
import { CalendarDays, HomeIcon, LogOut, Plus, Swords, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useAuth } from "@/lib/AuthContext";

export default function Navbar() {
  //   const { isAuthenticated } = useAuth();
  const route = useRouter()


  const isAuthenticated = true
  const pathname = usePathname()
  const isAuthPage = pathname.startsWith('/authentication')

  const user = {
    full_name: "Ekong Emmanuel",
    email: "ekong@gmail.com"
  };

  const navItems = [
    { to: "/dashboard", label: "Rivalries", icon: HomeIcon },
    { to: "/matches", label: "Matches", icon: CalendarDays },
    { to: "/open-bet", label: "Open a Bet", icon: Plus },
    { to: "/dashboard/profile", label: "My Bets", icon: User },
  ];


  if (isAuthPage) return

  const handleLogout = async () => {
    route.push("/authentication/login");
  };



  return (
    <header className="sticky font-roboto top-0 z-50 border-b border-slate-800/60 bg-slate-950 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Swords className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <span className="font-bold text-white tracking-tight">RivalBet</span>
            <span className="block text-[10px] text-emerald-400 font-medium tracking-widest uppercase">Fan vs Fan</span>
          </div>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          {isAuthenticated ? (
            <>
              <nav className="hidden sm:flex items-center gap-1">
                {navItems.map((item) => {
                  const active = pathname.endsWith(item.to);
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      href={item.to}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${active ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white hover:bg-slate-900"
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2">
                {user && (
                  <span className="hidden sm:block text-sm text-slate-400 max-w-[140px] truncate">
                    {user.full_name || user.email}
                  </span>
                )}
                <Button
                  variant="ghost"

                  onClick={handleLogout}
                  className="text-slate-400 hover:text-white hover:bg-slate-900"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
              {/* <Link href="/dashboard">
              <Button className="bg-emerald-500 rounded-lg hover:bg-emerald-400 text-slate-950 font-semibold h-10 px-5">Open App</Button>
            </Link> */}
            </>

          ) : (
            <>
              <Link href="/authentication/login" className="hidden sm:block">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg h-10">Login</Button>
              </Link>
              <Link href="/authentication/register">
                <Button className="bg-emerald-500 rounded-lg hover:bg-emerald-400 text-slate-950 font-semibold h-10 px-5">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}