import { auth, db } from "@/services/firebase";
import { SmallAddIcon } from "@chakra-ui/icons";
import { Box, Divider, IconButton, Img, Modal, ModalBody, ModalContent, ModalHeader, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { MobileChat } from "./chatModalMobile";
import { ModalBodyMobile } from "./modalbody";
import * as EmailValidator from 'email-validator';


export function ModalIndex({ isOpen, setIsOpen,userChat, setUserChat }) {
    const [user] = useAuthState(auth);

    const getChatRef = () => {
        if (user && user.email) {
            return db.collection("chats").where("users", "array-contains", user.email);
        }
        return null;
    };

    const refChat = getChatRef();

    const [chatsSnapShot] = useCollection(refChat);

    const chatExists = (email) => {
        if (chatsSnapShot) {
            return chatsSnapShot.docs.some(doc => doc.data().users.includes(email));
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
    };
    return (
        <Modal size={"full"} isOpen={isOpen} isCentered>
                <ModalContent w={"100%"} height={"100vh"} bg={"white"}>
                    <ModalHeader w={"100%"}>
                        <Text fontWeight={"600"} color={"black"} fontSize={"1.26rem"}>Chat App</Text>

                        <Box p={"1rem"} justifyContent={"space-between"} display={"flex"}>
                            <Img
                                onClick={() => [auth.signOut(), setUserChat(null)]}
                                src={user?.photoURL}
                                h={35}
                                w={35}
                                borderRadius={"50%"}
                            />

                            <Box>
                                <IconButton as={"button"} icon={<SmallAddIcon color={"white"} />}
                                    onClick={handleCreateChat} bg={"#6C63FF"}
                                    _hover={{ bg: '#5036f5' }} fontWeight={"500"} fontSize={"1.2rem"} />
                            </Box>
                        </Box>
                    </ModalHeader>
                    <Divider w={"100%"} border={"2px solid #452ad8"} />

                    <ModalBody w={"100%"} bg={"white"} flexDir={"column"} display={"flex"}>
                      <ModalBodyMobile
                      userChat={userChat}
                      setUserChat={setUserChat}
                      />
                    </ModalBody>
                </ModalContent>
            </Modal>
    )
}