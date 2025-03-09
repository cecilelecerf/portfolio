import { Project } from '@/data/project';
import { Stack, Text } from '@mantine/core';

export const MeufDeterreProject: Project['layout'] = {
  what: (
    <Text>
      Le but de <strong>Meuf Deter</strong> est de fournir une plateforme de
      formation et de networking, permettant aux femmes entrepreneures de se
      connecter, de se former, et de bâtir leur réseau pour réussir. La
      plateforme propose des formations en ligne, des coachings personnalisés et
      un accès à un réseau de professionnels. Elle s&apos;adresse aux femmes
      souhaitant être accompagnées pour se lancer sereinement dans
      l&apos;entrepreneuriat et développer leurs projets avec succès.
    </Text>
  ),
  me: (
    <Stack gap={0}>
      <Text>
        <strong>Marketing</strong> : J&apos;ai participé à l&apos;élaboration de
        la stratégie marketing pour faire connaître la plateforme et attirer les
        entrepreneures à rejoindre le programme.
      </Text>
      <Text>
        <strong>Création de contenu</strong> : J&apos;ai créé des documents
        comme un livre blanc et du contenu pour les réseaux sociaux afin de
        promouvoir la plateforme et ses services.
      </Text>
      <Text>
        <strong>Management de l&apos;équipe</strong> : En tant que chef de
        projet, j&apos;ai coordonné le travail entre les membres de
        l&apos;équipe, en assurant une bonne communication entre les deux autres
        personnes responsables du marketing et de la communication ainsi que
        celle du web-design et de la direction artistique.
      </Text>
    </Stack>
  ),
  infos: {
    contexte: 'Scolaire - cas client',
    timing: '2 mois',
    numberOfPeople: 4,
  },
};
