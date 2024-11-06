import { Box, Flex } from "@chakra-ui/react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarChat } from "./SidebarList";

export function Sidebar({ userChat, setUserChat }) {
  return (
    <Flex
      borderRadius={"8px"}
      height={"100%"}
      bg={"black.800"}
      direction={"column"}
    >
      <Box mb={"2rem"} p={"1rem"}>
        <SidebarHeader setUserChat={setUserChat} />
      </Box>
      <SidebarChat setUserChat={setUserChat} userChat={userChat} />
    </Flex>
  );
}
