import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const signUp = async ({ firstName, email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "user"), {
      userId: user.uid,
      firstName,
      authProvider: "local",
      email,
    });
  } catch (err) {
    toast.error(err.code.split("/")[1].split("-").join(" "));
  }
};

export const login = async ({ email, password }) => {
  console.log(email, password);
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code.split("/")[1].split("-").join(" "));
  }
};

export const logout = async () => {
  signOut(auth);
};
