import {
  Button,
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Icon,
  IconButton,
  Img,
  Divider,
} from "@chakra-ui/react";
import { auth, db } from "@/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import * as ReactIcons from "react-icons";

export function ChatFooter({ chatId }) {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e?.preventDefault();

    // Verifica se a mensagem está vazia
    if (message.trim() === "") {
      return; // Retorna sem fazer nada se a mensagem estiver vazia
    }

    db.collection("chats").doc(chatId).collection("messages").add({
      message: message,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event?.key === "Enter") {
        handleSendMessage();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Box w={"100%"} bottom={0} display={"flex"} flexDir={"column"}>
      <Divider
        color={"black.800"}
        w={"100%"}
        border={"1px solid"}
        mb={"1rem"}
      />
      <FormControl gap={12} display={"flex"} onSubmit={handleSendMessage}>
        <Input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Mensagem"
          border={"none"}
          _placeholder={{ color: "black.500" }}
          focusBorderColor="none"
          color={"white"}
          p={"1.5rem"}
          bg={"black.700"}
        />
        <Button
          bg={"bunker.400"}
          p={"1rem"}
          type="button"
          _hover={{ bg: "bunker.500" }}
          color={"white"}
          onClick={handleSendMessage}
        >
          <Img src="/paperwhite.svg" height={30} w={30} />
        </Button>
      </FormControl>
    </Box>
  );
}
