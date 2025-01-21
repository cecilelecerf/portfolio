import { List, ListItem, Text, Title } from '@mantine/core';

export const IotaProject = () => (
  <>
    <Title order={2}>Contexte</Title>
    <Text>
      Iota est une entreprise avec laquelle je travaille depuis un an et demi
      dans le cadre de mon alternance. Ce projet, initié par l’école 42, a pour
      objectif de développer des compétences numériques et psychosociales chez
      les enfants de CM1 et CM2. L’accent est mis sur l’importance de l’entraide
      et de la collaboration pour favoriser leur apprentissage.
    </Text>
    <Title order={2} mt="md">
      Mon rôle
    </Title>
    Au sein de l’équipe, j’ai participé activement à la conception des activités
    :
    <List>
      <ListItem>
        Réflexion sur les thématiques et les approches pédagogiques.
      </ListItem>
      <ListItem>
        Développement de méthodes pour transmettre ces notions de manière
        ludique, en m’appuyant sur des recherches approfondies sur la
        gamification et l’éducation des enfants.
      </ListItem>
    </List>
    <Text>
      Cependant, mon rôle principal reste celui de développeuse d’activités, en
      me concentrant sur :
    </Text>
    <List>
      <ListItem>
        Le développement front-end, avec une attention particulière aux
        animations interactives.
      </ListItem>
      <ListItem>
        La création d’une plateforme ludique et immersive, qui se distingue des
        pages web classiques par une expérience utilisateur innovante.
      </ListItem>
    </List>
  </>
);
