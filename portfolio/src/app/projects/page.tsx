import React from 'react'
import Boiler from '@/components/step'
import Thankyou from '@/components/thankyou'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';
import ResumeComp from '@/components/resume'
import Link from 'next/link'

const Page = () => {

  const data = [
    {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/veriface.png",
      name: "Veriface",
      width: 45,
      description: `A deepfake detection app which utilizes eye blinking, facial expressions,
       and lip syncing to identify deepfakes with 88% accuracy.`,
      link: "https://github.com/jamAL108/VeriFace"
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/vidchat.png",
      name: "VidchatAI",
      width: 45,
      description: `VidChat AI transforms YouTube videos into interactive experiences, allowing users to enter a link or query, suggest videos, and chat.`,
      link: "https://github.com/jamAL108/study-hub"
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/soulmind.png",
      name: "Soulmind",
      width: 95,
      description: `Fostering mental wellness with community, resources, chatbot support, calming music, and personalized YouTube integration.`,
      link: "https://github.com/jamAL108/soulmind"
    }, {
      coverImage: "https://jvpehndoafryctlriuse.supabase.co/storage/v1/object/public/qwertymno/metatunes.png",
      name: "Meta-tunes",
      width: 28,
      description: `A music player app offering personalized playlists and public sharing, fostering a vibrant community of music enthusiasts worldwide.`,
      link: "https://github.com/jamAL108/MetaTunes"
    }, {
      coverImage: "/images/neurobhojan.png",
      name: "Neuro Bhojan",
      width: 45,
      description: `A platform that combats hunger and food waste by enabling users and restaurants to easily donate food without commuting to NGOs or other locations.`,
      link: "https://github.com/jamAL108/HackThisFall"
    }, {
      coverImage: "/images/cat.png",
      name: "Student Result Management",
      width: 42,
      description: `A comprehensive system for managing student marksheets and attendance, with advanced admin controls, faculty management, and automated result generation.`,
      link: "https://github.com/jamAL108/mark-evaluation"
    },
    {
      coverImage: "/images/cat.png",
      name: "N note",
      width: 42,
      description: `Simplify your life with efficient note-taking, vibrant backgrounds, 20+ font options, pinning, archiving, and 28-day access to deleted notes. Built with React, Redux, Node, and MongoDB.`,
      link: "https://github.com/jamAL108/nNote"
    },
    {
      coverImage: "/images/cat.png",
      name: "Facial Attendance system",
      width: 42,
      description: `Attendance system for students using face detection , where student's face is stored in database and during lecture teacher can record attendane which will be marked in database`,
      link: "https://github.com/jamAL108/attendance_FaceDetection"
    },
    {
      coverImage: "/images/cat.png",
      name: "Vehicle speed detection",
      width: 42,
      description: `A Python app , which will detect vechiles speeds , total vehicle in and out through a certain point using openCV algorithm and deep learning algorithm.`,
      link: "https://github.com/jamAL108/vehicle-speed-detection"
    },
    {
      coverImage: "/images/cat.png",
      name: "College No Dues Form",
      width: 42,
      description: `A MERN Stack app to streamline the process of no dues appliucation form through online . It is associated with my college and is currently operational on the college server.`,
      link: "https://github.com/jamAL108/noDuesForm_React"
    }
  ]

  return (
    <div className="bl:ml-[100px] !overflow-x-hidden !overflow-y-auto  base:w-full bl:w-[calc(100%_-_120px)] flex base:flex-col bl:flex-row ">
      <div className="base:w-full bl:w-[72%] bl:pb-[100px] flex flex-col items-center bl:px-8   overflow-x-hidden">
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
                <Link href={item.link}>
                  <ArrowRight className='w-6 h-6 text-main hover:translate-x-1 cursor-pointer' />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className='text-md w-full text-left px-5'>And Many unfinished projects <span className='text-2xl'>😂</span></h2>

      </div>

      <div className='base:w-full overflow-hidden pb-[100px] bl:min-w-[28%] bl:max-w-[28%] bl:w-[28%] items-center flex flex-col gap-10 
      base:pt-[6rem] bl:pt-40'>
        <Boiler />
        <Thankyou />
        <ResumeComp />
      </div>
    </div>
  )
}

export default Page
