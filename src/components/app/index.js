import { Sidebar } from "../Sidebar";
import {Box, Divider} from '@chakra-ui/react'
import { ChatComponent } from "../chat";
import { useState } from "react";

export function Content() {
    const [userChat, setUserChat] = useState(null)
    return (
        <Box height={"100vh"} display={"flex"}>
            <Box flex={1} borderRight={"1px solid #03030353"}>
            <Sidebar userChat={userChat} setUserChat={setUserChat} />
            </Box>
            <Box h={"100vh"} flex={4}>
                <Box h={"100%"}>
            <ChatComponent userChat={userChat} setUserChat={setUserChat} />
            </Box>
            </Box>
        </Box>
    )
}