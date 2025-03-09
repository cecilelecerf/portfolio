import { TabsComponent } from '@/components/Project/Tabs/TabsComponent';
import { projects } from '@/data/project';
import {
  Box,
  Center,
  SimpleGrid,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { PictureProject } from '@/components/Project/PictureProject/PictureProject';
import { SingleProject } from '@/components/Project/SimpleProject/SingleProject';

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
      <Box>
        <Title order={2} fs="italic" mb="xl">
          Quelque visuel
        </Title>
        <Center w="100%">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}>
            {project.pictures?.map((picture, key) => (
              <PictureProject key={key} picture={picture} />
            ))}
          </SimpleGrid>
        </Center>
      </Box>
    </Box>
  );
}
