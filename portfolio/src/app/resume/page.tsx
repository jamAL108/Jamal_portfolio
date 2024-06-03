import React from 'react'
import Image from 'next/image'
import Boiler from '@/components/step'
import Thankyou from '@/components/thankyou'
import ResumeComp from '@/components/resume'

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
    <div className="bl:ml-[100px] !overflow-x-hidden !overflow-y-auto  base:w-full bl:w-[calc(100%_-_100px)] flex base:flex-col bl:flex-row ">

      <div className="base:w-full bl:min-w-[65%] bl:max-w-[65%]  bl:w-[65%] flex flex-col bl:px-9 overflow-x-hidden ">
        <div className='w-full px-6 mt-[7rem]'>
          <h1 className='text-5xl font-[660]'>My Resume</h1>
        </div>
        <div className="w-full px-6 flex flex-col gap-4 mt-12">
          <p className="font-[600] text-2xl">Education</p>
          <div className='w-full pr-8 flex flex-col relative pt-4'>
            <div className='relative w-full flex'>
              <div className='flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden'>
                <div className='absolute rounded-full left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 '>
                  <Image src='/images/dypub.png' alt='scdf' width={35} height={35} />
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0 pb-8'>
                  <p className='text-muted-foreground text-xs'>September 2021 · PRESENT</p>
                  <h1 className='text-lg font-[660]'>B Tech in Computer Engineering</h1>
                  <h2 className='text-md font-[500]'>Dy Patil University</h2>
                  <p className='text-muted-foreground text-[0.76rem] '>With a B.Tech in Computer Engineering from DY Patil University, specializing in Data Science, boasting a stellar <span className='text-foreground'>9.7 CGPA</span> and consistent 10-pointer SGPA in 4 semesters, poised for impactful roles in data-driven industries.</p>
                </div>
              </div>
            </div>

            <div className='relative w-full flex'>
              <div className='flex items-start'>
                <div className='absolute rounded-full left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 '>
                  <Image src='/images/sies.png' alt='scdf' width={35} height={35} />
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0'>
                  <p className='text-muted-foreground text-xs'>September 2019 · May 2021</p>
                  <h1 className='text-lg font-[660]'>High school Education</h1>
                  <h2 className='text-md font-[500]'>SIES High School</h2>
                  <p className='text-muted-foreground text-[0.76rem] '>Completing 12th standard at SIES High School, Matunga, with notable successes: achieving <span className='text-foreground'>80%</span> in the 10th public exam and maintaining a commendable <span className='text-foreground'>90%</span> throughout high school.</p>
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
                  <Image src='/images/lamarr.png' alt='scdf' width={30} height={30} />
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0 pb-8'>
                  <p className='text-muted-foreground text-xs'>December 2023 · April 2024</p>
                  <h1 className='text-lg font-[660]'>Sotware Developer intern</h1>
                  <h2 className='text-md font-[500]'>Lamarr</h2>
                  <ul className='text-[0.76rem] text-muted-foreground !list-disc ml-5 gap-1'>
                    <li>Served as a Frontend Developer, contributed to various client projects globally.</li>
                    <li>Utilized NextJS, TypeScript, and TailwindCSS to develop responsive user interfaces, resulting in a 30% decrease in page load times and a 20% increase in user engagement.</li>
                    <li>Incorporated PostgreSQL from Supabase for database operations. Received positive client feedback for delivering exceptional frontend solutions.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='relative w-full flex'>
              <div className='flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden'>
                <div className='absolute rounded-full left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 '>
                  <Image src='/images/cat.png' alt='scdf' width={48} height={48} className='rounded-full' />
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0 pb-8'>
                  <p className='text-muted-foreground text-xs'>November 2023 · January 2024</p>
                  <h1 className='text-lg font-[660]'>Backend Developer intern</h1>
                  <h2 className='text-md font-[500]'>Rablo</h2>
                  <ul className='text-[0.76rem] text-muted-foreground !list-disc ml-5 gap-1'>
                    <li>Worked as a Backend Developer, Collaborated and maintained server-side logic, databases, and APIs.</li>
                    <li>Used Node.js and Express.js for development, integrated Google Maps APIs, and Implemented automated tests using
                      Jest and Mocha, achieving 80%+ test coverage.</li>
                    <li>Collaborated with the lead Backend Team and optimizing and enhancing performance of the Tutor Module and
                      Payment Sections.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='relative w-full flex'>
              <div className='flex items-start'>
                <div className='absolute rounded-full left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 '>
                  <Image src='/images/cat.png' alt='scdf' width={48} height={48} className='rounded-full' />
                </div>
                <div className='pl-20 space-y-1 flex-1 flex flex-col gap-0'>
                  <p className='text-muted-foreground text-xs'>December 2022 · January 2023</p>
                  <h1 className='text-lg font-[660]'>Web Developer intern</h1>
                  <h2 className='text-md font-[500]'>ACM - Students chapter RAIT</h2>
                  <ul className='text-[0.76rem] text-muted-foreground !list-disc ml-5 gap-1'>
                    <li>Learned about many javascript framework , and i have built many small Projects.
                    </li>
                    <li>Acquired practical skills for web development career.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='base:w-full  pb-[100px] overflow-hidden bl:min-w-[28%] bl:max-w-[28%] bl:w-[28%] items-center flex flex-col gap-10 pt-20'>
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
        <Boiler />
        <Thankyou />
        <ResumeComp/>
      </div>


    </div>
  )
}
export default Page