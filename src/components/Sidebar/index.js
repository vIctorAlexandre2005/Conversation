import {Flex} from '@chakra-ui/react'
import { SidebarHeader } from './SidebarHeader'
import { SidebarChat } from './SidebarList';

export function Sidebar({ userChat, setUserChat }) {
    return (
        <Flex height={"100%"} bg={"#f6f6f6"} direction={"column"}>
            <SidebarHeader setUserChat={setUserChat} />
            <SidebarChat setUserChat={setUserChat} userChat={userChat} />
        </Flex>
    )
}