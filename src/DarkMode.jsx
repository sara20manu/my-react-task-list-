import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isTheme = colorMode === "dark";

  return (
    <IconButton
      mt={1}
      borderRadius="0"
      color="#08376B"
      bg="#F5F5F5"
      icon={isTheme ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      _hover={{ color: "#08376B", fontSize: "22px" }}
    />
  );
};
