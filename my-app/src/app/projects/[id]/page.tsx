import { TabsComponent } from "@/components/Tabs/TabsComponent";
import { projects } from "@/data/project";
import { Badge, Box, Card, Center, Flex, Group, Image, Paper, Space, Text, Title } from "@mantine/core";
import classes from "../../../components/Tabs/Tabs.module.css"
import placeholder from "../../../assets/secondPlaceholder.png"
import { PictureProject } from "@/components/PictureProject/PictureProject";

export interface PageProps {
    params: Promise<{ id: number }>;
}
export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const project = projects[id];
    if (!project) {
        return <Text c="red" size="xl">Projet non trouvé. Veuillez vérifier l'URL.</Text>;
    }
    return (

        <Box mx="xl">
            <Flex justify="space-between"  >
                <Title fw="bold" fs="italic" >
                    {project.title}
                </Title>
                <Flex gap="md" align="end">
                    {project.works.map((work, index) => <Badge size="xl" key={index} color="yellow.7" className={classes.badge} >{work}</Badge>)}
                </Flex>
            </Flex>
            <Box maw={650} my="md">{project.description}</Box>
            <Space h={50} />
            <TabsComponent outils={project.outils} />
            <Box h={1400}></Box>
            <Box mb="xl" bg="gray.2" p="xl" style={{ borderRadius: "5px" }}>
                <Title order={2} fs="italic" mb="xl">Voici quelque visuel</Title>
                <Center w="100%">
                    <Group justify="start" w="fit-content" gap="lg">
                        {project.pictures?.map((picture, key) =>
                            <PictureProject key={key} picture={picture} />
                        )}
                    </Group>

                </Center>
            </Box>


        </Box>

    )
}



