import {Text, Flex} from '@chakra-ui/react'
import { DefaultChat } from '../default'
import { ChatHeader } from './chatHeader'
import { ChatBody } from './chatBody'
import { ChatFooter } from './chatFooter'

export function ChatComponent({ userChat }) {
    if(!userChat) return <DefaultChat />
    return (
        <Flex h={"100vh"} direction={"column"} w={"100%"}>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </Flex>
    )
}