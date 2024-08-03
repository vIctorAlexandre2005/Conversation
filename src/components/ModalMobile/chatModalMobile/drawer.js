import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Flex } from "@chakra-ui/react";
import { ModalIndex } from "..";
import { ChatHeader } from "@/components/chat/chatHeader";
import { ChatBody } from "@/components/chat/chatBody";
import { ChatFooter } from "@/components/chat/chatFooter";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export function DrawerMobile({ userChat, setUserChat }) {
    const [isOpen, setIsOpen] = useState(true);

    console.log("MOBILE USER CHAT PHOTO:", userChat)

    return (
        <Drawer size={"full"} isOpen={isOpen} placement="left">
            <DrawerContent bg={"black.950"} w={"100%"}>
                <DrawerHeader>
                    <ChatHeader 
                        setUserChat={setUserChat} 
                        setIsOpen={setIsOpen} 
                        photoURL={userChat?.photoUrl} 
                        name={userChat?.name} 
                    />
                </DrawerHeader>
                <DrawerBody w={"100%"}>
                    <ChatBody chatId={userChat?.chatId} />
                </DrawerBody>
                <DrawerFooter>
                    <ChatFooter chatId={userChat?.chatId} />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}