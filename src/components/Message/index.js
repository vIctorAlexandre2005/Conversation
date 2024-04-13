import { auth } from '@/services/firebase';
import { Box, Text } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth);

    return (
        <Box 
            justifyContent={userLoggedIn?.email === user ? 'flex-end' : ''}
            bg={userLoggedIn?.email === user ? '#02ad41' : '#02ad41'}
            display={"flex"} 
            p={"0.8rem"}
        >
            <Box 
                display={"flex"}
                flexDirection={"column"}
                padding={"4px"}
                maxW={"80%"}
                bg={"#fff"} 
                borderRadius={"16px"}
                wordBreak={"break-word"}
            >
                <Text fontSize={"1rem"} color={"black"} margin={"5px 40px 5px 5px"}>
                    {message.message} {/* Accessing the message text */}
                </Text>
                <Text fontSize={"10px"} color={"black"} textAlign={"right"} height={"15px"} margin={"-5px 5px 0"}>
                    {new Date(message.timestamp).toLocaleString()} {/* Formatting the timestamp */}
                </Text>
            </Box>
        </Box>
    );
}
