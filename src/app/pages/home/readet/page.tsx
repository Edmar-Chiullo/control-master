'use client'
// screen 350 x 640

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { useStackLabelContext } from "@/app/context/userContext"
import containsPL from "@/lib/checkString"
import writeUserData from "@/controler/controler-db"

const InsertItemStackLabel = () => {
    const router = useRouter()
    const { stackLabel, setStackLabel } = useStackLabelContext();

    const checkIputValue = (value:any) => {
        if (value.key === "Enter" || value.key === "Tab") {
            if (value.target.value) {
                const string = containsPL(value.target.value)
                if (string) {
                    stackLabel.pushItem(value.target.value)
                    setStackLabel(stackLabel)
                    router.push('/pages/home/selectlocal')
                } else {
                    alert('Valor inserido não é valido')
                    value.target.value = ''
                }
            } else {
                alert('Valor inserido não é valido')
                value.target.value = ''
            }      
            value.target.value = ''
        }
    }   

    const clearStack = () => {
        writeUserData(stackLabel)
        stackLabel.clear()
        router.push('/pages/home')
    }
    return (
        <div className="relative flex justify-center">
            <Input className="absolute top-[-150px] w-[85%] border-b-blueColor text-xl" placeholder="Leia a etiqueta" id="readLabel" onKeyDown={checkIputValue}/>
            <Button className="absolute bottom-[-300px]	w-[85%] bg-[#f8fafc] text-blueColor font-bold text-2xl lg:h-14 border hover:text-bgWhiteColor" onClick={clearStack}>Finalizar</Button>
        </div>
    )
}

export default InsertItemStackLabel