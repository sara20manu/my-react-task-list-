import { useEffect } from "react";
import { useTasks } from "../context/TasksContext.jsx";
import { Heading, Center, Box } from "@chakra-ui/react";
import { Task } from "../components/Task.jsx";

export const Taskspage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0)
    return (
      <Center>
        <Box bg="#08579B" h="100px" color="white">
          <Heading p={4} mt={2}>
            Aqui no hay tareas
          </Heading>
        </Box>
      </Center>
    );

  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} key={task._id} />
      ))}
    </div>
  );
};
