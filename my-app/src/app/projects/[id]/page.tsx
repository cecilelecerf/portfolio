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
import { useMediaQuery } from '@mantine/hooks';
import { SingleProject } from '@/components/SingleProject';

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
    <Box  >
      <SingleProject project={project} />
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
