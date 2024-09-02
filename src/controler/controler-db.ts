import { getDatabase, ref, set, push } from "firebase/database";
import app from "./app-key";

interface PlProps {
  Et_Number: string
  Local_Entrega: string
}

export default function writeUserData(pl:PlProps) {
    const database = getDatabase(app);
    const postListRef = ref(database, 'users');
    const newPostRef = push(postListRef);

    set(newPostRef, {
      Et_Number: pl.Et_Number,
      Local_Entrega: pl.Local_Entrega
    });
  }
