import { Link } from "react-router-dom";
import { FcHome, FcList, FcTodoList, FcAbout } from "react-icons/fc";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { BiSolidHomeSmile } from "react-icons/bi";
import { Flex, Image, IconButton, Center, Avatar } from "@chakra-ui/react";
import { DarkMode } from "../DarkMode";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../images/logo.png";
import { useState } from "react";
import Logo2 from "../images/logo2.png";
import { useAuth } from "../context/authContext";

export function Menu() {
  const [display, changeDisplay] = useState("none");

  const { isAuthenticated, logout } = useAuth();

  return (
    <Flex justify="space-between">
      <Link to="/">
        <Image ml={6} h="85px" w="90px" src={Logo} alt="Todo App" />
      </Link>
      <Flex pos="absolute" top="1rem" right="1rem" align="center">
        <DarkMode />
        <Avatar mt={1} ml={1} pb={1} />
        <Flex mt={1} display={["none", "none", "flex", "flex"]}>
          <Link to="/">
            <IconButton
              ml={3}
              borderRadius="0"
              bg="#F5F5F5"
              icon={<BiSolidHomeSmile size="2rem" color="#08376B" />}
            />
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/todoapp">
                <IconButton
                  ml={4}
                  borderRadius="0"
                  bg="#F5F5F5"
                  icon={<FcTodoList size="2rem" />}
                />
              </Link>
              <Link to="/tasks">
                <IconButton
                  ml={4}
                  borderRadius="0"
                  bg="#F5F5F5"
                  icon={<FcList size="2rem" />}
                />
              </Link>
              <Link to="/about">
                <IconButton
                  ml={4}
                  borderRadius="0"
                  bg="#F5F5F5"
                  icon={<FcAbout size="2rem" />}
                />
              </Link>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                <IconButton
                  mr={2}
                  ml={3}
                  borderRadius="0"
                  bg="#F5F5F5"
                  color="#08376B"
                  icon={<RiLogoutBoxLine size="2rem" />}
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/about">
                <IconButton
                  ml={4}
                  borderRadius="0"
                  bg="#F5F5F5"
                  icon={<FcAbout size="2rem" />}
                />
              </Link>
              <Link to="/login">
                <IconButton
                  mr={2}
                  ml={6}
                  borderRadius="0"
                  bg="#F5F5F5"
                  color="#08376B"
                  icon={<RiLoginBoxLine size="2rem" />}
                />
              </Link>
            </>
          )}
        </Flex>
        <Center>
          <IconButton
            ml={3}
            mt={1}
            borderRadius="0"
            bg="#F5F5F5"
            color="#c27ba0"
            fontSize="25px"
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => changeDisplay("flex")}
          />
        </Center>
      </Flex>
      <Flex flexDir="column" overflowY="auto">
        <Flex justify="flex-end"></Flex>
        <Flex
          w="100vw"
          bgColor="#F5F5F5"
          zIndex={20}
          h="71vh"
          pos="fixed"
          top="0"
          left="0"
          overscrollY="auto"
          flexDir="column"
          display={display}
        >
          <Flex justify="space-between">
            <Link to="/">
              <Image mt={4} ml={4} h="40px" src={Logo2} alt="Todo App" />
            </Link>
            <IconButton
              borderRadius="0"
              fontSize="15px"
              bg="#F5F5F5"
              color="#c27ba0"
              mt={3}
              mr={3}
              aria-label="Close Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <Link to="/">
              <IconButton
                mb={3}
                borderRadius="0"
                bg="#F5F5F5"
                icon={<FcHome size="2rem" />}
              />
            </Link>
            <Link to="/task-list">
              <IconButton
                mb={3}
                borderRadius="0"
                bg="#F5F5F5"
                icon={<FcTodoList size="2rem" />}
              />
            </Link>
            <Link to="/tasks">
              <IconButton
                mb={3}
                borderRadius="0"
                bg="#F5F5F5"
                icon={<FcList size="2rem" />}
              />
            </Link>
            <Link to="/about">
              <IconButton
                borderRadius="0"
                bg="#F5F5F5"
                icon={<FcAbout size="2rem" />}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
