import { auth, db } from "@/services/firebase";
import {
  Text,
  Box,
  Img,
  Button,
  Divider,
  IconButton,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import * as EmailValidator from "email-validator";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { SmallAddIcon } from "@chakra-ui/icons";
import { IoPersonAddSharp } from "react-icons/io5";
import { ModalInputEmail } from "./modal";
import { useState } from "react";

export function SidebarHeader({ setUserChat }) {
  const [user] = useAuthState(auth);
  const [emailInput, setEmailInput] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleChangeEmail(e) {
    setEmailInput(e.target?.value);
  }

  

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
    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("Email inválido");
    }  
    
    if (emailInput === user?.email) {
      return alert("Insira um email diferente do seu");
    } 
    
    if (chatExists(emailInput)) {
      return alert("Chat já existe");
    }

    db.collection("chats").add({
      users: [user?.email, emailInput],
    });

    onClose();
  }
  return (
    <>
      <Box
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        width={"100%"}
      >
        <Flex align={"center"} direction={"column"} gap={2}>
          <Img
            onClick={() => [auth.signOut(), setUserChat(null)]}
            src={user?.photoURL}
            h={50}
            w={50}
            borderRadius={"50%"}
          />
          <Text color={"white"} fontWeight={600}>
            {user?.displayName}
          </Text>
        </Flex>

        <Box>
          <IconButton
            p={"1rem"}
            as={"button"}
            icon={<IoPersonAddSharp size={24} color="white" />}
            onClick={onOpen}
            bg={"bunker.600"}
            _hover={{ bg: "bunker.700" }}
            fontWeight={"500"}
            fontSize={"1.2rem"}
          />
        </Box>
      </Box>

      {isOpen && (
        <ModalInputEmail 
          isOpen={isOpen} 
          onClose={onClose} 
          handleCreateChat={handleCreateChat} 
          emailInput={emailInput} 
          handleChangeEmail={handleChangeEmail}
        />
      )}
    </>
  );
}
