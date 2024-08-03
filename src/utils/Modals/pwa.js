import { Box, Button, Img, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

export function ModalInstallPwa({ isOpenModal, onClose, handleInstall }) {
    return (
        <Modal isCentered isOpen={isOpenModal} size={"lg"} onClose={onClose}>
            <ModalOverlay
                onClick={onClose}
                width={"100%"}
                height={"100%"}
                background={"#00000090"}
            />
            <ModalContent
                transition={"0.2s"}
                background={'black.950'}
                width={"100%"}
            >
                <ModalHeader w={"100%"} marginBottom={"2rem"} display={"flex"}
                    alignItems={"center"} justifyContent={"center"}
                >
                    <Box gap={"12px"} display={"flex"}
                        alignItems={"center"} justifyContent={"center"}
                    >
                        <Text fontWeight={"600"} color={"bunker.400"} fontSize={"1.2rem"}>
                            Baixe o Chat App já!!
                        </Text>
                    </Box>
                </ModalHeader>
                <ModalBody display={"flex"} justifyContent={"center"}>
                    <Img src="/download.svg" h={"75%"} w={"75%"} objectFit={"cover"} />
                </ModalBody>
                <ModalFooter gap={4} width={"100%"} marginTop={"1rem"}>
                    <Button
                        width={"100%"}
                        padding={"0.5rem"}
                        border={"none"}
                        borderRadius={"6px"}
                        background={"red.500"}
                        color={"white"}
                        fontWeight={"bold"}
                        onClick={onClose}
                        _hover={{ background: 'red.600', transition: '0.3s' }}
                        gap={2}
                    >
                       Fechar
                    </Button>
                    <Button
                        width={"100%"}
                        padding={"0.5rem"}
                        border={"none"}
                        borderRadius={"6px"}
                        background={"bunker.500"}
                        color={"white"}
                        fontWeight={"bold"}
                        onClick={handleInstall}
                        _hover={{ background: 'bunker.600', transition: '0.3s' }}
                        gap={2}
                    >
                        Instalar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}