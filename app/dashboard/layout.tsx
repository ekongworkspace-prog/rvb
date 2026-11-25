import React from 'react'

const Layout = ({ children }: LayoutProps<"/">) => {
  return (
        <div className='bg-slate-950 flex items-center justify-center'>
    <div className='sm:w-272.5'>
            
            {children}</div>
            </div>
  )
}

export default Layout