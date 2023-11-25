import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export function Header() {
  return (
    <Box>
      <VStack spacing={2}>
        <Heading fontWeight="300" fontSize="26px" letterSpacing="-0.5px">
          Lista de Tareas
        </Heading>
      </VStack>
    </Box>
  );
}
