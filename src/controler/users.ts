import { getDatabase, ref, set, push, onValue, get, child } from "firebase/database";
import { StackProps } from "@/lib/interfaces";
import app from "./app-key";

interface UserProps {
  login: string
  password: string
}



export function createUser(data: UserProps) {
  const database = getDatabase(app);
  const postListRef = ref(database, 'users');
  const newPostRef = push(postListRef);

  set(newPostRef, {
    data: data
  });
}

export async function getUser(values: UserProps) {
  let userLogin
  
  const database = ref(getDatabase(app));
  await get(child(database, 'users')).then((snapshot) => {
    const users = Object.values(snapshot.val())
    users.map((user:any) => {
      const us = Object.values(user)
      us.map((element:any) => {
        if  (values.login === element.login) userLogin = element
      })
    })
  });

  return userLogin
}
  


