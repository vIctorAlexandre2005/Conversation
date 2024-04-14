import { ModalBodyMobile } from '@/components/ModalMobile/modalbody';
import { ArrowBackIcon, AtSignIcon } from '@chakra-ui/icons';
import { Box, Text, Img, Divider, CloseButton, Button } from '@chakra-ui/react'

export function ChatHeader({ setUserChat, userChat ,setIsOpen, photoUrl, name }) {
    return (
        <>
        <Box 
            w={"100%"} 
            bg={"#f6f6f6"} 
            display={"flex"} 
            flexDir={"column"}
            justifyContent={"space-between"}
            zIndex={1}
        >
            <Box p={"1rem"} gap={4} display={"flex"} alignItems={"center"}>
                <Button display={{ tabletLandscape: 'none', gb: 'flex' }} onClick={() => setUserChat(null)}>
                    <ArrowBackIcon boxSize={"1.5rem"} color={"black"} />
                </Button>
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