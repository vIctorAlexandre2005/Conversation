import { db } from "@/services/firebase";
import { Avatar, Box, Divider, Img, Text } from "@chakra-ui/react";
import { useCollection } from "react-firebase-hooks/firestore";

const getUser = (users, userLogged) => {
  if (!users || !Array.isArray(users)) return null;
  return users.filter((user) => user !== userLogged?.email)[0];
};

export function ModalContacts({ id, users, user, setUserChat }) {
  const otherUserEmail = getUser(users, user);

  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", otherUserEmail),
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
      _hover={{ bg: "bunker.500", transition: "0.2s" }}
      gap={2}
      display={"flex"}
      onClick={handleNewChat}
      alignItems={"center"}
      p={"1rem"}
    >
      {avatarData ? (
        <Img
          src={avatarData?.photoUrl}
          h={"3rem"}
          w={"3rem"}
          borderRadius={"50%"}
        />
      ) : (
        <Avatar />
      )}
      <Text
        fontSize={"1.26rem"}
        color={"white"}
        fontWeight={"500"}
        textAlign={"left"}
      >
        {userName}
      </Text>
    </Box>
  );
}
