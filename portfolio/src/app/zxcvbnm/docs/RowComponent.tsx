'use client'
import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, BotMessageSquare, SquareArrowOutUpRight, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { DeleteDocFromSupabase } from '@/api'


const RowComponent: React.FC<any> = (props) => {
    const { AllFiles, setFiles,  user, file , setTempFiles} = props
        const formatDate = (ts: string): string => {
            const date = new Date(ts);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');

            return `${year}-${month}-${day} ${hours}:${minutes}`;
        };

        const deleteChat = async()=>{
            const resp:any = await DeleteDocFromSupabase(file.id)
            if(resp.success===true){
                let tempChats = [...AllFiles]
                const newChats = tempChats.filter((chat)=>chat.id!==file.id)
                setFiles(newChats)
                setTempFiles(newChats)
            }else{
                alert("ERROR deleting files")            
            }
       }


       const getFileTypeImage = (extension: string): string => {
        switch (extension.toLowerCase()) {
          case "docx":
            return "docs";
          case "pdf":
            return "pdf";
          case "jpg":
            return "image";
          case "jpeg":
            return "image";
          case "png":
            return "image";
          case "ppt":
            return "ppt";
          case "pptx":
            return "image";
          default:
            return "file";
        }
      };

        return (
            <TableRow>
                <TableCell className="hidden sm:table-cell">
                    <Image src={`/images/${getFileTypeImage(file.extension)}.png`} alt='asdsvf' width={50} className='rounded-md' height={40} />
                </TableCell>
                <TableCell className="font-medium">
                    {file.Name}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    {formatDate(file.created_at)}
                </TableCell>
                <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger><MoreHorizontal color='white' size={20} /></DropdownMenuTrigger>
                        <DropdownMenuContent className='absolute right-[-10px] px-3 py-3 w-[200px]'>
                            <DropdownMenuItem asChild>
                            <Link className='flex items-center gap-3 text-white' href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Documents/Jamal_Documents/${file.id}.${file.extension}`}> <SquareArrowOutUpRight size={22} /> View Document </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex items-center py-2.5  mb-1 px-3  text-white'>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e)=>deleteChat()} className='flex items-center py-2.5  mb-1 px-3  text-white'>
                                <div className='flex items-center gap-3 text-white'><Trash2 size={22} /> Delete Document </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
            </TableRow>
        )
    }

    export default RowComponent