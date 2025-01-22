import { TabsComponent } from '@/components/Tabs/TabsComponent';
import { projects } from '@/data/project';
import {
  Badge,
  Box,
  Card,
  Center,
  Flex,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import classes from '../../../components/Tabs/Tabs.module.css';
import { PictureProject } from '@/components/PictureProject/PictureProject';
import { GUTTER } from '@/components/const';

export interface PageProps {
  params: Promise<{ id: number }>;
}
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const project = projects[id];
  if (!project) {
    return (
      <Text c="red" size="xl">
        Projet non trouvé. Veuillez vérifier l{"'"}URL.
      </Text>
    );
  }
  const thresholds = [800, 1200, 1600, 2000];

  return (
    <Box mx={GUTTER}>
      <Flex justify="space-between">
        <Stack maw={1200}>
          <Title fw="bold" fs="italic">
            {project.title}
          </Title>
          <Flex gap="xl">

            <Paper p="md" shadow="md" w="50%">
              <Title order={2}>C'est quoi {project.title} ?</Title>
              {project.layout.what}
            </Paper>
            <Paper shadow="md" p="md" w="50%">
              <Title order={3} mb="md" fs="italic">Mon rôle</Title>
              {project.layout.me}
            </Paper>

          </Flex>
          {project.layout.why && (
            <Paper shadow="md" p="md" w="100%">
              <Title order={2}>C'est quoi le but pour moi ?</Title>
              {project.layout.why}
            </Paper>
          )}
          {project.layout.more && (

            <Paper shadow="md" p="md">
              <Title order={2}>Quelque info supplémentaire</Title>
              <Text>{project.layout.more}</Text>
            </Paper>
          )}
        </Stack>
        <Stack align="end"  >

          <Flex gap="md" align="end" >
            {project.works.map((work, index) => (
              <Badge
                size="xl"
                key={index}
                color="yellow.7"
                className={classes.badge}
              >
                {work}
              </Badge>
            ))}
          </Flex>

          <Paper shadow="md" p="md" w={250}  >
            <Title order={3} mb="md" fs="italic">Infos</Title>
            <Text>Contexte : {project.layout.infos.contexte}</Text>
            <Text>Durée : {project.layout.infos.timing}</Text>
            <Text>Nombre de personne : {project.layout.infos.numberOfPeople}</Text>
          </Paper>
        </Stack>
      </Flex>
      <Space h={50} />
      <TabsComponent outils={project.outils} />
      <Box h={thresholds[Object.keys(project.outils ?? {}).length - 1]}></Box>
      <Paper mb="xl" p="xl" style={{ borderRadius: '5px' }} shadow="md">
        <Title order={2} fs="italic" mb="xl">
          Quelque visuel
        </Title>
        <Center w="100%">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
            {project.pictures?.map((picture, key) => (
              <PictureProject key={key} picture={picture} />
            ))}
          </SimpleGrid>
        </Center>
      </Paper>
    </Box>
  );
}
