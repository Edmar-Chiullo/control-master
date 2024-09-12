import { string } from "zod"

class StackLabel {
    operadorName: string
    date: Date
    count: number
    countItem: number
    item: Record<number, object>
    subItem: Record<number, string>
    constructor() {
        this.operadorName = ''
        this.date = new Date()
        this.count = 0
        this.countItem = 0
        this.item = {}
        this.subItem = {}
    }

    pushItem(labelNumbar: string) {
        this.subItem[this.countItem] = labelNumbar
        this.countItem++
    }

    pushLocal(local: string) {
        this.subItem[this.countItem] = local
        this.countItem++
    }

    pushStreet(street: string) {
        this.subItem[this.countItem] = street
        this.countItem++
    }

    pushObjectItem() {
        this.item[this.count] = this.subItem
        this.subItem = {}
        this.countItem = 0
        this.count++
    }
    
    // pop() {
    //     if (this.isEmpty()) return undefined
    //     this.count--
    //     const result = this.item[this.count]
    //     delete this.item[this.count]
    //     return result
    // }

    isEmpty() {
        return this.count === 0
    }

    clear() {
        this.item = {}
        this.count = 0
        this.countItem = 0
    }
}

export default StackLabel