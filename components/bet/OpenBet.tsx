import React from 'react'
import BetForm from './BetForm'

const OpenBet = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Open a rivalry bet</h1>
        <p className="text-slate-400 mt-2">
          Back your team, set the stakes, and dare the opposing fan to match you. Your opening stake is the floor —
          no one can bet lower than what you put down.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <BetForm />
      </div>
    </div>
  )
}

export default OpenBet