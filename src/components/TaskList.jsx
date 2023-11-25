import "../style/style.css";
import { useForm } from "react-hook-form";
import {
  FormControl,
  Button,
  Input,
  Flex,
  Center,
  Box,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

export function TaskList() {
  const { register, handleSubmit } = useForm();

  const { createTask } = useTasks();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createTask(data);
    navigate("/tasks");
  };

  return (
    <Box m={6} w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Center>
            <Flex mb={5}>
              <Input
                name="title"
                type="text"
                placeholder="Add task"
                borderRadius="0"
                w="full"
                autoFocus
                {...register("title")}
              />
            </Flex>
          </Center>
          <Center>
            <Flex>
              <Input
                w="full"
                name="description"
                type="text"
                placeholder="Description"
                borderRadius="0"
                {...register("description")}
              />
              <Button
                type="submit"
                mr="2"
                ml="4"
                borderRadius="0"
                bg="#08376B"
                color="#F5F5F5"
                _hover={{
                  color: "#F5F5F5",
                  bg: "#08579B",
                }}
              >
                <AddIcon />
              </Button>
            </Flex>
          </Center>
        </FormControl>
      </form>
    </Box>
  );
}
