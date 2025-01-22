"use client";
import { Project, projects } from '@/data/project';
import {
    Badge,
    Box,
    Card,
    Center,
    Flex,
    Paper,
    SimpleGrid,
    Space,
    Stack,
    Text,
    Title,
} from '@mantine/core';
import classes from './Tabs/Tabs.module.css';
import { useMediaQuery } from '@mantine/hooks';

export const SingleProject = ({ project }: { project: Project }) => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Ajustez selon vos besoins

    return (
        <Flex justify="space-between" direction={isSmallScreen ? "column" : "row"}>
            <Stack maw={1200}>
                <Title fw="bold" fs="italic">
                    {project.title}
                </Title>{
                    isSmallScreen && (
                        <>
                            <Flex gap="md" align="end" >
                                {project.works.map((work, index) => (
                                    <Badge
                                        size="xl"
                                        key={index}
                                        color="yellow.7"
                                        className={classes.badge}
                                    >
                                        {work}
                                    </Badge>
                                ))}
                            </Flex>
                            <Paper shadow="md" p="md" w="100%"  >
                                <Title order={3} mb="md" fs="italic">Infos</Title>
                                <Text>Contexte : {project.layout.infos.contexte}</Text>
                                <Text>Durée : {project.layout.infos.timing}</Text>
                                <Text>Nombre de personne : {project.layout.infos.numberOfPeople}</Text>
                            </Paper>
                        </>
                    )
                }
                <Flex gap="xl" direction={isSmallScreen ? "column" : "row"}>

                    <Paper p="md" shadow="md" w="100%">
                        <Title order={2}>C'est quoi {project.title} ?</Title>
                        {project.layout.what}
                    </Paper>
                    <Paper shadow="md" p="md" w="100%">
                        <Title order={3} mb="md" fs="italic">Mon rôle</Title>
                        {project.layout.me}
                    </Paper>

                </Flex>
                {project.layout.why && (
                    <Paper shadow="md" p="md" w="100%">
                        <Title order={2}>C'est quoi le but pour moi ?</Title>
                        {project.layout.why}
                    </Paper>
                )}
                {project.layout.more && (

                    <Paper shadow="md" p="md">
                        <Title order={2}>Quelque info supplémentaire</Title>
                        <Text>{project.layout.more}</Text>
                    </Paper>
                )}
            </Stack>
            {!isSmallScreen && (

                <Stack align="end"  >

                    <Flex gap="md" align="end" >
                        {project.works.map((work, index) => (
                            <Badge
                                size="xl"
                                key={index}
                                color="yellow.7"
                                className={classes.badge}
                            >
                                {work}
                            </Badge>
                        ))}
                    </Flex>

                    <Paper shadow="md" p="md" w={250}  >
                        <Title order={3} mb="md" fs="italic">Infos</Title>
                        <Text>Contexte : {project.layout.infos.contexte}</Text>
                        <Text>Durée : {project.layout.infos.timing}</Text>
                        <Text>Nombre de personne : {project.layout.infos.numberOfPeople}</Text>
                    </Paper>
                </Stack>
            )}
        </Flex>
    )
}