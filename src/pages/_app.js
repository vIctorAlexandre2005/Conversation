import { LoginComponent } from "@/components/login/login";
import { auth, db } from "@/services/firebase";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth'

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoUrl: user.photoURL,
      });
    }
  }, [user]);

  if (!user) return <LoginComponent />
  return (
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
  )
}
