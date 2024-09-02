import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, 'users');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
});
