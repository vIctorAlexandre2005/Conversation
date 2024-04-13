import { db } from '@/services/firebase';
import { Box, Img, Text } from '@chakra-ui/react';
import { useCollection } from 'react-firebase-hooks/firestore';

const getUser = (users, userLogged) => {
    if (!users || !Array.isArray(users)) return null;
    return users.filter((user) => user !== userLogged?.email)[0];
}

export function SidebarChatItem({ id, users, user, setUserChat, active }) {
    const otherUserEmail = getUser(users, user);
    
    const [getUserItem] = useCollection(
        db.collection("users").where("email", "==", otherUserEmail)
    );

    const avatarData = getUserItem?.docs?.[0]?.data();
    const userName = otherUserEmail?.split("@")[0];

    function handleNewChat() {
        const userChat = {
            chatId: id,
            name: userName,
            photoURL: avatarData?.photoURL,
        };

        setUserChat(userChat);
    }

    return (
        <Box _hover={{ bg: '#212121' }} gap={6} display={"flex"} alignItems={"center"} onClick={handleNewChat} p={"1rem"}>
            {avatarData ? <Img src={avatarData?.photoURL} /> : ''}
            <Text fontSize={"1.26rem"} color={"white"} fontWeight={"500"}>{userName}</Text>
        </Box>
    );
}
