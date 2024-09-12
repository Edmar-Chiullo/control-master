"use client"

import AppAuth from '../controler/authApp'
import createUser from "@/controler/sqlite-controler/create-user";
import connectDb from "@/controler/autentication";
import { connect } from "http2";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import { z } from "zod"

const formSchema = z.object({
  login: z.string().min(2, {
    message: "É nescessario inserir o login",
  }),
  senha: z.string().min(2, {
    message: "É nescessario inserir a senha",
  }),
})

export default function Login() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      senha: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    //createUser(values)
    //connectDb()
    router.push('/pages/home')
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
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </Form>
    </div>  
  );
}
