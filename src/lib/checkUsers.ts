import { UserLogin } from "./interfaces";

export default function isEqual(propsData: any, props: UserLogin) {
    if (propsData) {
        const user = propsData.find((element: any) => props.login === element.login);
        if (user) {
            if (props.senha === user.senha) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return false;
}
