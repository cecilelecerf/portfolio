"use client";
import { Burger, Drawer, Flex, Stack, Text, Title } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export const Header = () => {
    const [opened, { toggle, close }] = useDisclosure();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Ajustez selon vos besoins

    return (
        <header>
            <Flex justify="space-between" m="xl" align="center" mb={100}>
                <Link href="/">
                    <Title>Cécile LECERF</Title>
                </Link>

                <Flex gap="xl" style={{ display: !isSmallScreen ? "flex" : "none" }}   >
                    <Link href="/projects">
                        <Text fz="h3">Projet</Text>
                    </Link>
                    <Link href="/curriculum-vitae">
                        <Text fz="h3">CV</Text>
                    </Link>
                    <Link href="#">
                        <Text fz="h3">Github</Text>
                    </Link>
                    <Link href="#">
                        <Text fz="h3">Linkedin</Text>
                    </Link>
                </Flex>
                {
                    isSmallScreen && (
                        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                    )
                }
                <Drawer opened={opened} onClose={close} position="right" size="xs">
                    {/* Drawer content */}
                    <Stack>
                        <Link href="/projects">
                            <Text fz="h3">Projet</Text>
                        </Link>
                        <Link href="/curriculum-vitae">
                            <Text fz="h3">CV</Text>
                        </Link>
                        <Link href="#">
                            <Text fz="h3">Github</Text>
                        </Link>
                        <Link href="#">
                            <Text fz="h3">Linkedin</Text>
                        </Link>
                    </Stack>
                </Drawer>
            </Flex>
        </header>
    )
}