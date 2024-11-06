import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ModalIndex } from "../ModalMobile";
import { DrawerMobile } from "../ModalMobile/chatModalMobile/drawer";

export function MobileContent({
  isOpenModal,
  onClose,
  handleInstall,
  installPrompt,
}) {
  const [userChat, setUserChat] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box w={"100%"} display={"flex"}>
      {userChat ? (
        <DrawerMobile setUserChat={setUserChat} userChat={userChat} />
      ) : (
        <ModalIndex
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          userChat={userChat}
          setUserChat={setUserChat}
        />
      )}
    </Box>
  );
}
