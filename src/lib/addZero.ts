export const addLeftZero = (value: number) => {
    const addZero = value <= 9 ? `0${value}` : value 
    
    return addZero
}