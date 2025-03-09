import { Project } from '@/data/project';
import { Text, List, ListItem, Stack } from '@mantine/core';


export const AlphacorpProject: Project["layout"] = {
    what: <Text>
        Une plateforme créée par des femmes, destinée aux hommes – et presque exclusivement pour eux.
        Elle propose des challenges, des formations, des événements et un forum pour aider les utilisateurs à devenir des "hommes alpha".
        Un système de "bromance", similaire à un système de followers, permet aux membres de s'entraider.
    </Text>,
    why: "Sujet libre et techno imposé",
    me: (<Stack gap={0}>
        <Text>Développement complet du front-end des trois interfaces : Alpha, Superviseuse et Administrateur.</Text>
        <Text>Implémentation d’un système de recherche avancé pour les utilisateurs et les événements.</Text>
        <Text> Ajout d'une fonctionnalité permettant de tester son cri pour déterminer son niveau d'alpha.</Text>
        <Text>Mise en production sur un serveur VPS.</Text>
    </Stack>),
    infos: {
        contexte: "Scolaire",
        timing: "4 semaines",
        numberOfPeople: 2
    }
}