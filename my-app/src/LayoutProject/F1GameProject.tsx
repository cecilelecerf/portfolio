import { Title, Text, List, Stack, Divider, ListItem } from '@mantine/core';

export const F1GameProject = () => (
    <Stack gap="md">
        <Title order={2}>F1 GAME</Title>

        <Text>
            Dans le cadre d’un <strong>projet scolaire</strong>, j’ai participé au développement d’une <strong>application de jeu et de paris</strong> sur les résultats des Grands Prix de Formule 1. Cette application permettait de parier sur :
        </Text>
        <List spacing="xs">
            <ListItem>Le pilote qui terminerait à la 10<sup>e</sup> place.</ListItem>
            <ListItem>Le premier pilote à sortir de la course.</ListItem>
        </List>
        <Text>
            Ces paris rapportaient des points pour établir des <strong>classements</strong> au sein de groupes d’amis, que les utilisateurs pouvaient créer eux-mêmes.
        </Text>

        <Divider />

        <Title order={3}>Mes contributions :</Title>
        <List spacing="xs">
            <ListItem>
                <Text>
                    <strong>Développement back-end :</strong> J’ai travaillé sur la partie <strong>back-end</strong> de l’application.
                </Text>
            </ListItem>
            <ListItem>
                <Text>
                    <strong>Conception de la base de données :</strong> J’ai particulièrement apprécié réfléchir à l’optimisation et à la structure de la base de données.
                </Text>
            </ListItem>
            <ListItem>
                <Text>
                    <strong>Coordination front/back :</strong> En tant que lien technique entre les équipes <strong>front-end</strong> (4 personnes) et <strong>back-end</strong> (4 personnes), j’ai facilité la communication et l’intégration entre les deux parties.
                </Text>
            </ListItem>
        </List>

        <Divider />

        <Title order={3}>En équipe :</Title>
        <Text>
            Ce projet a été réalisé avec une équipe de 8 personnes, divisée entre le front-end et le back-end. Cette expérience a permis de travailler de manière collaborative sur un produit complet et interactif.
        </Text>
    </Stack>
);
