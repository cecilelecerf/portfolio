import { Title, Text, Stack, List, ListItem, Box } from '@mantine/core';

export const MeufDeterreProject = () => {
  return (
    <Stack gap="md">
      <Text>
        Dans le cadre de mon projet scolaire, j{"'"}ai travaillé pour un cas
        client : <strong>Meuf Deter</strong>
      </Text>
      <Box>
        <Title order={3}>Objectif du projet</Title>
        <Text>
          {`Le but principal de <strong>Meuf Deter</strong> est de fournir une
          plateforme de formation et de networking, permettant aux femmes
          entrepreneures de se connecter, de se former, et de bâtir leur réseau
          pour réussir. La plateforme propose des formations en ligne, des
          coachings personnalisés et un accès à un réseau de professionnels.
          Elle s'adresse aux femmes souhaitant être accompagnées pour se lancer
          sereinement dans l’entrepreneuriat et développer leurs projets avec
          succès.`}
        </Text>
      </Box>
      <Box>
        <Title order={3}>Mon rôle dans le projet</Title>
        <Text>
          Dans ce projet, j{"'"}ai occupé le rôle de{' '}
          <strong>chef de projet</strong> et j{"'"}ai travaillé sur la partie{' '}
          <strong>marketing</strong> et <strong>création de contenu</strong>.
          Voici les principales missions que j’ai réalisées :
        </Text>
        <List>
          <ListItem>
            <strong>Marketing</strong> : J’ai participé à l’élaboration de la
            stratégie marketing pour faire connaître la plateforme et attirer
            les entrepreneures à rejoindre le programme.
          </ListItem>
          <ListItem>
            <strong>Création de contenu</strong> : J’ai créé des documents comme
            un livre blanc et du contenu pour les réseaux sociaux afin de
            promouvoir la plateforme et ses services.
          </ListItem>
          <ListItem>
            <strong>Management de l’équipe</strong> : En tant que chef de
            projet, j’ai coordonné le travail entre les membres de l’équipe, en
            assurant une bonne communication entre les deux autres personnes
            responsables du marketing et de la communication ainsi que celle du
            web-design et de la direction artistique.
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
};
