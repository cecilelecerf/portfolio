import { Project } from "@/data/project";
import { Badge, Box, Flex, Image, Stack, Text } from "@mantine/core";
import NextImage from "next/image";
import placeholder from "../../assets/secondPlaceholder.png";
import { useMantineTheme } from "@mantine/core";
import classes from "./Card.module.css"
import { useHover } from "@mantine/hooks";
import Link from "next/link";

export const Card = ({ project, inverted = false, step }: { project: Project; inverted?: boolean; step: number }) => {
    const theme = useMantineTheme();
    const colors = [theme.colors.pink[3], theme.colors.yellow[3], theme.colors.blue[3], theme.colors.red[3], theme.colors.violet[3]];
    const backgroundColor = colors[(step + (inverted ? 0 : 3)) % colors.length];
    const { hovered, ref } = useHover();

    return (
        <Link href={`/projects/${step}`}>
            <Stack p="sm" className={classes.root} ref={ref} >
                <Image src={project.pictures?.[0] ? project.pictures[0] : placeholder} alt="Placeholder" component={NextImage} className={classes.bg}
                    style={{
                        transform: hovered ? "scale(1.2)" : "none",
                        transition: "transform 0.3s ease, border-color 0.3s ease"
                    }} />
                <Box bg={backgroundColor} className={`${classes.bg} ${classes.bgColor}`} />

                {/* Badges */}
                <Flex gap="sm">
                    {project.works.slice(0, 3).map((w, i) => (
                        <Badge key={i} color={colors[(i + (inverted ? 0 : 3)) % colors.length]} autoContrast>
                            {w}
                        </Badge>
                    ))}
                </Flex>

                {/* Titre du projet */}
                <Text c="white" fw={900} fz="h2">
                    {project.title}
                </Text>
            </Stack>
        </Link>
    );
};
