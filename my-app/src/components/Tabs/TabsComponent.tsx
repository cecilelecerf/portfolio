"use client";
import { Center, Flex, FloatingIndicator, Image, Stack, Tabs, TabsTab, Text } from '@mantine/core';
import classes from './Tabs.module.css';
import { useEffect, useState } from 'react';
import { Outils } from '@/data/outils';
import { Project } from '@/data/project';
import { useWindowScroll } from '@mantine/hooks';
import NextImage from "next/image";
import { thresholds } from '@/app/projects/[id]/page';


export const TabsComponent = ({ outils }: { outils: Project["outils"] }) => {
    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [value, setValue] = useState<string | null>('0');
    const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
    const setControlRef = (val: string) => (node: HTMLButtonElement) => {
        controlsRefs[val] = node;
        setControlsRefs(controlsRefs);
    };
    const [scroll, scrollTo] = useWindowScroll();

    const [isSticky, setIsSticky] = useState(true);
    const stickyLimit = thresholds[3];
    useEffect(() => {
        const newValue = thresholds.findIndex((threshold) => scroll.y < threshold);
        setValue(newValue.toString());
        setIsSticky(scroll.y < stickyLimit);
    }, [scroll.y]);
    return (
        <Tabs variant="none" value={value} onChange={setValue} style={{ position: isSticky ? "sticky" : "relative" }} top={200}>
            <Tabs.List ref={setRootRef} className={classes.list}>
                {Object.entries(outils ?? {}).filter(([key, outil]) => outil && outil.length > 0).map(([key, outil], i) =>
                    <TabsTab value={key} key={i} ref={setControlRef(i.toString())} onClick={() => scrollTo({ x: 0, y: thresholds[i] - 200 })} className={classes.tab}>{key}</TabsTab>
                )}
                <FloatingIndicator
                    target={value ? controlsRefs[value] : null}
                    parent={rootRef}
                    className={classes.indicator}
                />
            </Tabs.List>
            {Object.entries(outils ?? {}).filter(([key, outil]) => outil && outil.length > 0).map(([key, outil], i) =>
                <Tabs.Panel value={i.toString()} key={i}>
                    <Flex gap="xl" justify="center" wrap="wrap">
                        {outil && outil.length > 0 ? outil.map((item, i) => <Item key={i} item={item} />) : `Pas de ${key}.`}

                    </Flex>
                </Tabs.Panel>
            )}
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