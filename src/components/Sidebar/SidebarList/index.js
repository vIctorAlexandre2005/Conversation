import { Text, Flex, Img, Box, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { auth, db } from '@/services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore'; // corrected the import
import { SidebarChatItem } from '../SidebarChatItem';

export function SidebarChat({ userChat, setUserChat }) {
    const [user] = useAuthState(auth);

    let refChat = db.collection("chats");

    if (user?.email) {
        refChat = refChat.where("users", "array-contains", user.email);
    }

    const [chatsSnapShot] = useCollection(refChat);

    return (
        <Flex overflowX={"scroll"} direction={"column"} bg="#f6f6f6" h={"100%"}>
            {chatsSnapShot?.docs.map((item, index) => (
                <Box w={"100%"} key={index}>
                    <SidebarChatItem
                        id={item.id}
                        users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? "limegreen" : ''}
                    />
                    <Divider w={"100%"} border={"1px solid #6C63FF"} />
                </Box>
            ))}
        </Flex>
    );
}
