'use server'
import isEqual from '@/lib/checkUsers'
import { UserLogin } from '@/lib/interfaces'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    try {        
        const users = await prisma.user.findMany()
        return users
    } catch (error) {
        return error
    }
}

async function queryUsers(props: UserLogin) {
    const users = await main()
    const user = isEqual(users, props)
    return user
}


export default queryUsers