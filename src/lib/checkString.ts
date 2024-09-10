export default function containsPL(str: string): boolean {
    const regex = /\bPL/;
 
    return regex.test(str);
}