'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import connectDb from "@/controler/autentication"

const Home = () => {
    const router = useRouter()

    const constructorStack = () => {
        connectDb() // Execução de conexão com o o app.
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