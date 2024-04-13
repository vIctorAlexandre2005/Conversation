import { Box, Text } from '@chakra-ui/react'

export function DefaultChat() {
    return (
        <Box 
            w={"100%"} 
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={20}
            padding={"1.2rem"}
            bg={"black"}
        >
            <Text fontSize={"2rem"} textAlign={"center"}>
                Chat App
            </Text>
        </Box>
    )
}