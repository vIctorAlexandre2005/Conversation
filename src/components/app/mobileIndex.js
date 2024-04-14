import { Box, Button, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { useState } from "react";
import { ModalIndex } from "../ModalMobile";
import { DrawerMobile } from "../ModalMobile/chatModalMobile/drawer";

export function MobileContent({isOpenModal, onClose, handleInstall, installPrompt }) {
    const [userChat, setUserChat] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Box w={"100%"} display={"flex"}>
            {userChat ? <DrawerMobile setUserChat={setUserChat} userChat={userChat} /> : <ModalIndex isOpen={isOpen} setIsOpen={setIsOpen} userChat={userChat} setUserChat={setUserChat}  />}
            {installPrompt ? (
          <Modal isCentered isOpen={isOpenModal} onClose={onClose}>
            <ModalOverlay
              onClick={onClose}
              width={"100%"}
              height={"100%"}
              background={"#00000090"}
            />
            <ModalContent
              transition={"0.2s"}
              background={'white'}
              width={"24rem"}
            >
              <ModalHeader w={"100%"} marginBottom={"2rem"} display={"flex"}
                alignItems={"center"} justifyContent={"center"}
              >
                <Box gap={"12px"} display={"flex"}
                  alignItems={"center"} justifyContent={"center"}
                >
                  <Text fontWeight={"600"} color={"#06E441"} fontSize={"1.2rem"}>
                    Baixe o Chat App já!!
                  </Text>
                </Box>
              </ModalHeader>
              <ModalFooter width={"100%"} marginTop={"1rem"}>
                <Button
                  width={"100%"}
                  padding={"0.5rem"}
                  border={"none"}
                  borderRadius={"6px"}
                  background={"limegreen"}
                  color={"white"}
                  fontWeight={"bold"}
                  onClick={handleInstall}
                  _hover={{ background: 'green', transition: '0.3s' }}
                  gap={2}
                >
                  Baixar Chat App
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ) : (
          ''
        )}
        </Box>
    );
};