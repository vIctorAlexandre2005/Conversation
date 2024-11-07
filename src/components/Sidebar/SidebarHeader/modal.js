import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

export function ModalInputEmail({ isOpen, onClose, handleCreateChat, emailInput, handleChangeEmail }) {

    const hasEmail = emailInput.includes("@gmail.com");

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent bg={"black.950"}>
                <ModalHeader color={"bunker.400"}>Insira o email do contato</ModalHeader>
                <ModalBody>
                    <Input 
                        placeholder="Adicione o email" 
                        type="email"
                        color={"white"}
                        value={emailInput} 
                        onChange={handleChangeEmail} 
                    />
                </ModalBody>

                <ModalFooter display={"flex"} alignItems={"center"} gap={4} justifyContent={"center"} w={"100%"}>
                    <Button 
                        isDisabled={!hasEmail} 
                        w={"100%"} 
                        colorScheme="bunker" 
                        onClick={handleCreateChat}
                    >
                        Adicionar
                    </Button>
                    <Button 
                        w={"100%"} 
                        variant="ghost" 
                        _hover={{ 
                            bg: "red.100" 
                        }} 
                        colorScheme={"red"} 
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}