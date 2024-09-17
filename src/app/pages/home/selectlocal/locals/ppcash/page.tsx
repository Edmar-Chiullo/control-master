'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useStackLabelContext } from "@/app/context/userContext"
import Image from "next/image"

const InsertStreetItemStackLabel = () => {
    const router = useRouter()
    const { stackLabel, setStackLabel } = useStackLabelContext();
    const ruasLocals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const addLeftZero = (value: number) => {
        const addZero = value <= 9 ? `0${value}` : value 
        return addZero
    }

    //coments
    

    const pushStreet = (element: any) => {
        stackLabel.pushLocal(element.target.innerText)
        setStackLabel(stackLabel)
        stackLabel.pushObjectItem()
        router.push('/pages/home/readet')
    }

    return (
        <div className="relative grid grid-cols-4 grid-rows-6 justify-items-center items-center p-3 space-x-0 w-full h-full lg:w-[50%] lg:m-auto">
            <Image
                width={36}
                height={36}
                src={'/seta.png'}
                alt="Botão seta para esquerda (retornar a pagina)"
                className="absolute ml-1 top-[-250px] left-0"
                onClick={() => router.push('/pages/home/selectlocal')} 
            />
            {ruasLocals.map((value) => {
                const num = addLeftZero(value)
                return <Button key={num} onClick={pushStreet} className="w-14 h-12 bg-[#f8fafc] text-[bg-primary] font-bold text-lg lg:w-32 lg:text-2xl border hover:text-bgWhiteColor">{num}</Button> 
            })} 
    </div>

    )
}

export default InsertStreetItemStackLabel