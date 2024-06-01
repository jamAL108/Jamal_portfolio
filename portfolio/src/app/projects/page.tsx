import React from 'react'
import Boiler from '@/components/step'
import Thankyou from '@/components/thankyou'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';


const Page = () => {

  const data = [
    {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/veriface.png",
      name: "Veriface",
      width: 45,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
       and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/vidchat.png",
      name: "VidchatAI",
      width: 33.1,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/soulmind.png",
      name: "Soulmind",
      width: 95,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/metatunes.png",
      name: "Meta-tunes",
      width: 28,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    },
        {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/veriface.png",
      name: "Veriface",
      width: 45,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
       and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/vidchat.png",
      name: "VidchatAI",
      width: 33.1,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/soulmind.png",
      name: "Soulmind",
      width: 95,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/metatunes.png",
      name: "Meta-tunes",
      width: 28,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    },    {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/veriface.png",
      name: "Veriface",
      width: 45,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
       and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/vidchat.png",
      name: "VidchatAI",
      width: 33.1,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/soulmind.png",
      name: "Soulmind",
      width: 95,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/metatunes.png",
      name: "Meta-tunes",
      width: 28,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
        and lip syncing to identify deepfakes.`
    }
  ]

  return (
    <div className="bl:ml-[100px] !overflow-x-hidden !overflow-y-auto  base:w-full bl:w-[calc(100%_-_120px)] flex base:flex-col bl:flex-row ">
      <div className="base:w-full bl:w-[72%] flex flex-col items-center bl:px-8   overflow-x-hidden">
        <div className='w-full px-6 mt-[7rem]'>
          <h1 className='text-5xl font-[660]'>My Projects</h1>
        </div>

        <div className='base:w-[90%] bl:w-full bl:px-5 flex relative flex-wrap   mt-6 py-8 gap-6'>
          {data.map((item, idx) => (
            <div className={` ${idx % 2 == 0 ? 'rotate-[-1.5deg]' : "rotate-[1.5deg]"}  hover:rotate-[0deg] duration-200 ease-in-out transform  base:w-full tablet:w-[292px] bl:min-w-[340px] bl:w-[340px]   relative  px-5 py-5  dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 bg-cover border  rounded-xl flex flex-col gap-2`} key={idx}>
              <Image src={item.coverImage} alt='wdeff' width={item.width} height={item.width} />
              <h1 className='text-xl font-[660] mt-0.5'>{item.name}</h1>
              <p className='text-muted-foreground text-sm'>{item.description}</p>
              <div className='w-full flex items-center justify-end'>
                <ArrowRight className='w-6 h-6 text-main hover:translate-x-1 cursor-pointer' />
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='base:w-full overflow-hidden pb-[100px] bl:min-w-[28%] bl:max-w-[28%] bl:w-[28%] items-center flex flex-col gap-10 
      base:pt-[6rem] bl:pt-40'>
        <Boiler />
        <Thankyou />
      </div>
    </div>
  )
}

export default Page