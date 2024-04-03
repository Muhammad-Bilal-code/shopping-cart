import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { auth, db } from "./firbase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { Dispatch, SetStateAction } from "react";

const provider = new GoogleAuthProvider();

export interface UserData {
  email: string | null;
  name: string | null;
  imageUrl: string | null;
  uid: string;
  role: string;
  isNewUser: boolean;
}

export const handleGoogleAuthentication = async (
  setUser: Dispatch<SetStateAction<UserData | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const { user } = await signInWithPopup(auth, provider);
    const { uid, displayName, email, photoURL } = user;

    const payload = {
      email: email,
      name: displayName,
      imageUrl: photoURL,
      uid: uid,
      role: "client",
      isNewUser: true,
    };
    const docRef = doc(db, "users", uid);
    const userSnap = await getDoc(docRef);
    if (!userSnap.exists()) {
      await setDoc(docRef, payload);
      setUser(payload);
    } else {
      setUser(payload);
    }
  } catch (error: any) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};
