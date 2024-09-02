'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function PpVarejo() {
    const router = useRouter()
    const ruasLocals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const addLeftZero = (value: number) => {
        const addZero = value <= 9 ? `0${value}` : value 
        
        return addZero
    }

    const backReadEt = () => {
        router.push('/pages/home/readet')
    }

    return (
        <div className="relative grid grid-cols-4 grid-rows-6 justify-items-center items-center p-3 space-x-0 w-full h-full">
            <Image
                width={48}
                height={48}
                src={'/seta.png'}
                alt="Botão seta para esquerda (retornar a pagina)"
                className="absolute ml-1 top-[-250px] left-0"
                onClick={() => router.push('/pages/home/selectlocal')} 
            />
            {ruasLocals.map((value) => {
                const num = addLeftZero(value)
                return <Button key={num} onClick={backReadEt} className="w-14 h-12 bg-[#f8fafc] text-[bg-primary] font-bold text-lg">{num}</Button> 
            })} 
        </div>
    ) 
}