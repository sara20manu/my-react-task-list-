import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  Flex,
  Heading,
  VStack,
  Text,
  Center,
  Button,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { useTasks } from "../context/TasksContext";
import { useDisclosure, AlertDialog } from "@chakra-ui/react";
import { useRef } from "react";
import { UpdateTask } from "./UpdateTask";
import { Link } from "react-router-dom";

export const Task = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const { deleteTask } = useTasks();

  return (
    <Center>
      <Card w="full" maxW="md" bg="zinc-800" borderRadius="0" p={2}>
        <Flex justify="space-between">
          <IconButton
            color="#08579B"
            icon={<CheckCircleIcon />}
            bg="white"
            _hover={{ bg: "white", fontSize: "22px" }}
          />
          <VStack>
            <Heading color="#08579B" size="md">
              {task.title}
            </Heading>
            <Text>{task.description}</Text>
            <Text>{new Date(task.date).toLocaleDateString()}</Text>
          </VStack>
          <ButtonGroup>
            <Link to={`/tasks/${task._id}`}>
              <UpdateTask />
            </Link>
            <IconButton
              color="red"
              icon={<DeleteIcon />}
              onClick={onOpen}
              bg="white"
              _hover={{ bg: "white", fontSize: "22px" }}
            />
          </ButtonGroup>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent borderRadius="0">
                <AlertDialogHeader fontSize="lg" color="#08579B">
                  borrar
                </AlertDialogHeader>
                <AlertDialogBody>
                  ¿Estas seguro que quieres hacer esto? esta accion no se puede
                  deshacer
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose} borderRadius="0">
                    Cancelar
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => deleteTask(task._id)}
                    ml={3}
                    borderRadius="0"
                  >
                    Borrado
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </Card>
    </Center>
  );
};
