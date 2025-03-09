"use client";
import { projects } from '@/data/project';
import { Box, Stack, Title } from '@mantine/core';
import { Card } from '@/components/Project/Card/Card';
import { LayoutScroll } from '@/components/Project/Scroll';
import classes from "../../styles/projects.module.css"
export default function Projects() {
  return (
    <Box className={classes.container}>
      <Title className={classes.title}>Mes projets</Title>
      <LayoutScroll />
      <Stack className={classes.stackDesktop}
        display={{ base: "flex", lg: "none" }}
      >
        {projects.slice(1, projects.length - 1).map((project, i) => (
          <Box className={classes.card} key={i}>
            <Card project={project} step={i + 1} />
          </Box>
        ))}
      </Stack>
      <Box />
    </Box>
  );
}
