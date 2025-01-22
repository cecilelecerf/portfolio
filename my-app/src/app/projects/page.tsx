'use client';
import { GUTTER } from '@/components/const';
import { Scroll } from '../../components/Scroll/Scroll';
import { Box, Stack, Title } from '@mantine/core';

export default function Projects() {
  return (
    <Box>
      <Title mx={GUTTER}>Mes projets</Title>
      <Stack gap="xl" py="lg" style={{ overflow: 'hidden' }}>
        <Scroll />
        <Scroll inverted />
      </Stack>
      <Box />
    </Box>
  );
}
