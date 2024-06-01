import React from 'react'

const Thankyou = () => {
  return (
    <div className="w-[95%] max-w-[95%] relative px-5 py-5 pb-6 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 bg-cover border rounded-xl flex flex-col gap-5">
        <p className='text-muted-foreground text-sm flex items-center gap-3'><span className='text-2xl'>👋</span> <span>Thanks for visiting my site!</span></p>
        <h1 className='text-2xl font-[660]'>Glad to have you here.</h1>
    </div>
  )
}

export default Thankyou