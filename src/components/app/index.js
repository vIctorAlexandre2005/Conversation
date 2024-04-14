import { Sidebar } from "../Sidebar";
import { Box, Button, Divider, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { ChatComponent } from "../chat";
import { useEffect, useState } from "react";

export function Content({ isOpenModal, handleInstall, onClose, installPrompt }) {
    const [userChat, setUserChat] = useState(null);
    
    return (
        <>
                <Box height={"100vh"} w={"100%"} display={"flex"}>
                    <Box flex={1} borderRight={"1px solid #03030353"}>
                        <Sidebar userChat={userChat} setUserChat={setUserChat} />
                    </Box>
                    <Box h={"100vh"} flex={4}>
                        <Box h={"100%"}>
                            <ChatComponent userChat={userChat} setUserChat={setUserChat} />
                        </Box>
                    </Box>
                </Box>
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
        </>
    )
}