
export interface StackProps {
    operadorName: string
    date: Date
    count: number
    countItem: number
    item: Record<number, object>
    subItem: Record<number, string>
}

export interface UserLogin {
    login: string
    senha: string
}