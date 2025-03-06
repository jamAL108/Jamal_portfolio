'use client';
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { Loader2 } from "lucide-react"
// @ts-ignore
import { useRouter } from 'next/navigation';
import { SigninWithSupabase } from '@/auth'


const Page = () => {
    const router = useRouter()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [apiBool, setApiBool] = useState<boolean>(false)

    const check = async () => {
            console.log(process.env.NEXT_PUBLIC_USER)
            setApiBool(true)
            if(username!=process.env.NEXT_PUBLIC_USER){
                setApiBool(false)
                alert("Invalid Credentails")
                return
            }
            const email = `${username}@gmail.com`
            const stringifiedObject: any = await SigninWithSupabase({ email, password })
            const result: any = JSON.parse(stringifiedObject)
            if (result.success === true) {
                router.push('/zxcvbnm/docs')
                // setApiBool(false)
            } else {
                alert("Invalid password")
                setApiBool(false)
            }
            // setApiBool(false)
    }

    return (
        <div className="bl:ml-[100px] !overflow-x-hidden !overflow-y-auto  base:w-full bl:w-[calc(100%_-_120px)] flex base:flex-col bl:flex-row ">
            <div className="base:w-full bl:w-[72%] bl:pb-[100px] flex flex-col items-center bl:px-8   overflow-x-hidden">
                <div className='w-full px-6 mt-[7rem]'>
                <Card className="border-none base:w-full bl:w-[450px]">
            <CardHeader>
                <CardTitle className="text-2xl">Welcome back</CardTitle>
                <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent className="mt-3">
                <div className="grid gap-4">
                    <div className="grid gap-2 mt-2">
                        <Label htmlFor="text">Username</Label>
                        <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="text"
                            type="text"
                            placeholder="m@example.com"
                            required
                            className="bg-accent/30 py-5"
                        />
                    </div>
                    <div className="grid gap-2 mt-1">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input value={password}
                            onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="******" className="bg-accent/30 py-5" required />
                    </div>
                    <Button disabled={username.length === 0 || password.length === 0 || apiBool === true} onClick={(e) => {
                        e.preventDefault()
                        check()
                    }} className={`w-full py-5 mt-8 ${apiBool === true ? 'op0' : 'op1'}`}>
                        {apiBool && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Sign In
                    </Button>
                </div>
            </CardContent>
        </Card>
                </div>
            </div>
        </div>
    )
}

export default Page