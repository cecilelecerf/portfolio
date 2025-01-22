'use client';
import { useState } from 'react';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Center,
  FloatingIndicator,
  Image,
  SimpleGrid,
  Stack,
  Tabs,
  TabsTab,
  Text,
} from '@mantine/core';
import NextImage from 'next/image';
import { Company } from '@/components/Timeline/Company';
import { School } from '@/components/Timeline/School';
import { allOutils, Outils } from '@/data/outils';
import classes from '../Tabs/Tabs.module.css';
export const AccordionCV = () => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('0');
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  return (
    <Accordion w="100%" px="xl">
      <AccordionItem value="0">
        <AccordionControl>Soft Skills</AccordionControl>
        <AccordionPanel>
          <Text>Rigoureuse et toujours animée par une grande motivation, je m'efforce de partager les informations de manière claire et constructive, favorisant ainsi une collaboration efficace au sein de l'équipe.</Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="1">
        <AccordionControl>Parcours professionnel</AccordionControl>
        <AccordionPanel>
          <Company />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionControl>Parcours scolaire</AccordionControl>
        <AccordionPanel>
          <School />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

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
