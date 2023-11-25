import { Box, Center } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { TaskList } from "../components/TaskList";

export function TodoAppPage() {
  return (
    <Center>
      <Box>
        <Header />
        <TaskList />
      </Box>
    </Center>
  );
}
