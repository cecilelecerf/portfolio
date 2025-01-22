import { Box, BoxProps, Flex, } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Card } from '../Card/Card';
import { projects } from '@/data/project';
const projectProps: BoxProps[] = [
  {
    w: 162.01,
    h: 159.44,
    right: 353.92,
    top: 98.12,
  },
  {
    w: 208.12,
    h: 204.82,
    right: 82.25,
    top: 0,
  },
  {
    w: 138.33,
    h: 136.14,
    right: 0,
    top: 266.14,
  },

  {
    w: 184.44,
    h: 181.52,
    right: 213.1,
    top: 300.48,
  },
];
export const LogoHomePage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  if (isSmallScreen)
    return (
      <Flex justify="center" w="100%" gap="xl" wrap="wrap" mt="xl">
        {projectProps.map((project, index) => (
          <Card key={index} project={projects[index + 1]} step={index + 1} pos="absolute"
            {...project} />
        ))}
      </Flex>
    );
  else
    return (
      <Box pos="relative" w={515.93} h={482}>
        {projectProps.map((project, index) => (
          <Card key={index} project={projects[index + 1]} step={index + 1} pos="absolute"
            {...project} />
        ))}
      </Box>
    );
};

