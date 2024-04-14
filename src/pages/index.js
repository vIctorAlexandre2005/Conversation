import { Content } from "@/components/app";
import { MobileContent } from "@/components/app/mobileIndex";
import { LoginComponent } from "@/components/login/login";
import { auth, db } from "@/services/firebase";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {

  const [user, loading] = useAuthState(auth);
  const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

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
    <>
    {isMobile ? (
      <Box w={"100%"}>
        <MobileContent />
      </Box>
    ) : (
      <Content />
    )}
    </>
  )}
   </>
  )
}