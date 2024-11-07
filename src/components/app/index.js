import { Sidebar } from "../Sidebar";
import {
  Box,
  Button,
  Divider,
  Flex,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { ChatComponent } from "../chat";
import { useEffect, useState } from "react";
import { useContextUserChat } from "../Context";

export function Content({
  isOpenModal,
  handleInstall,
  onClose,
  installPrompt,
}) {
  const { userChat, setUserChat } = useContextUserChat();
  return (
    <>
      <Flex bg={"black.950"} height={"100%"} w={"100%"}>
        <Box flex={{ tablet: 2, tabletLandscape: 1 }}>
          <Sidebar userChat={userChat} setUserChat={setUserChat} />
        </Box>

        <Box h={"100vh"} flex={3}>
          <ChatComponent userChat={userChat} setUserChat={setUserChat} />
        </Box>
      </Flex>
    </>
  );
}
