'use client'
import React, { useState } from 'react'
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BorderBeam } from '@/components/magicui/border-beam'
import { Copy, CheckCheck } from "lucide-react";

export default function BackgroundGradientAnimationDemo() {

    const [elements, setElements] = useState<JSX.Element[]>([]);
    const [copySuccess, setCopySuccess] = useState(false);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText('jamalmydeen112@gmail.com');
            const fragment: JSX.Element[] = [];
            for (let i = 0; i < 100; i++) {
                const styles = {
                    transform: `translate3d(${random(500) - 250}px, ${random(200) - 150}px, 0) rotate(${random(360)}deg)`,
                    background: `hsla(${random(360)}, 100%, 50%, 1)`,
                    animation: 'bang 700ms ease-out forwards',
                    opacity: 0,
                    position: 'absolute' as 'absolute',
                };

                fragment.push(<i key={i} style={styles}></i>);
            }
            setElements(fragment);
            setCopySuccess(true)
            setTimeout(() => {
                setCopySuccess(false)
                setElements([])
            }, 1000)
        } catch (err) {
            alert("error")
        }
    };


    return (
        <BackgroundGradientAnimation className="!w-[95%] !h-[200px] rounded-xl">
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold p-6 text-center gap-7">
                <h2 className="text-2xl">Do you want to start a project together?</h2>
                <button onClick={(e) => handleClick()} className="hoverme border bg-[#020617] rounded-xl relative px-5 flex items-center justify-center gap-2 py-4 font-[450] text-[0.9rem] !cursor-pointer min-w-[230px]">
                    {copySuccess === false ? (
                        <>
                            <Copy className="h-3 w-3" /> Copy my email address
                        </>
                    ) : (
                        <>
                            <CheckCheck className="h-3 w-3" /> Email copied
                        </>
                    )}
                    <BorderBeam size={100} duration={6} delay={6} />
                    <div style={{ position: 'relative' }}>{elements}</div>
                </button>
            </div>
        </BackgroundGradientAnimation>
    );
}


function random(max: number): number {
    return Math.random() * max;
}
