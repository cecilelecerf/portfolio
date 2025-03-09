'use client';
import { Project } from '@/data/project';
import {
  BackgroundImage,
  Badge,
  Box,
  Flex,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import defaultBg from '../../../assets/office.jpg';
import classes from './SingleProject.module.css';
import filter from '../../Filter.module.css';

export const SingleProject = ({ project }: { project: Project }) => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <Stack gap="xl">
      <BackgroundImage
        src={project.pictures?.[0].src ?? defaultBg.src}
        mb="xl"
        className={filter.filter}
        p="lg"
      >
        <Stack className={classes.content} mx="auto">
          <Flex gap="md" wrap="wrap" justify="center">
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
          <Title fw="bold">{project.title}</Title>
          <Text fw="bold" fz="xl">
            {project.layout.why}
          </Text>
          <Flex gap="md" mt="xl">
            <Text fw="bold">Projet {project.layout.infos.contexte}</Text>
            <Text fw="bold">{project.layout.infos.timing}</Text>
            <Text fw="bold">
              {project.layout.infos.numberOfPeople} personnes
            </Text>
          </Flex>
        </Stack>
      </BackgroundImage>
      <Flex gap="xl" direction={isSmallScreen ? 'column' : 'row'}>
        <Paper p="md" w="100%" bg="gray.0" radius="lg">
          <Title order={2} ta="center" mb="md">
            C&apos;est quoi {project.title} ?
          </Title>
          {project.layout.what}
        </Paper>
        <Paper p="md" w="100%" bg="gray.9" radius="lg" c="white">
          <Title order={2} mb="md" ta="center">
            Mon rôle
          </Title>
          {project.layout.me}
        </Paper>
      </Flex>
      {project.layout.more && (
        <Box>
          <Title order={2} mb="md">
            Quelque info supplémentaire
          </Title>
          {project.layout.more}
        </Box>
      )}
    </Stack>
  );
};
