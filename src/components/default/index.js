import { Box, Img, Text } from '@chakra-ui/react'

export function DefaultChat() {
    return (
        <Box 
            w={"100%"} 
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            padding={"1.2rem"}
            bg={"#e7e7e7"}
        >
            <Box flexDirection={"column"} mt={"-6rem"} alignItems={"center"} justifyContent={"center"}>
                <Img src='/undraw1.svg' height={350} width={350} />
                <Box>
                    <Text fontSize={"2rem"} color={"#6c63ff"} fontWeight={"600"}>Chat App</Text>
                    <Text fontSize={"1.26rem"} color={"#6c63ff"} fontWeight={"500"}>Conecte-se e converse com quem você quiser!</Text>
                </Box>
            </Box>
        </Box>
    )
}