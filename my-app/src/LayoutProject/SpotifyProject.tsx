import { Title, Text, List, Stack, ListItem, Box } from '@mantine/core';

export const SpotifyProject = () => {
    return (
        <Stack gap="md">

            <Text c="dimmed">
                <strong>Durée : </strong> 3 jours <br />
                <strong>Collaboration : </strong> 2 autres développeurs
            </Text>

            <Text>
                Dans le cadre de ce projet scolaire, nous avons développé une application mobile sur le thème des concerts et de la musique, permettant aux utilisateurs de ne manquer aucun concert de leurs artistes favoris. Le projet a été réalisé avec <strong>Flutter</strong> pour le développement de l'app et <strong>Figma</strong> pour la création des maquettes.
            </Text>

            <Text>
                L'objectif principal de l’application était de permettre aux utilisateurs de découvrir, suivre et assister à des concerts de leurs artistes préférés. L'application utilise l'API externe <strong>Ticketmaster</strong> pour récupérer les informations sur les concerts à venir.
            </Text >
            <Box>
                <Text>
                    L’app permet de:
                </Text >
                <List>
                    <ListItem
                    > <strong>Rechercher des artistes</strong> et des concerts</ListItem >
                    <ListItem><strong>Consulter les détails</strong> des concerts (nom, genre, lieu, date, heure)</ListItem>
                    <ListItem><strong>Liker des artistes</strong></ListItem>
                    <ListItem><strong>Découvrir les concerts proches</strong> grâce à la géolocalisation</ListItem>
                </List >
            </Box>

            <Box>
                <Title order={3} >Organisation et développement</Title>
                < Text>
                    Le projet a été réalisé en 3 jours, en collaboration avec deux autres développeurs.Nous avons utilisé < strong > Flutter</strong > pour développer l'application mobile et <strong>Ticketmaster API</strong> pour récupérer les informations sur les concerts. Les maquettes de l'app ont été réalisées sur < strong > Figma</strong >, permettant de visualiser l'interface avant le développement.
                </Text >
                <Text>
                    Cette application permet ainsi aux utilisateurs passionnés de musique de ne jamais manquer un concert de leurs artistes préférés tout en restant informés des événements musicaux près de chez eux.
                </Text >
            </Box>
        </Stack >
    );
}
