import React from 'react'
import { BorderBeam } from '@/components/magicui/border-beam'
import Link from 'next/link'


const Thankyou = () => {
    return (
        <div className="w-[95%] max-w-[95%] relative px-5 py-5 pb-6 bg-radialCC rounded-xl flex flex-col gap-5">
            <p className='text-foreground text-sm font-[450] flex items-center gap-3'><span className='text-2xl'>✨</span> <span>Additionally, you can download my resume below.</span></p>
            <Link href={'https://drive.google.com/file/d/1Y4CymLYo9FFznW98Ud8Bku0gZUAzdhmZ/view?usp=drive_link'} className="hoverme border bg-[#020617] hover:bg-[#020617]/60 rounded-xl relative px-5 flex items-center justify-center gap-2 py-4 font-[450] text-[0.9rem] !cursor-pointer min-w-[230px]">
                Checkout my resume
                <BorderBeam size={100} duration={6} delay={6} />
            </Link>
        </div>  
    )
}

export default Thankyou