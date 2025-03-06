'use client'
import React, { useEffect, useState, useRef } from 'react'
import checkUserAuthClient from '@/auth/getUserSession'
// @ts-ignore
import { useRouter } from 'next/navigation'
import SessionNotFoundComp from '@/components/sessionNotFound'
import { addDocument, getAllDocuments } from '@/api'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { Upload, X } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from '@/components/ui/skeleton'
import RowComponent from './RowComponent'
import { Input } from "@/components/ui/input"
import { SignOutServer } from '@/auth'


const Page = () => {
    const router = useRouter()
    const [loader, setLoader] = useState<boolean>(true)
    const [sessionNotFound, setSessionNotFound] = useState<boolean>(false)
    const [user, setUser] = useState<any>(null)
    const [files, setFiles] = useState<any>([])
    const [TempFiles , setTempFiles] = useState<any>([])

    const refffu:any = useRef(null);

    const [uploading, setUplaoding] = useState<boolean>(false)

    const [filesToSend, setFilesToSend] = useState<any>([])

    useEffect(() => {
        getAllInvoicefunciton()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const getAllInvoicefunciton = async () => {
        const res: any = await checkUserAuthClient()
        if (res.error !== null) {
            router.push('/')
            return
        }
        if (res.data.session === null) {
            setLoader(false)
            setSessionNotFound(true)
            return
        }
        const userData: any = res.data.session.user
        console.log(userData.id)
        const result: any = await getAllDocuments()
        if (result.success === true) {
            setFiles(result.data)
            setTempFiles(result.data)
            console.log(result.data)
            setUser(res.data.session.user)
            setLoader(false)
        } else {
            setUser(res.data.session.user)
            setLoader(false)
            alert("ERROR")
        }
    }


    const logoutFunction = async () => {
        await SignOutServer()
    }

    const fileUploadFunction = (e: any) => {
        e.preventDefault();

    }

    const isValidFile = (filePath: string) => {
        return !filePath.endsWith(".7z") || !filePath.endsWith(".bak");
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // const file = e.target.files ? e.target.files[0] : null;
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            const validFiles = filesArray.filter((file) => isValidFile(file.name));
            setFilesToSend((prevFiles: any) => [...prevFiles, ...validFiles]);
        }
        // setFilesToSend(e.target.files)
        // const file: File | null = e.target.files ? e.target.files[0] : null;
        // if (file && !isValidFile(file.name)) {
        //     alert("Uh oh! Something went wrong.")
        // } else if (file) {
        //     setSelectedFile(file);
        //     setfilename(file.name);
        //     setfilesize(file.size);
        // }
    };

    function truncateString(str: string, maxLength = 19) {
        if (str.length > maxLength) {
            return (
                str.substring(0, maxLength - 7) +
                "..." +
                str.substring(str.length - 7, str.length)
            );
        }
        return str;
    }


    const API = async () => {
        setUplaoding(true)
        const result = await addDocument(filesToSend);
        setFilesToSend([])
        setFiles(result.data)
        setTempFiles(result.data)
        if (result.notUploaded.length !== 0) {
            alert("Some Files Not Uploaded")
            setUplaoding(false)
        } else {
            alert("Success")
            setUplaoding(false)
        }
    }

    const search = (e: any) => {
        if (!e) {
            setFiles(TempFiles)
        } else {
            let input = e;
            console.log(input)
            const tempS = TempFiles.filter((file:any)=>file.Name.toLowerCase().includes(input.toLowerCase())).slice(0, 5);
            setFiles(tempS)
        }
    }


    function debounce(func: any, d: any) {
        let timer: any;
        return function () {
            if (timer) clearTimeout(timer);
            setTimeout(func, d);
        }
    }

    const timery = debounce(() => {
        search(refffu?.current.value)
    }, 800)



    if (sessionNotFound) {
        return <SessionNotFoundComp />
    }

    return (
        <div className="bl:ml-[100px] !overflow-x-hidden !overflow-y-auto  base:w-full bl:w-[calc(100%_-_120px)] flex base:flex-col bl:flex-row ">
            <div className="base:w-full bl:w-[80%] bl:pb-[100px] flex flex-col items-center bl:px-8   overflow-x-hidden">
                <div className='w-full px-6 mt-[7rem]'>
                    <Card className="border-none w-full">
                        <CardHeader className='flex-row justify-between base:px-0 bl:px-6'>
                            <div className='flex flex-col gap-1'>
                                <CardTitle className="text-2xl">Welcome back Jamal</CardTitle>
                                <CardDescription className='flex items-center gap-2'>How's life going ? <img src='/images/catmeow.png' onClick={logoutFunction} className='w-5 h-5 cursor-pointer ' /></CardDescription>
                            </div>
                            <Button disabled={uploading} className='text-white' onClick={(e) => {
                                e.preventDefault();
                                const elem = document.querySelector(".fileinput") as HTMLElement;
                                if (elem) {
                                    elem.click();
                                }
                            }}>
                                Add FIles
                            </Button>
                            <input
                                type="file"
                                hidden
                                multiple
                                onChange={handleFileChange}
                                className="fileinput"
                            />
                        </CardHeader>
                        <CardContent className="mt-3 w-full">
                            <div className='w-full flex flex-wrap gap-0 '>
                                {filesToSend.length !== 0 &&
                                    filesToSend.map((file: any, key: number) => (
                                        <div
                                            key={key}
                                            className="w-[min(100%,320px)] h-[90px] flex items-center justify-center"
                                            onClick={(e: any) => {
                                                e.stopPropagation();
                                            }}
                                        >
                                            <div className="w-[85%] border-solid border-2 bg-[#fefefe] text-black flex items-center gap-2 rounded-md base:p-[8px] md:p-[7px] max-h-[60px]">
                                                {file.name.endsWith(".docx") ? (
                                                    <img
                                                        className="base:w-[29px] base:h-[26px] md:w-[33px] md:h-[30px]"
                                                        src="/images/wordlogo.png"
                                                        alt="Word Document"
                                                    />
                                                ) : (
                                                    <img
                                                        className="base:w-[27px] base:h-[31px] md:w-[31px] md:h-[35px]"
                                                        src="/images/pdflogo.png"
                                                        alt="PDF Document"
                                                    />
                                                )}
                                                <div className="flex-1 gap-2">
                                                    <p className="base:text-[0.71rem] md:text-[0.77rem] font-[550] tracking-[0.3px] leading-none">
                                                        {truncateString(file.name)}
                                                    </p>
                                                    <p className="base:text-[0.6rem] md:text-[0.65rem] opacity-[0.74]">
                                                        {`${(Number(file.size) / 1024).toFixed(2)} kb`}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ml-[5px] max-h-[60px] min-h-[45px] flex items-start justify-start">
                                                <X
                                                    size={23}
                                                    color={"white"}
                                                    className="cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        // Remove the current file from filesToSend
                                                        const updatedFiles = filesToSend.filter((_: any, index: number) => index !== key);
                                                        setFilesToSend(updatedFiles); // Update the state
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {filesToSend.length !== 0 && (
                                <Button disabled={uploading} onClick={API} className="w-[min(100%,250px)] mx-3 my-4 hover:bg-white/70  bg-white text-black">
                                    {uploading === true && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Upload Document</Button>
                            )}
                        </CardContent>
                    </Card>
                    <div className='flex w-full flex-col gap-2'>
                        <Input type="text" ref={refffu} placeholder='Search' className='inputs w-[350px]' onChange={timery}  />
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="hidden w-[90px] sm:table-cell">
                                        <span className="sr-only">Image</span>
                                    </TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Created at
                                    </TableHead>
                                    <TableHead>
                                        <span className="sr-only">Actions</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loader === true && (
                                    [0].map((item, qw) => (
                                        <TableRow key={qw}>
                                            <TableCell className="hidden sm:table-cell">
                                                <Skeleton className='w-[90px] h-16 rounded-xl' />
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                <Skeleton className='w-[150px] h-6 rounded-xl' />
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <Skeleton className='w-[100px] h-6 rounded-xl' />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                                {
                                    loader === false && files.map((file: any, idx: number) => (
                                        <RowComponent key={idx} setTempFiles={setTempFiles} AllFiles={files} setFiles={setFiles} user={user} file={file} />
                                    ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page