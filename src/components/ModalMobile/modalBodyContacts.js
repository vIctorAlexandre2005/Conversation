import { db } from "@/services/firebase";
import { Box, Divider, Img, Text } from "@chakra-ui/react";
import { useCollection } from "react-firebase-hooks/firestore";

const getUser = (users, userLogged) => {
    if (!users || !Array.isArray(users)) return null;
    return users.filter((user) => user !== userLogged?.email)[0];
};

export function ModalContacts({ id, users, user, setUserChat }) {
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
        <Box
            _hover={{ bg: '#d1d1d1', transition: '0.2s' }}
            gap={0}
            display={"flex"}
            onClick={handleNewChat}
            flexDirection={"column"}
            mb={"1rem"}
            p={"0.5rem"}
        >
            {avatarData ? <Img src={avatarData?.photoURL} /> : ''}
            <Text fontSize={"1.26rem"} color={"black"} fontWeight={"500"} textAlign={"left"}>
                {userName}
            </Text>
            <Divider w={"100%"} border={"1px solid #6C63FF"} />
        </Box>
    )
}