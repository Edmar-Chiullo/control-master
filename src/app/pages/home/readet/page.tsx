'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
// screen 350 x 640

export default function Home() {
    const router = useRouter()

    const checkIputValue = (value:any) => {      
        value.target.value ? router.push('/pages/home/selectlocal'): alert('Valor inserido não é valido')
    }   

    return (
        <div className="relative flex justify-center">
            <Input className="absolute top-[-150px] w-[85%] border-b-blueColor text-xl" placeholder="Leia a etiqueta" onBlur={checkIputValue}/>
            <Button className="absolute bottom-[-300px]	w-[85%] bg-[#f8fafc] text-blueColor font-bold text-2xl" onClick={() => router.push('/pages/home')}>Finalizar</Button>
        </div>
    )
} 