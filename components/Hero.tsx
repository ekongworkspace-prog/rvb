"use client"
import Link from "next/link";
import { Button } from '@heroui/react';
import { ArrowRight, Plus, Swords, TrendingUp, Users } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
    return (
    <section className="relative overflow-hidden font-mono">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -left-20 top-40 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-5">
            <Swords className="w-3.5 h-3.5" /> Fan vs Fan betting
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Don't bet on random games.<br />
            <span className="text-emerald-400">Bet the rival fan.</span>
          </h1>
          <p className="mt-5 text-slate-400 max-w-lg text-base sm:text-lg">
            Open a challenge for your team, let the opposing fan match your stake, and stack with your own fans.
            One win, multiple wins — no accumulator lottery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
            <PhoneMockup screen="bet" className="relative" />
          </div>
        </div>
      </div>
    </section>

    )
}

export default Hero