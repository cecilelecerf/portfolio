import { Project } from '@/data/project';
import { List, ListItem, Text } from '@mantine/core';

export const SpotifyProject: Project['layout'] = {
  what: (
    <>
      L&apos; objectif principal de cette application mobile est de permettre
      aux utilisateurs de découvrir, suivre et assister aux concerts de leurs
      artistes préférés. Nous développons une plateforme qui aide les
      utilisateurs à ne manquer aucun concert grâce à des fonctionnalités
      dédiées à la musique et aux événements en direct. L&apos;application offre
      les options suivantes :
      <Text>Voici les fonctionnalités principales de l&apos;app :</Text>
      <List>
        <ListItem>
          <strong>Rechercher des artistes</strong> et des concerts facilement
        </ListItem>
        <ListItem>
          <strong>Consulter les détails</strong> des concerts (nom, genre, lieu,
          date, heure)
        </ListItem>
        <ListItem>
          <strong>Liker des artistes</strong> pour recevoir des notifications
          personnalisées
        </ListItem>
        <ListItem>
          <strong>Découvrir les concerts à proximité</strong> grâce à la
          géolocalisation
        </ListItem>
      </List>
    </>
  ),
  me: (
    <>
      En tant que développeur front-end, je crée les composants nécessaires pour
      l&apos;application mobile. J&apos;ai également intégré l&apos;API de
      Ticketmaster pour récupérer les informations des concerts, assurant ainsi
      une mise à jour en temps réel des événements.
    </>
  ),
  infos: {
    contexte: 'Scolaire',
    timing: '3 jours',
    numberOfPeople: 3,
  },
};
