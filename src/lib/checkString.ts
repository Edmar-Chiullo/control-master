export default function containsPL(str: string): boolean {
    const regex = /\bEL/;
 
    return regex.test(str);
}