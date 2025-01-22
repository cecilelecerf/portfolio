'use client';
import { Box, Button, Flex, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { LogoHomePage } from '@/components/LogoHomePage/LogoHomePage';
import { useMediaQuery } from '@mantine/hooks';

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Ajustez selon vos besoins

  return (
    <Box h="100%">
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
            Bienvenue sur mon portfolio ! Développeuse web depuis 4 ans, je combine rigueur, créativité et adaptabilité pour transformer des idées en projets concrets. À travers une communication fluide et une organisation méthodique, je m’efforce de collaborer efficacement en équipe pour relever chaque défi avec professionnalisme. Découvrez mes réalisations et projets !
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
