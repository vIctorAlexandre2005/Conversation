import { Button } from "@chakra-ui/react";

export function ButtonAddContact() {
  return (
    <Button
      w={"100%"}
      bottom={0}
      right={0}
      bg={"bunker.500"}
      _hover={{
        bg: "bunker.700",
      }}
      color={"bunker.50"}
    >
      Adicionar contato
    </Button>
  );
}
