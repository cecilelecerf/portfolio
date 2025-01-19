import { Flex, Text, Title } from "@mantine/core";
import Link from "next/link";

export const Header = () => (
    <header>
        <Flex justify="space-between" m="xl" align="center" mb={100}>
            <Link href="/">
                <Title>Cécile LECERF</Title>
            </Link>
            <Flex gap="xl">
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
        </Flex>
    </header>
)