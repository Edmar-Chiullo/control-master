'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useStackLabelContext } from "@/app/context/userContext"
import Image from "next/image"

const InsertLocalItemStackLabel = () => {
    const router = useRouter()
    const { stackLabel, setStackLabel } = useStackLabelContext();

    const defaultLocals = {
        pp1046: 'PP 1046',
        bl1046: 'BL 1046',
        pp1125: 'PP 1125',
        bl1125: 'BL 1125'
    }

    const locals = (element: any) => {
        const local = element.target.innerText
        switch (local) {
            case defaultLocals.pp1046:
                stackLabel.pushLocal(element.target.innerText)
                setStackLabel(stackLabel)
                router.push('/pages/home/selectlocal/locals/ppvarejo')
                break;
            case defaultLocals.bl1046:
                stackLabel.pushLocal(element.target.innerText)
                setStackLabel(stackLabel)
                stackLabel.pushStreet('No street')
                stackLabel.pushObjectItem()
                router.push('/pages/home/readet')
                break;
            case defaultLocals.pp1125:
                stackLabel.pushLocal(element.target.innerText)
                setStackLabel(stackLabel)
                router.push('/pages/home/selectlocal/locals/ppcash')
                break;
            case defaultLocals.bl1125:
                stackLabel.pushLocal(element.target.innerText)
                setStackLabel(stackLabel)
                stackLabel.pushObjectItem()
                stackLabel.pushStreet('No street')
                router.push('/pages/home/readet')
                break;
            default:
                break;
        }
    }

    return (
        <div className="relative w-full h-full">
            <Image
                width={36}
                height={36}
                src={'/seta.png'}
                alt="Botão seta para esquerda (retornar a pagina)"
                className="absolute ml-1 top-[-250px]"
                onClick={() => router.push('/pages/home/readet')}
            />
            <div className="flex flex-col justify-center items-center space-y-8 w-full h-full">
                <Button className="w-[85%] bg-[#f8fafc] text-[bg-primary] text-lg font-bold lg:h-14 lg:text-2xl border hover:text-bgWhiteColor" onClick={locals}>PP 1046</Button>
                <Button className="w-[85%] bg-[#f8fafc] text-[bg-primary] text-lg font-bold lg:h-14 lg:text-2xl border hover:text-bgWhiteColor" onClick={locals}>BL 1046</Button>
                <Button className="w-[85%] bg-[#f8fafc] text-[bg-primary] text-lg font-bold lg:h-14 lg:text-2xl border hover:text-bgWhiteColor" onClick={locals}>PP 1125</Button>
                <Button className="w-[85%] bg-[#f8fafc] text-[bg-primary] text-lg font-bold lg:h-14 lg:text-2xl border hover:text-bgWhiteColor" onClick={locals}>BL 1125</Button>
            </div>
        </div>
    )
}

export default InsertLocalItemStackLabel

