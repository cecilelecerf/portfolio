'use client';
import { Box, Button, Flex, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { LogoHomePage } from '@/components/LogoHomePage/LogoHomePage';
import { useMediaQuery } from '@mantine/hooks';
import { GUTTER } from '@/components/const';

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Ajustez selon vos besoins

  return (
    <Box mx={GUTTER} h="100%">
      <Flex
        gap="xl"
        justify="space-between"
        align="center"
        direction={isSmallScreen ? 'column' : 'row'}
      >
        <Stack maw={450} h="100%">
          <Title order={1} fs="italic" c="yellow" fz={50} fw={900}>
            Hello !
          </Title>
          <Text size="lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, aliquam corrupti. Sit facilis ea eius autem
            consequatur necessitatibus ducimus libero possimus consectetur! Sit
            ad sunt hic animi non perferendis cupiditate.
          </Text>
          <Flex gap="md">
            <Link href="/curriculum-vitae">
              <Button size="lg">Mon CV</Button>
            </Link>
            <Link href="/curriculum-vitae">
              <Button size="lg">Me contacter</Button>
            </Link>
          </Flex>
        </Stack>
        <LogoHomePage />
      </Flex>
    </Box>
  );
}
