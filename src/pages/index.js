import { Content } from "@/components/app";
import { MobileContent } from "@/components/app/mobileIndex";
import { LoginComponent } from "@/components/login/login";
import { auth, db } from "@/services/firebase";
import { Box, Button, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
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

  const [installPrompt, setInstallPrompt] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  function onClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        setInstallPrompt(event);
      });

      window.addEventListener('appinstalled', (event) => {
        console.log('App installed');
      });

      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  }, []);

  function handleInstall() {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setInstallPrompt(null);
      });
    }
  };
  return (
   <>
   {installPrompt ? (
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
              onClick={onClose}
              width={"100%"}
              height={"100%"}
              background={"#00000090"}
            />
            <ModalContent
              transition={"0.2s"}
              background={'white'}
              width={"24rem"}
            >
              <ModalHeader w={"100%"} marginBottom={"2rem"} display={"flex"}
                alignItems={"center"} justifyContent={"center"}
              >
                <Box gap={"12px"} display={"flex"}
                  alignItems={"center"} justifyContent={"center"}
                >
                  <Text fontWeight={"600"} color={"#06E441"} fontSize={"1.2rem"}>
                    Baixe o Chat App já!!
                  </Text>
                </Box>
              </ModalHeader>
              <ModalFooter width={"100%"} marginTop={"1rem"}>
                <Button
                  width={"100%"}
                  padding={"0.5rem"}
                  border={"none"}
                  borderRadius={"6px"}
                  background={"limegreen"}
                  color={"white"}
                  fontWeight={"bold"}
                  onClick={handleInstall}
                  _hover={{ background: 'green', transition: '0.3s' }}
                  gap={2}
                >
                  Baixar Chat App
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ) : (
          ''
        )}
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