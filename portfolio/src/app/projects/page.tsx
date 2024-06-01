import React from 'react'
import Boiler from '@/components/step'
import Thankyou from '@/components/thankyou'
const Page = () => {
  return (
    <div className="bl:ml-[100px] !overflow-x-hidden !overflow-y-auto  base:w-full bl:w-[calc(100%_-_120px)] flex base:flex-col bl:flex-row ">
      <div className="base:w-full bl:w-[72%] flex flex-col px-9 overflow-x-hidden">
        <div className='w-full px-6 mt-[7rem]'>
          <h1 className='text-5xl font-[660]'>My Projects</h1>
        </div>
      </div>

      <div className='base:w-full overflow-hidden bl:min-w-[28%] bl:max-w-[28%] bl:w-[28%] items-center flex flex-col gap-10 pt-40'>
        <Boiler />
        <Thankyou/>
      </div>
    </div>
  )
}

export default Page