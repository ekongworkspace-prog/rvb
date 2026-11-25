import { Button } from '@heroui/react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-10 sm:p-16 text-center">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">Ready to back your team?</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">Join thousands of fans staking head-to-head. Your first rivalry is 60 seconds away.</p>
          <Link href="/authentication/register" className="sm:inline-block mt-8 hidden">
            <Button className="bg-emerald-500 rounded-lg hover:bg-emerald-400 text-slate-950 font-semibold h-12 px-8 text-base">
              <Plus className="w-5 h-5 mr-1" /> Start your first rivalry
            </Button>
          </Link>
          <Link href="/authentication/register" className="inline-block mt-8 sm:hidden">
            <Button className="bg-emerald-500 rounded-lg hover:bg-emerald-400 text-slate-950 font-semibold h-12 px-8 text-base">
              <Plus className="w-5 h-5 mr-1" /> Start rivalry
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA