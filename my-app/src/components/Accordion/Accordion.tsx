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
        <AccordionControl>Hard Skill</AccordionControl>
        <AccordionPanel>
          <Tabs variant="none" value={value} onChange={setValue}>
            <Tabs.List ref={setRootRef} className={classes.list}>
              {Object.entries(allOutils).map(([key, outil], i) => (
                <TabsTab
                  value={key}
                  key={i}
                  ref={setControlRef(i.toString())}
                  onClick={() => setValue(i.toString())}
                  className={classes.tab}
                >
                  {outil.label}
                </TabsTab>
              ))}
              <FloatingIndicator
                target={value ? controlsRefs[value] : null}
                parent={rootRef}
                className={classes.indicator}
              />
            </Tabs.List>
            {Object.values(allOutils).map((outil, i) => (
              <Tabs.Panel value={i.toString()} key={i}>
                <SimpleGrid cols={3} key={i}>
                  {Object.values(outil.infos).map((value, i) => (
                    <Item key={i} item={value} />
                  ))}
                </SimpleGrid>
              </Tabs.Panel>
            ))}
          </Tabs>
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
