import { Content } from "@/components/app";
import { LoginComponent } from "@/components/login/login";
import { auth, db } from "@/services/firebase";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(user) {
      db.collection("users").doc(user.uid).set({
        email: user?.email,
        photoUrl: user?.photoURL,
      });
    }
  }, [user]);
  return (
   <>
   {!user ? (
    <LoginComponent />
  ) : (
    <Content />
  )}
   </>
  )
}