import { getDatabase, ref, set, push } from "firebase/database";
import { StackProps } from "@/lib/interfaces";
import app from "./app-key";

interface PlProps {
  Et_Number: string
  Local_Entrega: string
}

export default function writeUserData(data:StackProps) {
    const database = getDatabase(app);
    const postListRef = ref(database, 'masters');
    const newPostRef = push(postListRef);

    set(newPostRef, {
      data: data
    });
  }
