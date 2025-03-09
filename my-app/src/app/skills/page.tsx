'use client';
import {
  BackgroundImage,
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import { allOutils, Outils } from '@/data/outils';
import NextImage from 'next/image';
import bg from '../../assets/dev.jpg';
import filter from '../../components/Filter.module.css';

export default function Page() {
  return (
    <>
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
        mb="xl"
        className={filter.filter}
      >
        <Box ta="center" style={{ zIndex: 3 }}>
          <Title fw="bold">
            Maîtrise des technologies modernes et polyvalence
          </Title>
          <Text fw="bold">
            Depuis mes débuts dans le développement web, j’ai acquis une solide
            maîtrise des technologies front-end et back-end
          </Text>
        </Box>
      </BackgroundImage>
      <Stack w={800} align="center" gap="xl" mx="auto" mt="xl">
        {allOutils.map((outils, k) => (
          <Stack
            key={k}
            style={{ borderBottom: '1px solid black' }}
            pb="xl"
            w="100%"
            align="center"
          >
            <Title order={2} ta="center">
              {outils.label}
            </Title>
            <Flex gap="md">
              {Object.values(outils.infos)
                .filter((value) => value.often)
                .map((value, k) => (
                  <Item item={value} key={k} />
                ))}
            </Flex>
          </Stack>
        ))}
      </Stack>
    </>
  );
}

const Item = ({ item }: { item: Outils }) => (
  <Stack mx="md" gap="lg">
    <Center>
      {item.logo && (
        <Image
          src={item.logo}
          w={75}
          h={75}
          alt={`logo ${item.name}`}
          fit="contain"
          component={NextImage}
        />
      )}
    </Center>
    <Text ta="center">{item.name}</Text>
  </Stack>
);
