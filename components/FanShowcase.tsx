import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FanShowcase = () => {
  return (
    <section className="relative overflow-hidden border-y border-slate-800/60">
      <div className="">
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <div className="absolute z-10 w-full h-full bg-black/60" />
          <Image
            src="/fans.png"
            alt="Football fans celebrating in the stadium"
            className="absolute inset-0 object-cover w-full h-full"
            // width={850}
            // height={500}
            fill
          />
        </div>
        {/* <div className="relative min-h-[320px] lg:min-h-[480px]">
          <Image
            src="https://www.gamingtoday.com/wp-content/uploads/shutterstock_1436843333.jpg"
            alt="Football fans celebrating in the stadium"
            className="absolute inset-0 object-cover w-full h-full"
            // width={850}
            // height={500}
         fill
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
        </div>
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <Image
            src="/fans.png"
            alt="Football fans celebrating in the stadium"
            className="absolute inset-0 object-cover w-full h-full"
            // width={850}
            // height={500}
         fill
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 to-transparent" />
        </div> */}
      </div>
      <div className="absolute inset-0 z-20 flex items-center flex-col justify-center px-4">
        <div className="text-center max-w-xl">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">Made for the fans,<br /><span className="text-emerald-400">by the fans.</span></h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">No bookmaker. No house edge. Just you, your rival, and ninety minutes.</p>
        </div>
        <div className="mt-8 flex sm:flex-row flex-col items-center gap-3">
          <Link href="/authentication/register">
            <Button className="bg-emerald-500 rounded-lg hover:bg-emerald-400 text-slate-950 font-semibold h-12 px-7 text-base">
              Get Started Free <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href="/authentication/login">
            <Button variant="outline" className="h-12 rounded-lg px-7 text-base border-slate-700 bg-transparent hover:bg-slate-900 text-white">
              I already have an account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FanShowcase