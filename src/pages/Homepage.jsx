import { Link } from "react-router-dom";
import derecha from "../images/derecha.jpg";
import izquierda from "../images/izquierda.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Text,
  Flex,
  Image,
  Card,
  Heading,
  CardFooter,
  Button,
  Stack,
  CardBody,
  Center,
} from "@chakra-ui/react";

export function Homepage() {
  return (
    <Center>
      <Card
        mt={10}
        borderRadius="0"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody>
            <Heading color="#6b0837" mb={4} textAlign="center">
              bienvenido a la lista de tarea
            </Heading>
            <Text size="sm" py="2">
              Agregar Tareas: Haz clic en el botón "Agregar Tarea" para incluir
              una nueva actividad en tu lista. Asegúrate de ser específico sobre
              la tarea y establecer una fecha límite si es necesario.
              <br />
              Priorizar: Utiliza la función de priorización para destacar las
              tareas más importantes. Esto te ayudará a centrarte en lo que
              realmente importa.
              <br />
              Marcar como Completado: Al completar una tarea, marca la casilla
              correspondiente. ¡Es gratificante ver cómo tu lista se reduce a
              medida que avanzas!
              <br />
              Editar o Eliminar: Si necesitas hacer cambios en una tarea, puedes
              editarla o eliminarla según sea necesario. Mantén tu lista
              actualizada.
              <br />
            </Text>
          </CardBody>
          <Flex justify="center">
            <Image h="250px" w="23em" src={izquierda} />
            <Image h="250px" w="23em" src={derecha} />
          </Flex>
          <CardFooter justify="center">
            <Link to="/todoapp">
              <Button
                borderRadius="0"
                variant="solid"
                bg="#6b0837"
                color="white"
                _hover={{
                  color: "whithe",
                  bg: "#08579B",
                }}
              >
                Empecemos <ArrowForwardIcon ml={3} />
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
}
