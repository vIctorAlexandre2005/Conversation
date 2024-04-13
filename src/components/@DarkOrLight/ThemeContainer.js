import { useThemeDark } from ".";
import { Box } from '@chakra-ui/react'

export function ThemeContainer({ children }) {
    const { darkMode } = useThemeDark();

    return (
        <Box 
            width={"100%"}
            height={"100%"}
            color={"white"}
            bg={darkMode ? '#212121' : '#f9f9f9'}
        >
            {children}
        </Box>
    )
}