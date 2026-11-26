"use client"
import { Swords } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
   const pathname = usePathname()
    const isAuthPage =pathname.startsWith('/authentication') || pathname.startsWith('/dashboard') || pathname.startsWith("/matches")
  
    if (isAuthPage) return ""
  return (
    <footer className="border-t bg-emerald-500/10 border-slate-800/60 font-mono">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
            <Swords className="w-4 h-4 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="font-bold tracking-tight">RivalBet</span>
          <span className="text-xs text-slate-600 ml-2">Fan vs Fan betting</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/authentication/login" className="hover:text-white transition-colors">Login</Link>
          <Link href="/authentication/register" className="hover:text-white transition-colors">Sign up</Link>
        </div>
        <div className="text-xs text-slate-600">© 2026 RivalBet. Bet responsibly.</div>
      </div>
    </footer>
  );
}

export default Footer