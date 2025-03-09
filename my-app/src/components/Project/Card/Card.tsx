import { Project } from '@/data/project';
import { Badge, Box, Flex, Paper, Stack, StackProps, Text } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import classes from './Card.module.css';
import Link from 'next/link';

export const Card = ({
  project,
  inverted = false,
  step,
  ...props
}: StackProps & {
  project: Project;
  inverted?: boolean;
  step: number;
}) => {
  const theme = useMantineTheme();
  const colors = [
    theme.colors.pink[2],
    theme.colors.yellow[2],
    theme.colors.blue[2],
    theme.colors.red[2],
    theme.colors.violet[2],
  ];
  const backgroundColor = colors[(step + (inverted ? 0 : 3)) % colors.length];

  return (
    <Link href={`/projects/${step}`}>
      <Stack
        p="sm"
        w="100%"
        bg={backgroundColor}
        className={classes.root}
        style={(theme) => ({ borderRadius: theme.radius.lg })}
        {...props}
      >


        {/* Badges */}
        <Flex gap="sm" >
          {project.works.slice(0, 3).map((w, i) => (
            <Badge
              key={i}
              color={colors[(i + (inverted ? 0 : 3)) % colors.length]}
              autoContrast
            >
              {w}
            </Badge>
          ))}
        </Flex>

        {/* Titre du projet */}
        <Text c="white" fw={900} fz="h2">
          {project.title}
        </Text>
      </Stack>
    </Link>
  );
};
