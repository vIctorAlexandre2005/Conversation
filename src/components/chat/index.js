import { Text, Flex } from "@chakra-ui/react";
import { DefaultChat } from "../default";
import { ChatHeader } from "./chatHeader";
import { ChatBody } from "./chatBody";
import { ChatFooter } from "./chatFooter";
import { useEffect } from "react";

export function ChatComponent({ userChat, setUserChat }) {
  if (!userChat) return <DefaultChat />;
  console.log("user chat:", userChat);

  return (
    <Flex h={"100%"} p={"2rem"} direction={"column"} w={"100%"}>
      <ChatHeader photoURL={userChat?.photoUrl} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </Flex>
  );
}
