import React from 'react'
import Image from 'next/image'
const Page = () => {
  const stackItems = [
    "React",
    "Typescript",
    "Java",
    "Javascript",
    "NextJS",
    "React Native",
    "TailwindCSS",
    "Python",
    "ExpressJS",
    "Tensorflow",
    "Flask"
  ];
  const tools: string[] = ['Git', 'Github', 'Figma', 'VS Code', 'AWS'];
  const Language: string[] = ['English', 'Hindi', 'Tamil'];
  return (
    <div className="bl:ml-[100px] !overflow-x-hidden !overflow-y-auto  base:w-full bl:w-[calc(100%_-_120px)] flex base:flex-col bl:flex-row ">

      <div className="flex-1 flex flex-col px-9 overflow-x-hidden ">
        <div className='w-full px-6 mt-[7rem]'>
          <h1 className='text-5xl font-[660]'>My Resume</h1>
        </div>

        <div className="w-full px-6 flex flex-col gap-4 mt-12">
          <p className="font-[600] text-2xl">Education</p>
          <div className='w-full pr-8 flex flex-col relative pt-4'>
            <div className='relative w-full flex'>
              <div className='flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden'>
                <div className='absolute rounded-full left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 '>
                  <Image src='/images/dypu.png' alt='scdf' width={30} height={30} />
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0 pb-8'>
                  <p className='text-muted-foreground text-xs'>September 2021 · PRESENT</p>
                  <h1 className='text-lg font-[660]'>B Tech in Computer Engineering</h1>
                  <h2 className='text-md font-[500]'>Dy Patil University</h2>
                  <p className='text-muted-foreground text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, temporibus dolores nihil quaerat molestiae similique possimus quia iure in error!</p>
                </div>
              </div>
            </div>

            <div className='relative w-full flex'>
              <div className='flex items-start'>
                <div className='absolute rounded-full left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 '>
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0'>
                  <p className='text-muted-foreground text-xs'>September 2019 · May 2021</p>
                  <h1 className='text-lg font-[660]'>High school Education</h1>
                  <h2 className='text-md font-[500]'>SIES High School</h2>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="w-full px-6 flex flex-col gap-4 mt-16">
          <p className="font-[600] text-2xl">Work Experience</p>
          <div className='w-full pr-8 flex flex-col relative pt-4'>
            <div className='relative w-full flex'>
              <div className='flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden'>
                <div className='absolute rounded-full left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 '>
                  <Image src='/images/dypu.png' alt='scdf' width={30} height={30} />
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0 pb-8'>
                  <p className='text-muted-foreground text-xs'>September 2021 · PRESENT</p>
                  <h1 className='text-lg font-[660]'>B Tech in Computer Engineering</h1>
                  <h2 className='text-md font-[500]'>Dy Patil University</h2>
                  <p className='text-muted-foreground text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, temporibus dolores nihil quaerat molestiae similique possimus quia iure in error!</p>
                </div>
              </div>
            </div>

            <div className='relative w-full flex'>
              <div className='flex items-start'>
                <div className='absolute rounded-full left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 '>
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0'>
                  <p className='text-muted-foreground text-xs'>September 2019 · May 2021</p>
                  <h1 className='text-lg font-[660]'>High school Education</h1>
                  <h2 className='text-md font-[500]'>SIES High School</h2>
                </div>
              </div>
            </div>

          </div>
        </div>






      </div>

      <div className='base:w-full overflow-hidden bl:w-[340px] items-center flex flex-col gap-10 pt-20'>
        <div className="w-[290px] rotate-[1.5deg] relative  px-5 py-5 pb-6 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 bg-cover  border rounded-xl flex flex-col gap-5">
          <h2 className="font-[660] text-md">Technical Skills</h2>
          <div className='w-full flex flex-col gap-4'>
            {stackItems.map((item, index) => (
              <p key={index} className='font-[600] flex items-center gap-2 text-[0.91rem]'>
                <span className='text-main'>─</span> {item}
              </p>
            ))}
          </div>
        </div>

        <div className="w-[290px] rotate-[-1deg] relative  px-5 py-5 pb-6 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 bg-cover  border rounded-xl flex flex-col gap-5">
          <h2 className="font-[660] text-md">Tools I know</h2>
          <div className='w-full flex flex-col gap-4'>
            {tools.map((item, index) => (
              <p key={index} className='font-[600] flex items-center gap-2 text-[0.91rem]'>
                <span className='text-main'>─</span> {item}
              </p>
            ))}
          </div>
        </div>

        <div className="w-[290px]  relative  px-5 py-5 pb-6 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 bg-cover  border rounded-xl flex flex-col gap-5">
          <h2 className="font-[660] text-md">Languages</h2>
          <div className='w-full flex flex-col gap-4'>
            {Language.map((item, index) => (
              <p key={index} className='font-[600] flex items-center gap-2 text-[0.91rem]'>
                <span className='text-main'>─</span> {item}
              </p>
            ))}
          </div>
        </div>


      </div>

    </div>
  )
}
export default Page