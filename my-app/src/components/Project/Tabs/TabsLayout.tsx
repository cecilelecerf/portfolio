'use client';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Center,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { Project } from '@/data/project';
import { Outils } from '@/data/outils';
import NextImage from 'next/image';

export const TabsLayout = ({ project }: { project: Project }) => {
  return (
    <Accordion
      mb="xl"
      styles={{
        control: { borderRadius: 'var(--mantine-radius-xl)' },
        root: {
          boxShadow: 'var(--mantine-shadow-sm)',
          borderRadius: 'var(--mantine-radius-lg)',
          padding: 'var(--mantine-spacing-sm)',
        },
        item: { border: 'none' },
      }}
    >
      {Object.entries(project.outils ?? {}).map(([key, value]) => (
        <AccordionItem key={key} value={key}>
          <AccordionControl>{key}</AccordionControl>
          <AccordionPanel>
            <SimpleGrid cols={3} verticalSpacing="xl">
              {value.map((outil, k) => (
                <Item item={outil} key={k} />
              ))}
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Item = ({ item }: { item: Outils }) => (
  <Stack gap="lg">
    <Center>
      {item.logo && (
        <Image
          src={item.logo}
          w="100%"
          mah={50}
          alt={`logo ${item.name}`}
          fit="contain"
          component={NextImage}
        />
      )}
    </Center>
    <Text ta="center">{item.name}</Text>
  </Stack>
);
