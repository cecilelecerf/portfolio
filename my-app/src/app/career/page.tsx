'use client';
import {
  BackgroundImage,
  Button,
  Flex,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { PictureMe } from '@/components/CV/PictureMe';
import { Company } from '@/components/CV/Timeline/Company';
import { School } from '@/components/CV/Timeline/School';
import { Card_CV } from '@/components/CV/Card_CV';
import bg from '../../assets/laptop.jpg';
import Link from 'next/link';

export default function Page() {
  return (
    <Stack align="center" h="100%" justify="center" gap="xl" mb="xl" pb="xl">
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
        p="md"
      >
        <PictureMe />
        <Stack gap="xs" w="600">
          <Title fw="bold" fs="italic">
            Une petite présentation s&apos;impose !
          </Title>
          <Text fz="lg">
            Je suis Cécile LECERF, développeuse web depuis 4 ans. Ma passion
            pour l&apos;apprentissage et la découverte est plus vive que jamais,
            et c&apos;est pourquoi je suis à la recherche d&apos;une nouvelle
            alternance pour ma cinquième et dernière année.
          </Text>
          <Flex gap="md">
            <Link href="/career#company">
              <Button variant="outline" color="white">
                Expériences Pro
              </Button>
            </Link>
            <Link href="/career#school">
              <Button variant="outline" color="white">
                Formations
              </Button>
            </Link>
          </Flex>
        </Stack>
      </BackgroundImage>
      <Card_CV title="Mon parcours professionnel" color="yellow.3" id="company">
        <Company />
      </Card_CV>
      <Card_CV title="Mon parcours scolaire" color="violet.2" id="school">
        <School />
      </Card_CV>
    </Stack>
  );
}
