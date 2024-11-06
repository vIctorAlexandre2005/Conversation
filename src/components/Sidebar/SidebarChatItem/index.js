import { db } from "@/services/firebase";
import { getUser } from "@/utils/functions/getUsers";
import { Avatar, Box, Img, Text } from "@chakra-ui/react";
import { useCollection } from "react-firebase-hooks/firestore";

export function SidebarChatItem({ id, users, user, setUserChat, active }) {
  const otherUserEmail = getUser(users, user);

  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", otherUserEmail),
  );

  console.log("OTHER USER EMAIL:", getUserItem);

  const avatarData = getUserItem?.docs?.[0]?.data();
  const userName = otherUserEmail?.split("@")[0];

  console.log("AVATAR DATA:", avatarData);

  function handleNewChat() {
    const userChat = {
      chatId: id,
      name: userName,
      photoURL: avatarData?.photoUrl,
    };

    setUserChat(userChat);
  }

  return (
    <Box
      _hover={{ bg: "bunker.500", transition: "0.2s" }}
      bg={active && "bunker.600"}
      gap={4}
      display={"flex"}
      alignItems={"center"}
      onClick={handleNewChat}
      p={"1rem"}
    >
      {avatarData ? (
        <Img
          src={avatarData?.photoUrl}
          h={"2.5rem"}
          w={"2.5rem"}
          borderRadius={"50%"}
        />
      ) : (
        ""
      )}
      <Text fontSize={"1.26rem"} color={"white"} fontWeight={"500"}>
        {userName}
      </Text>
    </Box>
  );
}
