import { BackgroundImage, Box, Button, Text, Title } from '@mantine/core';
import bg from '../assets/office.jpg';
import Link from 'next/link';
import filter from "../components/Filter.module.css"
export default function Home() {
  return (
    <BackgroundImage
      src={bg.src}
      w="100%"
      h="80vh"
      radius="xl"
      c="white"
      p="xl"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={filter.filter}
    >
      <Box ta="center" maw={500} style={{ zIndex: 3 }}>
        <Title fw="bold">Salut, moi c&apos;est Cécile</Title>
        <Text fw="bold">Bienvenue sur mon portfolio</Text>
        <Link href="/projects">
          <Button mt="lg" variant='outline' color='white'>
            Découvrir mes projets
          </Button>
        </Link>
      </Box>
    </BackgroundImage>
  );
}
