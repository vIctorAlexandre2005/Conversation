import { Box, Text, Img, Divider } from '@chakra-ui/react'

export function ChatHeader({ photoUrl, name }) {
    return (
        <>
        <Box 
            w={"100%"} 
            bg={"#f6f6f6"} 
            display={"flex"} 
            flexDir={"column"}
            zIndex={1}
        >
            <Box p={"1rem"} display={"flex"}  alignItems={"start"}>
                {photoUrl ? <Img src={photoUrl} alt='avatar' /> : ''}
                <Box>
                    <Text fontSize={"1.2rem"} color={"#333"} overflow={"hidden"} textAlign={"initial"} textOverflow={"ellipsis"}>
                        {name}
                    </Text>
                </Box>
            </Box>
            <Divider w={"99%"} border={"1px solid #452ad8"} />
        </Box>
        
        </>
    );
}