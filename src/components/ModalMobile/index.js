import { auth, db } from "@/services/firebase";
import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { MobileChat } from "./chatModalMobile";
import { ModalBodyMobile } from "./modalbody";
import * as EmailValidator from "email-validator";
import { IoPersonAddSharp } from "react-icons/io5";
import { ButtonAddContact } from "./ButtonAddContact";

export function ModalIndex({ isOpen, setIsOpen, userChat, setUserChat }) {
  const [user] = useAuthState(auth);

  const getChatRef = () => {
    if (user && user.email) {
      return db
        .collection("chats")
        .where("users", "array-contains", user.email);
    }
    return null;
  };

  const refChat = getChatRef();

  const [chatsSnapShot] = useCollection(refChat);

  const chatExists = (email) => {
    if (chatsSnapShot) {
      return chatsSnapShot.docs.some((doc) => doc.data().users.includes(email));
    }
    return false;
  };

  function handleCreateChat() {
    const emailInput = prompt("Escreva o email desejado");
    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("Email inválido");
    } else if (emailInput === user?.email) {
      return alert("Insira um email diferente do seu");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe");
    }

    db.collection("chats").add({
      users: [user?.email, emailInput],
    });
  }
  return (
    <Modal size={"full"} isOpen={isOpen}>
      <ModalContent overflowX={"hidden"} w={"100%"} bg={"black.950"}>
        <ModalHeader mb={"2rem"} w={"100%"}>
          <Box justifyContent={"space-between"} display={"flex"}>
            <Flex align={"center"} gap={2}>
              <Img
                onClick={() => [auth.signOut(), setUserChat(null)]}
                src={user?.photoURL}
                h={50}
                w={50}
                borderRadius={"50%"}
              />
              <Text color={"white"}>{user?.displayName}</Text>
            </Flex>
          </Box>
        </ModalHeader>

        <ModalBody w={"100%"} p={0} flexDir={"column"} display={"flex"}>
          <ModalBodyMobile userChat={userChat} setUserChat={setUserChat} />
        </ModalBody>
        <ModalFooter>
          <Box /* bottom={"50px"} */ left={0}>
            <Button
              p={"1.5rem"}
              borderRadius={"20px"}
              onClick={handleCreateChat}
              bg={"bunker.500"}
              _hover={{ bg: "bunker.600" }}
              fontWeight={"500"}
            >
              <IoPersonAddSharp size={32} color={"white"} />
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
