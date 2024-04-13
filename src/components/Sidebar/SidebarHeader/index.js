import { auth, db } from '@/services/firebase';
import {Text, Box, Img, Button, Divider, IconButton} from '@chakra-ui/react'
import * as EmailValidator from 'email-validator';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import { SmallAddIcon } from '@chakra-ui/icons'
export function SidebarHeader({ setUserChat }) {
    const [user] = useAuthState(auth);

    const getChatRef = () => {
        if (user && user.email) {
            return db.collection("chats").where("users", "array-contains", user.email);
        }
        return null;
    };

    const refChat = getChatRef();

    const [chatsSnapShot] = useCollection(refChat);

    const chatExists = (email) => {
        if (chatsSnapShot) {
            return chatsSnapShot.docs.some(doc => doc.data().users.includes(email));
        }
        return false;
    };

    function handleCreateChat() {
        const emailInput = prompt("Escreva o email desejado");
        if (!emailInput) return;

        if (!EmailValidator.validate(emailInput)) {
            return alert("Email inválido");
        } else if (emailInput === user?.email) {
            return alert("Insira um email diferente do seu");
        } else if (chatExists(emailInput)) {
            return alert("Chat já existe");
        }

        db.collection("chats").add({
            users: [user?.email, emailInput],
        });
    };
    return (
        <>
        <Box p={"1rem"} justifyContent={"space-between"} display={"flex"} bg={"#e7e7e7"} width={"100%"}>
            <Img 
                onClick={() => [auth.signOut(), setUserChat(null)]} 
                src={user?.photoURL} 
                h={35} 
                w={35} 
                borderRadius={"50%"}
            />

            <Box>
                <IconButton as={"button"} icon={<SmallAddIcon color={"white"} />} 
                onClick={handleCreateChat} bg={"#6C63FF"} 
                _hover={{ bg: '#5036f5' }} fontWeight={"500"} fontSize={"1.2rem"} />
            </Box>
            
        </Box>
        
        <Divider width={"100%"} border={"1px solid #6C63FF"} />
        </>
    )
}