import { Button, Box, Text, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Icon, IconButton, Img} from '@chakra-ui/react';
import { auth, db } from '@/services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react';
import firebase from "firebase/compat/app";
import * as ReactIcons from 'react-icons'

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
          if (event?.key === 'Enter') {
            handleSendMessage();
          };
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    return (
        <Box
            w={"100%"}
            bottom={0}
            p={"0.5rem"}
            display={"flex"}
            bg={"#fff"}
        >
            <FormControl gap={12} display={"flex"} onSubmit={handleSendMessage}>
                <Input 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder='Mensagem' 
                    color={"black"}
                    _focus={{ border: '1px solid #452ad8' }}
                    bg={"white"}
                />
                <Button 
                    bg={"#452ad8"} 
                    p={"1rem"} 
                    type='button' 
                    _hover={{ bg: '#5941d2' }} 
                    color={"white"} 
                    onClick={handleSendMessage}
                >
                   <Img src='/paperwhite.svg' height={30} w={30} />
                </Button>
            </FormControl>
        </Box>
    )
}