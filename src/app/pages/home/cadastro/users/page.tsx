'use client'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


export default function RegisterUser() {

    const router = useRouter()

    const formSchema = z.object({
        nome: z.string().min(2, {
          message: "É nescessario inserir o nome",
        }),
        senha: z.string().min(2, {
        }),
        senhaConfirm: z.string().min(2, {
            message: "É nescessario que as senhas sejam iguais.",
          }),
        })
      

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        nome: "",
        senha: "",
        senhaConfirm: ""
        },
    })

    const showAlert = () => {
        setTimeout(() => {
        console.log('Alert')
        }, 2000);
        
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        form.reset({
        nome: '',  
        senha: '',
        senhaConfirm: ""
        })

    }


    return (
        <div className="flex flex-col items-center justify-center w-full h-[100vh] space-y-20">
      <h1 className="lg:text-7xl md:text-5x1 sm:text-4xl">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 lg:w-[40%] md:w-[50%] smLight:w-[90%]">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome" className="nome" {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type='password' placeholder="Senha" className="senha" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </Form>
    </div>  
    )
}