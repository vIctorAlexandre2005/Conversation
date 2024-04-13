import { Box, Text } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '@/services/firebase';
import { Message } from '@/components/Message';

export function ChatBody({ chatId }) {
    const [messagesRes] = useCollection(
        db.collection("chats").doc(chatId).collection("messages").orderBy("timestamp", "asc")
    );

    const refBody = useRef("");

    useEffect(() => {
        if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
            refBody.current.scrollTop =
                refBody.current.scrollHeight - refBody.current.offsetHeight;
        }
    }, [messagesRes]);

    return (
        <Box ref={refBody} flex={1} bg={"#e7e7e7"} overflow={"auto"}>
            {messagesRes?.docs.map((message) => (
                <Message
                    key={message.id}
                    user={message.data().user}
                    message={{
                        message: message.data().message,
                        timestamp: message.data().timestamp?.toDate().getTime(),
                    }}
                />
            ))}
        </Box>
    );
}
