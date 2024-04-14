import {Text, Flex} from '@chakra-ui/react'
import { MobileContent } from '@/components/app/mobileIndex'
import { ChatHeader } from '@/components/chat/chatHeader'
import { ChatBody } from '@/components/chat/chatBody'
import { ChatFooter } from '@/components/chat/chatFooter'
import { ModalIndex } from '..'

export function MobileChat({ userChat }) {
    if(!userChat) return <ModalIndex />
    return (
        <Flex h={"100vh"} direction={"column"} w={"100%"}>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </Flex>
    )
}