import { BackgroundImage, Box, Button, Text, Title } from '@mantine/core';
import bg from '../assets/office.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <BackgroundImage
      src={bg.src}
      w="100%"
      h="80vh"
      radius="xl"
      c="white"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box ta="center">
        <Title fw="bold">Salut, moi c&apos;est Cécile</Title>
        <Text fw="bold">Bienvenue sur mon portfolio</Text>
        <Link href="/projects">
          <Button mt="lg" color="indigo">
            Découvrir mes projets
          </Button>
        </Link>
      </Box>
    </BackgroundImage>
  );
}
