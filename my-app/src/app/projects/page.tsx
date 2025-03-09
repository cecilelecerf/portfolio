import { Scroll } from '../../components/Project/Scroll/Scroll';
import { Box, Stack, Title } from '@mantine/core';

export default function Projects() {
  return (
    <Box>
      <Title>Mes projets</Title>
      <Stack gap="xl" py="lg" style={{ overflow: 'hidden' }}>
        <Scroll />
        <Scroll inverted />
      </Stack>
      <Box />
    </Box>
  );
}
