import {Box, Flex, Text} from "@chakra-ui/react";

const Header = () => {
    return (
        <Flex>
            <Box>
                Logo
            </Box>
            {/* Search Bar */}
            <Box>

            </Box>
            {/* Icon */}
            <Flex>
                <Box>Imagem</Box>
                <Text>Sobre</Text>
            </Flex>
            <Flex>
                {/* Ícone de Bandeira */}
                <Box></Box>
                {/* Ícone de Troca de Tema */}
                <Box></Box>
            </Flex>
        </Flex>
    )
}

export default Header
