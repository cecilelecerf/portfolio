
import { Title, Text, List, ThemeIcon, Stack, ListItem } from '@mantine/core';
// import { IconCheck, IconHome } from "@tabler/icons-react";

export const UrbanGreenProject = () => (
    <Stack gap="md">
        <Text>
            Dans le cadre d’un projet scolaire individuel d’une semaine, j’ai travaillé pour{' '}
            <Text component="span" w="bold">
                UrbanGreen
            </Text>
            , une entreprise spécialisée dans l’aménagement végétal des petits espaces urbains. L’objectif
            était de concevoir un <Text component="span" w="bold">site vitrine dynamique</Text>
            mettant en avant leurs services écoresponsables et leur expertise en paysagisme urbain.
        </Text>

        <Text w="bold">Mes contributions :</Text>
        <List
            icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                    {/* <IconCheck size={16} /> */}
                </ThemeIcon>
            }
            spacing="sm"
        >
            <ListItem>
                <Text w="bolder">Marketing :</Text> Analyse SWOT, étude des cibles et de la concurrence,
                positionnement stratégique, plan marketing.
            </ListItem>
            <ListItem>
                <Text w="bolder">Design et communication :</Text> Création d’un moodboard, choix des
                couleurs et typographies, réalisation du logo, cartes de visite, et stratégie de
                communication.
            </ListItem>
            <ListItem>
                <Text w="bolder">Web Design :</Text> Audit ergonomique, wireframe, et prototypage pour une
                expérience utilisateur optimisée.
            </ListItem>
            <ListItem>
                <Text w="bolder">Développement web :</Text> Rédaction du cahier des charges et
                implémentation du site vitrine interactif.
            </ListItem>
        </List>
        <Text>
            Ce projet m’a permis de mobiliser des compétences variées en{' '}
            <Text component="span" w="bold">
                marketing
            </Text>
            ,{' '}
            <Text component="span" w="bold">
                design
            </Text>
            , et{' '}
            <Text component="span" w="bold">
                développement web
            </Text>
            , tout en répondant à des enjeux concrets d'écoresponsabilité et de valorisation des petits
            espaces urbains.
        </Text>
    </Stack>
);
