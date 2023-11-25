import { useRef, useEffect } from "react";
import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

export const UpdateTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { getTask } = useTasks();

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getTask(params.id);
      console.log(params);
    }
  }, []);

  return (
    <>
      <IconButton
        icon={<EditIcon />}
        bg="white"
        onClick={onOpen}
        _hover={{ bg: "white", fontSize: "22px" }}
      />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="0">
          <ModalHeader color="#08579B">actualizacion de tareas</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input borderRadius="0" placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descripcion</FormLabel>
              <Input borderRadius="0" placeholder="Description" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} borderRadius="0">
              Guardar
            </Button>
            <Button onClick={onClose} borderRadius="0">
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
