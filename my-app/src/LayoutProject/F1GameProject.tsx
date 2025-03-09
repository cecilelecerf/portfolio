import { Project } from '@/data/project';
import { Text, List, ListItem } from '@mantine/core';

export const F1GameProject: Project['layout'] = {
  what: (
    <>
      Application de jeu et de paris sur les résultats des Grands Prix de
      Formule 1. Cette application permet de parier sur :
      <List spacing="xs">
        <ListItem>
          Le pilote qui terminerait à la 10<sup>e</sup> place.
        </ListItem>
        <ListItem>Le premier pilote à sortir de la course.</ListItem>
      </List>
      <Text>
        Ces paris rapportaient des points pour établir des{' '}
        <strong>classements</strong> au sein de groupes d’amis, que les
        utilisateurs pouvaient créer eux-mêmes.
      </Text>
    </>
  ),
  me: (
    <>
      J’ai conçu et optimisé la base de données en m’appuyant sur un UML. En
      tant que lead back, j’ai assuré la coordination entre le front et le back
      ainsi que le choix des technologies pour le backend. Avec trois autres
      développeurs, nous avons développé l’ensemble des endpoints nécessaires au
      front-end.
    </>
  ),
  infos: {
    contexte: 'Scolaire',
    timing: '2 semaines',
    numberOfPeople: 8,
  },
};
