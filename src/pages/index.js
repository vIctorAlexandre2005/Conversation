import { Loader } from "@/components/Loader";
import { Content } from "@/components/app";
import { MobileContent } from "@/components/app/mobileIndex";
import { LoginComponent } from "@/components/login/login";
import { auth, db } from "@/services/firebase";
import { ModalInstallPwa } from "@/utils/Modals/pwa";
import { usePWA } from "@/utils/functions/usePWA";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { PulseLoader } from "react-spinners";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user?.email,
        photoUrl: user?.photoURL,
      });
    }
  }, [user]);

  const [isOpenModal, setIsOpenModal] = useState(true);
  function onClose() {
    setIsOpenModal(false);
  }

  const installPrompt = usePWA();

  function handleInstall() {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
      });
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {installPrompt && (
        <ModalInstallPwa
          isOpenModal={isOpenModal}
          onClose={onClose}
          handleInstall={handleInstall}
        />
      )}
      {!user ? (
        <LoginComponent />
      ) : (
        <>
          {isMobile ? (
            <Box w={"100%"}>
              <MobileContent
                isOpen={isOpenModal}
                onClose={onClose}
                handleInstall={handleInstall}
                installPrompt={installPrompt}
              />
            </Box>
          ) : (
            <Content
              isOpen={isOpenModal}
              onClose={onClose}
              handleInstall={handleInstall}
              installPrompt={installPrompt}
            />
          )}
        </>
      )}
    </>
  );
}
