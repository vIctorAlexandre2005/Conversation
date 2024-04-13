import { Button, Box, Text, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input} from '@chakra-ui/react';
import { auth, db } from '@/services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState } from 'react';
import firebase from "firebase/compat/app";


export function ChatFooter({ chatId }) {
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();

        db.collection("chats").doc(chatId).collection("messages").add({
            message: message,
            user: user.email,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setMessage("");
    };

    return (
        <Box
            w={"100%"}
            bottom={0}
            p={"1.5rem"}
            display={"flex"}
            bg={"green"}
        >
            <FormControl gap={12} display={"flex"} onSubmit={handleSendMessage}>
                <Input 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder='Mensagem' 
                    color={"black"}
                    _focus={{ border: '1px solid limegreen' }}
                    bg={"white"}
                />
                <Button bg={"limegreen"} type='button' _hover={{ bg: '#02ad41' }} color={"white"} onClick={handleSendMessage}>Enviar</Button>
            </FormControl>
        </Box>
    )
}