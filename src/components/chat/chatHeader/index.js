import { ModalBodyMobile } from "@/components/ModalMobile/modalbody";
import { ArrowBackIcon, AtSignIcon } from "@chakra-ui/icons";
import { Box, Text, Img, Divider, CloseButton, Button, Avatar } from "@chakra-ui/react";

export function ChatHeader({
  setUserChat,
  userChat,
  setIsOpen,
  photoURL,
  name,
}) {
  return (
    <>
      <Box
        w={"100%"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
        zIndex={1}
      >
        <Box p={"1rem"} gap={4} display={"flex"} alignItems={"center"}>
          <Button
            bg={"transparent"}
            _hover={{
              bg: "bunker.500",
            }}
            display={{
              tabletLandscape: "none",
              gb: "flex",
            }}
            onClick={() => setUserChat(null)}
          >
            <ArrowBackIcon boxSize={"1.5rem"} color={"white"} />
          </Button>
          {photoURL && (
            <Avatar name={name} src={photoURL} w={"3rem"} h={"3rem"} borderRadius={"50%"} />
          )}
          <Box>
            <Text
              fontSize={"1.2rem"}
              color={"bunker.50"}
              overflow={"hidden"}
              textAlign={"initial"}
              textOverflow={"ellipsis"}
            >
              {name}
            </Text>
          </Box>
        </Box>
        <Divider w={"99%"} border={"1px solid"} color={"bunker.300"} />
      </Box>
    </>
  );
}
