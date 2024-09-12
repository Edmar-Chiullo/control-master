'use server'
import { PrismaClient } from '@prisma/client'

interface UserProps {
    login: string
    senha: string
}

const prisma = new PrismaClient()

export default async function createUser(person: UserProps) {
  const user = await prisma.user.create({
    data: {
      login: person.login,
      senha: person.senha,
    },
  })
  console.log(user)
}