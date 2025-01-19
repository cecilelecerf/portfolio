"use client";
import { Center, Flex, FloatingIndicator, Image, Stack, Tabs, Text } from '@mantine/core';
import classes from './Tabs.module.css';
import { useEffect, useState } from 'react';
import { Outils } from '@/data/outils';
import { AllOutilsProps } from '@/data/project';
import { useWindowScroll } from '@mantine/hooks';
import NextImage from "next/image";


export const TabsComponent = ({ outils }: { outils: AllOutilsProps }) => {
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [value, setValue] = useState<string | null>('1');
    const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
    const setControlRef = (val: string) => (node: HTMLButtonElement) => {
        controlsRefs[val] = node;
        setControlsRefs(controlsRefs);
    };
    const [scroll, scrollTo] = useWindowScroll();

    const [isSticky, setIsSticky] = useState(true);
    const stickyLimit = 1500;

    useEffect(() => {
        setIsSticky(scroll.y < stickyLimit);
        setValue((v) => {
            if (scroll.y < 500)
                v = "1"
            else if (scroll.y < 900)
                v = "2"
            else {
                v = "3"
            }
            return v
        })
    }, [scroll.y]);
    console.log(scroll.y)

    return (
        <Tabs variant="none" value={value} onChange={setValue} style={{ position: isSticky ? "sticky" : "relative" }} top={200}>
            <Tabs.List ref={setRootRef} className={classes.list}>
                <Tabs.Tab value="1" ref={setControlRef('1')} className={classes.tab} onClick={() => scrollTo({ x: 0, y: 390 })}>
                    Frameworks
                </Tabs.Tab>
                <Tabs.Tab value="2" ref={setControlRef('2')} className={classes.tab} onClick={() => scrollTo({ x: 0, y: 700 })}>
                    Languages
                </Tabs.Tab>
                <Tabs.Tab value="3" ref={setControlRef('3')} className={classes.tab} onClick={() => scrollTo({ x: 0, y: 1100 })}>
                    Outils
                </Tabs.Tab>
                <FloatingIndicator
                    target={value ? controlsRefs[value] : null}
                    parent={rootRef}
                    className={classes.indicator}
                />
            </Tabs.List>

            <Tabs.Panel value="1">
                <Flex gap="xl" justify="center">
                    {outils.frameworks ? outils?.frameworks?.map((framework, i) => <Item key={i} item={framework} />) : "Pas de framework utilisé."}

                </Flex>
            </Tabs.Panel>
            <Tabs.Panel value="2">
                <Flex gap="xl" justify="center">
                    {outils.languages ? outils.languages?.map((language, i) => <Item key={i} item={language} />) : "Pas de développement pour ce projet."}
                </Flex>
            </Tabs.Panel>
            <Tabs.Panel value="3">
                <Flex gap="xl" justify="center">
                    {outils.outils?.map((outil, i) => <Item key={i} item={outil} />)}
                </Flex>
            </Tabs.Panel>
        </Tabs>
    );
}

const Item = ({ item }: { item: Outils }) => (
    <Stack mx="md" gap="lg">
        <Center>
            {item.logo && (

                <Image src={item.logo} w={75} h={75} alt={`logo ${item.name}`} fit="contain" component={NextImage} />
            )}
        </Center>
        <Text ta="center">{item.name}</Text>
    </Stack>
)