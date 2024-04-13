import { auth, provider } from "@/services/firebase"
import { Button } from "@chakra-ui/react";

export function LoginComponent() {
    function handleSignin() {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <>
        
    <Button onClick={handleSignin}>
        Login com o Google
    </Button>    
        
        </>
    )
}