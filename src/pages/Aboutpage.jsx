import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export function Aboutpage() {
  return (
    <Tabs align="center">
      <TabList>
        <Tab color="#08376B" _selected={{ color: "#F5F5F5", bg: "#08376B" }}>
          Sobre nosotros
        </Tab>
        <Tab color="#08376B" _selected={{ color: "#F5F5F5", bg: "#08376B" }}>
          somos un equipo apasionado de desarrolladores en potencia, dedicados a
          convertir ideas innovadoras en soluciones digitales impactantes.
          Fundada con el espíritu emprendedor y la visión de hacer una
          diferencia en el mundo de la tecnología, nuestra pequeña empresa está
          compuesta por mentes creativas y comprometidas con la excelencia.
          Nuestra Misión Nos esforzamos por ofrecer soluciones tecnológicas que
          vayan más allá de las expectativas, impulsando la transformación
          digital para empresas y particulares.
        </Tab>
        <Tab color="#08376B" _selected={{ color: "#F5F5F5", bg: "#08376B" }}>
          uso de tecnologia
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex justify="center">
            <Text height="300px" w="320px" mt="50px"></Text>
          </Flex>
        </TabPanel>
        <TabPanel>
          <List height="300px" w="370px" mt="50px" spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#08376B" />
              crea una nueva tarea
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#08376B" />
              marcalas cuando esten listas tus tareas
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="#08376B" />
              edita o elimina las tareas listas
            </ListItem>
            <ListItem></ListItem>
          </List>
        </TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
}
