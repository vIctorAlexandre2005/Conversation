import { Drawer, DrawerBody, DrawerContent, Flex } from "@chakra-ui/react";
import { ModalIndex } from "..";
import { ChatHeader } from "@/components/chat/chatHeader";
import { ChatBody } from "@/components/chat/chatBody";
import { ChatFooter } from "@/components/chat/chatFooter";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export function DrawerMobile({ userChat, setUserChat }) {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if(!userChat) {
            <MoonLoader size={30} color="purple" />
        } 
    }, [])
    return (
        <Drawer size={"full"} isOpen={isOpen} placement="left">
            <DrawerContent w={"100%"}>
                <DrawerBody w={"100%"}>
                    <Flex h={"100vh"} direction={"column"} w={"100%"}>
                        <ChatHeader setUserChat={setUserChat} setIsOpen={setIsOpen} photoURL={userChat?.photoURL} name={userChat?.name} />
                        <ChatBody chatId={userChat?.chatId} />
                        <ChatFooter chatId={userChat?.chatId} />
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}