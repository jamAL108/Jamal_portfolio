import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import Link from 'next/link'
import Blog from '@/components/home/blog'
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

export default function Home() {
  return (
    <div className="ml-[100px] w-[calc(100%_-_100px)] flex base:flex-col bl:flex-row ">
      <div className="flex-1 flex flex-col px-14 py-[4.5rem] ">
        <div className="w-full flex flex-col gap-9">
          <img src='/images/P2.png' alt="afdv" className="w-[88%] h-[230px] rounded-3xl" />
          <div className="w-[93%] flex flex-col gap-[13px] mt-1">
            <h2 className="text-xl font-[550] ">Hi, I&lsquo;m <span className="text-main">Jamal Mydeen</span></h2>
            <h1 className="text-5xl font-bold leading-[50px]">I develop <span className="relative text-[#16a34a]"><span className="z-[100000]">full-stack</span> <div className="absolute top-3 transform rotate-[-3deg] left-[-5px] z-[-10] bg-[#10292f]  w-full h-[90%] "></div></span> solutions that people <span className="text-pinky">adore.</span></h1>
            <p className="text-muted-foreground text-lg">Experienced Developer passionate about crafting innovative tech solutions . Outside of tech, I enjoy reading, writing, and exploring new destinations.</p>
          </div>
        </div>
        <div className="w-full h-[60px]">

        </div>
        <div className="w-full flex items-center gap-9 my-8">
          <Link href={'https://github.com/jamal108'}>
            <SiGithub className="text-muted-foreground h-8 w-8 transform duration-150 ease-in-out hover:scale-110" />
          </Link>
          <Link href={'https://github.com/jamal108'}>
            <FaXTwitter className="text-muted-foreground h-8 w-8 transform duration-150 ease-in-out hover:scale-110" />
          </Link>
          <Link href={'https://github.com/jamal108'}>
            <SlSocialLinkedin className="text-muted-foreground h-8 w-8 transform duration-150 ease-in-out hover:scale-110" />
          </Link>
          <Link href={'https://github.com/jamal108'}>
            <FaInstagram className="text-muted-foreground h-8 w-8 transform duration-150 ease-in-out hover:scale-110" />
          </Link>
          <Link href={'https://github.com/jamal108'}>
            <HiOutlineMailOpen className="text-muted-foreground h-8 w-8 transform duration-150 ease-in-out hover:scale-110" />
          </Link>
        </div>
        <div className="w-full flex flex-col gap-4 my-5">
          <p className="font-[600] text-xl">Latest Blogs</p>
          <Blog />
        </div>

        <div className="w-full flex flex-col gap-4 my-8">
          <p className="font-[600] text-xl">Achievements</p>
          <div className="w-full flex flex-wrap py-3 gap-8">


            <div className="w-[360px] h-[220px] bg-[url('/images/hackthisfall.jpg')] transform duration-300 ease-out rotate-[2deg] hover:rotate-[0deg] relative bg-cover">
              <div className="absolute z-[0] inset-0 bg-black opacity-60"></div>
              <h1 className="text-2xl absolute !top-[55px] left-[30px] z-[10000] font-[660]">HackThisFall</h1>
              <div className="w-[40px] h-[40px] bg-white rounded-full absolute bottom-[20px] right-[15px]">

              </div>
            </div>

            <div className="w-[360px] h-[220px] bg-[url('/images/hackthisfall.jpg')] transform duration-300 ease-out rotate-[-2deg] hover:rotate-[0deg] relative bg-cover">
              <div className="absolute z-[0] inset-0 bg-black opacity-60"></div>
              <h1 className="text-2xl absolute !top-[55px] left-[30px] z-[10000] font-[660]">HackThisFall</h1>
              <div className="w-[40px] h-[40px] bg-white rounded-full absolute bottom-[20px] right-[15px]">

              </div>
            </div>


          </div>
        </div>

        <div className="w-full flex flex-col gap-4 my-5">
          <p className="font-[600] text-xl">Latest Projects</p>
          <div className="w-full relative flex flex-wrap py-8 gap-5">

            <div className="w-full relative  flex base:flex-col bl:flex-row gap-5">
              <PinContainer
                title="Working link"
                href="https://github.com/jamal108"
              >
                <div className="w-[360px]  relative  rounded-lg px-5 py-5 bg-background flex flex-col gap-3">
                  <div className="w-full !h-[190px] rounded-md bg-accent flex justify-center items-center mb-2">
                    <img src="/images/verifaceScreen.png" alt="cdfv" className="w-[92%] transform rotate-[4deg] rounded-md h-[170px]" />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Veriface
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      A deepfake detection app which utilizes eye blinking, facial expressions,
                      and lip syncing to identify deepfakes.
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center mt-1">
                    <h1>we</h1>
                    <p className="text-pinky text-sm flex items-center justify-center gap-2">Check Live site <FaLocationArrow className="h-3 w-3" /></p>
                  </div>
                </div>
              </PinContainer>

              <PinContainer
                title="Working link"
                href="https://github.com/jamal108"
              >
                <div className="w-[360px] relative  rounded-lg px-5 py-5 bg-background flex flex-col gap-3">
                  <div className="w-full !h-[190px] rounded-md bg-accent flex justify-center items-center mb-2">
                    <img src="/images/vidchat.png" alt="cdfv" className="w-[92%] transform rotate-[-2deg] rounded-md h-[160px]" />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Vidchat AI
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      A deepfake detection app which utilizes eye blinking, facial expressions,
                      and lip syncing to identify deepfakes.
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center mt-1">
                    <h1>we</h1>
                    <p className="text-pinky flex  text-sm  items-center justify-center gap-2">Check Live site <FaLocationArrow className="h-3 w-3" /></p>
                  </div>
                </div>
              </PinContainer>
            </div>

            <div className="w-full relative flex base:flex-col bl:flex-row gap-5 mt-[100px]">
              <PinContainer
                // className="bl:mt-[200px]"
                title="Working link"
                href="https://github.com/jamal108"
              >
                <div className="w-[360px] relative  rounded-lg px-5 py-5 bg-background flex flex-col gap-3">
                  <div className="w-full !h-[190px] rounded-md bg-accent flex justify-center items-center mb-2">
                    <img src="/images/soulmind.png" alt="cdfv" className="w-[92%] transform rotate-[-2deg] rounded-md h-[160px]" />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Soulmind
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      A deepfake detection app which utilizes eye blinking, facial expressions,
                      and lip syncing to identify deepfakes.
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center mt-1">
                    <h1>we</h1>
                    <p className="text-pinky flex  text-sm  items-center justify-center gap-2">Check Live site <FaLocationArrow className="h-3 w-3" /></p>
                  </div>
                </div>
              </PinContainer>
              <PinContainer
                // className="bl:mt-[200px]"
                title="Working link"
                href="https://github.com/jamal108"
              >
                <div className="w-[360px] relative  rounded-lg px-5 py-5 bg-background flex flex-col gap-3">
                  <div className="w-full !h-[190px] rounded-md bg-accent flex justify-center items-center mb-2">
                    <img src="/images/Metatunes.png" alt="cdfv" className="w-[92%] transform rotate-[0deg] rounded-md h-[160px]" />
                  </div>
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Meta tunes
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                      A deepfake detection app which utilizes eye blinking, facial expressions,
                      and lip syncing to identify deepfakes.
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center mt-1">
                    <h1>we</h1>
                    <p className="text-pinky flex  text-sm  items-center justify-center gap-2">Check Live site <FaLocationArrow className="h-3 w-3" /></p>
                  </div>
                </div>
              </PinContainer>
            </div>


          </div>
        </div>

      </div>
      <div className="base:w-full bl:w-[300px]">
        <div className="">

        </div>
      </div>
    </div>
  );
}
