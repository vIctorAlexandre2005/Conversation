import { auth } from '@/services/firebase';
import { Box, Text } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth);

    return (
        <Box 
            justifyContent={userLoggedIn?.email === user ? 'flex-end' : ''}
            /* bg={userLoggedIn?.email === user ? '#e7e7e7' : '#e7e7e7'} */
            display={"flex"} 
            p={"0.8rem"}
        >
            <Box 
                display={"flex"}
                flexDirection={"column"}
                padding={"4px"}
                maxW={"80%"}
                bg={userLoggedIn?.email === user ? 'bunker.600' : 'black.700'}
                borderRadius={userLoggedIn?.email === user ? "20px 10px 20px 20px" : "10px 20px 20px 20px"}
                boxShadow={"0px 0px 2px #212121"}
                wordBreak={"break-word"}
            >
                <Text fontSize={"1rem"} color={"white"}  margin={"5px 40px 5px 5px"}>
                    {message.message} {/* Accessing the message text */}
                </Text>
                <Text 
                    fontSize={"10px"} 
                    color={"white"}
                    textAlign={"right"} 
                    height={"15px"} 
                    margin={"-5px 5px 0"}
                >
                    {new Date(message.timestamp).toLocaleString()} {/* Formatting the timestamp */}
                </Text>
            </Box>
        </Box>
    );
}
