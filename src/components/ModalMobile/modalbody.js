import { auth, db } from "@/services/firebase";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { ModalContacts } from "./modalBodyContacts";
import { useEffect, useState } from "react";
import { MoonLoader, PulseLoader } from "react-spinners";
import { Loader } from "../Loader";

export function ModalBodyMobile({ userChat, setUserChat }) {
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(true);

    let refChat = db.collection("chats");

    if (user?.email) {
        refChat = refChat.where("users", "array-contains", user?.email);
    }

    const [chatsSnapShot] = useCollection(refChat);
    useEffect(() => {
        if (chatsSnapShot) {
            setLoading(false);
        }
    }, [chatsSnapShot])

    return (
        <Flex overflow={"auto"} overflowX={"hidden"} direction={"column"} w={"100%"} h={"100%"}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {chatsSnapShot?.docs.map((item, index) => (
                        <Box w={"100%"} key={index}>
                            <Divider w={"100%"} border={"1px solid"} color={"bunker.500"} />
                            <ModalContacts
                                id={item.id}
                                users={item.data().users}
                                user={user}
                                setUserChat={setUserChat}
                                active={userChat?.chatId === item.id ? "limegreen" : ''}
                            />
                        </Box>
                    ))}
                </>
            )}
        </Flex>
    )
}