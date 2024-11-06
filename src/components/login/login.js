import { auth, provider } from "@/services/firebase";
import { handleSignin } from "@/utils/functions/Login";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Img,
  Text,
} from "@chakra-ui/react";

export function LoginComponent() {
  return (
    <Box
      w={"100%"}
      display={"flex"}
      bg={"black.950"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Box mt={"6rem"}>
        <Card bg={"black.900"} w={"100%"} maxW="lg">
          <CardHeader justifyContent={"center"} display={"flex"}>
            <Text color={"white"} fontWeight={"600"} fontSize={"1.5rem"}>
              Faça login para começar!
            </Text>
          </CardHeader>

          <CardBody>
            <Img
              src="/login.svg"
              h={"100%"}
              w={"100%"}
              objectFit={"cover"}
              alt="login"
            />
          </CardBody>

          <CardFooter>
            <Button
              w={"100%"}
              bg={"bunker.500"}
              onClick={handleSignin}
              color={"bunker.50"}
              _hover={{
                bg: "bunker.700",
              }}
              display={"flex"}
              alignItems={"center"}
            >
              Continue with Google{" "}
              <Img
                src="/icons-google.png"
                w={"1.5rem"}
                h={"1.5rem"}
                ml={"1rem"}
                alt="google"
              />
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </Box>
  );
}
