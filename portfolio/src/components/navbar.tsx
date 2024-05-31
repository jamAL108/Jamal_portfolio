'use client'
import React from 'react'
import { BiHomeAlt2 } from "react-icons/bi";
import { Presentation } from 'lucide-react';
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useTheme } from 'next-themes';
import Image from 'next/image'

const Navbar = () => {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    return (
        <div className='base:hidden fixed bl:flex flex-col gap-10 w-[100px] border-r h-[100vh] items-center justify-center'>
            <div className='absolute top-0 w-full flex items-center justify-center flex-col gap-6 mt-6'>
                <Image src='/images/JamalPhoto.jpg' alt='asdf' width={32} height={32} className='rounded-full' />
                {
                    theme === 'dark' ? (
                        <FiSun onClick={(e) => setTheme('light')} className='text-muted-foreground cursor-pointer hover:text-foreground h-5 w-5' />
                    ) : (
                        <BsFillMoonStarsFill onClick={(e) => setTheme('dark')} className='text-muted-foreground cursor-pointer hover:text-foreground  h-5 w-5' />
                    )
                }
            </div>
            <Link href={'/'}>
                <BiHomeAlt2 className={`${pathname !== null && pathname === '/' ? 'text-main' : 'hover:text-foreground text-muted-foreground'} cursor-pointer transition-all duration-200 ease-in-out`} size={28} />
            </Link>
            <Link href={'/blogs'}>
                <MdOutlineWorkOutline className={`${pathname !== null && pathname.includes('/blogs') === true ? 'text-main' : 'hover:text-foreground text-muted-foreground'} cursor-pointer transition-all duration-200 ease-in-out`} size={26} />
            </Link>
            <Link href={'/projects'}>
                <Presentation className={`${pathname !== null && pathname.includes('/projects') === true ? 'text-main' : 'hover:text-foreground text-muted-foreground'} cursor-pointer transition-all duration-200 ease-in-out`} size={26} />
            </Link>
            <Link href={'/resume'}>
                <IoDocumentTextOutline className={`${pathname !== null && pathname.includes('/resume') === true ? 'text-main' : 'hover:text-foreground text-muted-foreground'} cursor-pointer transition-all duration-200 ease-in-out`} size={26} />
            </Link>
        </div>
    )
}

export default Navbar