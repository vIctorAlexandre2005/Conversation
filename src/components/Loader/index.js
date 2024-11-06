import { Flex } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export function Loader() {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      bg={"black.950"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <PulseLoader color="#319ca9" size={40} />
    </Flex>
  );
}
