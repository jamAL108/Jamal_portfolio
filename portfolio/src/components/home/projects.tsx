import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'

const Projects = () => {
    const data = [
        {
            coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/veriface.png",
            name: "Veriface",
            width: 45,
            description: `A deepfake detection app which utilizes eye blinking, facial expressions,
           and lip syncing to identify deepfakes.`,
           link:"https://github.com/jamAL108/veriface_nextjs"
        }, {
            coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/vidchat.png",
            name: "VidchatAI",
            width: 45,
            description: `VidChat AI transforms YouTube videos into interactive experiences, allowing users to enter a link or query, suggest videos, and chat.`,
            link:"https://github.com/jamAL108/StudyHub"
        }, {
            coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/soulmind.png",
            name: "Soulmind",
            width: 95,
            description: `Fostering mental wellness with community, resources, chatbot support, calming music, and personalized YouTube integration.`,
            link:"https://github.com/jamAL108/soulmind"
        }, {
            coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/metatunes.png",
            name: "Meta-tunes",
            width: 28,
            description: `A music player app offering personalized playlists and public sharing, fostering a vibrant community of music enthusiasts worldwide.`,
            link:"https://github.com/jamAL108/MetaTunes"
        }
    ]
    return (
        <div className='w-full base:flex bl:hidden relative  flex-wrap py-8 gap-6'>
            {data.map((item, idx) => (
                <div className={`  ${idx % 2 == 0 ? 'rotate-[-1.5deg]' : "rotate-[1.5deg]"} hover:rotate-[0deg] duration-200 ease-in-out transform  base:w-full tablet:w-[290px] relative  px-5 py-5  dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 bg-cover  border rounded-xl flex flex-col gap-2`} key={idx}>
                    <Image src={item.coverImage} alt='wdeff' width={item.width} height={item.width} />
                    <h1 className='text-xl font-[660] mt-0.5'>{item.name}</h1>
                    <p className='text-muted-foreground text-sm'>{item.description}</p>
                    <div className='w-full flex items-center justify-end'>
                        <Link href={item.link}>
                            <ArrowRight className='w-6 h-6 text-main hover:translate-x-1' />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
