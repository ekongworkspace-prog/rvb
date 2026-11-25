import DashboardOverview from '@/components/dashboard/DashboardOverview'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex font-mono justify-center items-center sm:p-0 p-4  bg-slate-950 text-slate-100'>
        <DashboardOverview />
    </div>
  )
}

export default page