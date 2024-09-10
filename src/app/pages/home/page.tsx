'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useStackLabelContext } from "@/app/context/userContext"

const Home = () => {
    const router = useRouter()
    const { stackLabel, setStackLabel} = useStackLabelContext()

    const constructorStack = () => {
        const stack = stackLabel.operadorName = 'Edmar'
        setStackLabel(stackLabel)
        router.push('/pages/home/readet')
    };

    return (
        <div>
            <div className="relative flex justify-center">
                <Button className="absolute top-[-150px] w-[85%] font-bold text-2xl lg:h-14 border hover:text-bgWhiteColor" onClick={constructorStack}>Iniciar</Button>
            </div>
        </div>
    )
}

export default Home