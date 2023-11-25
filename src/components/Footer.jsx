import React from "react";
import {
  Box,
  Flex,
  Link,
  StackDivider,
  Text,
  Image,
  HStack,
  Center,
} from "@chakra-ui/react";

import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";

export const Footer = () => {
  return (
    <>
      <Box bg="#08376B" color="white" px={12} py={5}>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box flex="1 0 100%" maxWidth="200px" ml={1} mb={6}></Box>
          <Box flex="1 0 100%" maxWidth="160px" mb={6}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Social networks
            </Text>
            <HStack>
              <Center>
                <Image h="30px" src={Linkedin} />
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/sara-manuela-pineda-montoya-3aa50a276/"
                >
                  LinkedIn
                </Link>
              </Center>
            </HStack>
            <br />
            <HStack>
              <Center>
                <Image h="30px" src={Github} />
                <Link target="_blank" href="https://github.com/sara20manu">
                  GitHub
                </Link>
              </Center>
            </HStack>
            <br />
            <HStack>
              <Center></Center>
            </HStack>
          </Box>
        </Flex>
      </Box>
      <StackDivider h="1px" borderColor="gray.200" />
      <Box bg="#eaebee" color="white">
        <Flex ml={4} justify="space-between">
          <HStack spacing={2}></HStack>
          <Text fontSize="xs" mr={4} color="#6b0837">
            ©2023
          </Text>
        </Flex>
      </Box>
    </>
  );
};
