'use client';
import { Scroll } from '../../components/Scroll/Scroll';
import { Box, Stack, Title } from '@mantine/core';

export default function Projects() {
  return (
    <Box>
      <Title mx="xl">Mes projets</Title>
      <Stack gap="xl" py="lg" style={{ overflow: 'hidden' }}>
        <Scroll />
        <Scroll inverted />
      </Stack>
      <Box />
    </Box>
  );
}
