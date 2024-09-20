"use client"

import { useStackLabelContext } from "@/app/context/userContext"
import queryUser from '@/controler/sqlite-controler/query-user';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { z } from "zod"

const formSchema = z.object({
  login: z.string().min(2, {
    message: "É nescessario inserir o login",
  }),
  senha: z.string().min(2, {
    message: "É nescessario inserir a senha",
  }),
})
//<Link href={'/pages/home/cadastro/users'}><span>Cadastre-se.</span></Link>


export default function Login() {
  const router = useRouter()
  const [alertMessage, setAlertMessage] = useState(false)
  const { stackLabel, setStackLabel} = useStackLabelContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      senha: ""
    },
  })

  const showAlert = () => {
    setTimeout(() => {
      setAlertMessage(false)
    }, 2000);
    
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    //createUser(values)
    queryUser(values).then(user => {
      if (user) { //user é um valor boleano.
        const stack = stackLabel.operadorName = values.login
        setStackLabel(stackLabel)
        router.push('/pages/home')
      } else {
        setAlertMessage(true)
        showAlert()
      }
    })
    
    form.reset({
      login: '',  
      senha: ''
    })

  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] space-y-20">
      <h1 className="lg:text-7xl md:text-5x1 sm:text-4xl">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 lg:w-[40%] md:w-[50%] smLight:w-[90%]">
          <FormField
            control={form.control}
            name="login"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Login</FormLabel>
                <FormControl>
                  <Input placeholder="Login" className="login" {...field} />
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
        { alertMessage &&
          <Alert className='w-96'>
            <AlertTitle className='text-[red]'>Erro!</AlertTitle>
            <AlertDescription className='text-[red]'>
              Usuário não encontrado.
            </AlertDescription>
          </Alert>
        }
      </Form>
    </div>  
  );
}
