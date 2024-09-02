'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
// screen 350 x 640

export default function Home() {
    const router = useRouter()
    return (
        <div className="relative flex justify-center">
            <Button className="absolute top-[-150px] w-[85%] font-bold text-2xl" onClick={() => router.push('/pages/home/readet')}>Iniciar</Button>
        </div>
    )
}