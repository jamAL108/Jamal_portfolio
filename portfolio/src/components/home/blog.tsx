'use client'
import React, { useEffect, useState } from 'react'
import clientConnectionWithSupabase from '@/lib/supabase'
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'

export default function Blog() {
    const [blogs, setBlogs] = useState<any>([])
    useEffect(() => {
        getBlogData()
    }, [])

    async function getBlogData() {
        console.log("MEOW")
        const supabase = clientConnectionWithSupabase()
        let { data: qwertymno_blogs, error } = await supabase
            .from('qwertymno_blogs')
            .select('*')
            .order('created_at', { ascending: false })
            .range(0, 2)

        let dataaa: any = []
        console.log(error)
        if (error === null) {
            setBlogs(qwertymno_blogs)
        }
    }
    return (
        <div className="w-full flex flex-col gap-2">
            {blogs.length === 0 && (
                <div className='w-full flex gap-5 my-1'>
                    <div className='w-[150px] flex justify-center items-center'>
                        <Skeleton className='w-[100px] h-[70px]' />
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <Skeleton className='w-[100px] h-3' />
                        <Skeleton className='w-[90%] h-6' />
                        <Skeleton className='w-[94%] h-2 mt-2' />
                        <Skeleton className='w-[88%] h-2' />
                        <Skeleton className='w-[48%] h-2' />
                    </div>
                </div>
            )}
            {blogs.length !== 0 && blogs.map((item: any, idx: any) => (
                <>
                    <div key={idx} className='w-full flex base:gap-4 bl:gap-8 bl:pl-4 py-5'>
                        <div className='base:w-[80px] bl:w-[100px] flex justify-center items-center'>
                            <img src={item.coverImage} alt='awsdf' className='base:w-[70px] base:h-[60px] bl:w-[100px] bl:h-[70px] rounded-lg' />
                        </div>
                        <div className='flex-1 relative flex pr-4 flex-col gap-2.5 justify-center text-xs'>
                            <div className='flex w-full gap-3 items-center px-1'>
                                <p className='text-main transform rotate-[90deg]'>|</p>
                                <div className='flex w-full gap-1 items-center text-muted-foreground'>
                                    <p>{formatDate(item.created_at)}</p>
                                    ·
                                    <p>5 MIN READ</p>
                                </div>
                            </div>
                            <h2 className='text-[1.15rem] leading-[25px] font-[660]'>{item.title}</h2>
                            <h2 className='text-sm text-muted-foreground'>{item.excerts}</h2>
                             <ArrowRight className='text-main h-5 w-5 transform duration-300 cursor-pointer ease-out hover:translate-x-[10px] absolute bottom-[-5px] right-[0px]'/> 
                        </div>
                    </div>
                    <Separator />
                </>
            ))}
            <h2 className='mt-[20px]'>See a list of all my Blogs <Link href={'https://qwertymno.vercel.app/'} className='text-main cursor-pointer hover:underline'>On my blogs page</Link></h2>
        </div>
    )
}


function formatDate(timestamp: string) {
    const date = new Date(timestamp);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}
