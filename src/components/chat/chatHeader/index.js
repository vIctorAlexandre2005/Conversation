import { Box, Text, Img } from '@chakra-ui/react'

export function ChatHeader({ photoUrl, name }) {
    return (
        <Box 
            w={"100%"} 
            bg={"limegreen"} 
            p={"1rem"} 
            display={"flex"} 
            justifyContent={"space-between"} 
            alignItems={"center"}
            zIndex={1}
        >
            <Box display={"flex"} alignItems={"center"}>
                {photoUrl ? <Img src={photoUrl} alt='avatar' /> : ''}
                <Box>
                    <Text fontSize={"1.2rem"} overflow={"hidden"} textOverflow={"ellipsis"}>
                        {name}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}