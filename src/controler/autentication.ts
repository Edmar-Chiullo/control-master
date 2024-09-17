import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./app-key";

const usuario = {
    email: 'mft6254@gmail.com',
    password: 'mft046MPlogistica'
}

function connectDb() {
  const auth = getAuth(app)

  signInWithEmailAndPassword(auth, usuario.email, usuario.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(`${user.email} logado com sussesso!`)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode.email} ${errorMessage.email} Não foi possivel realizar o login!`)

  });
}


export default connectDb