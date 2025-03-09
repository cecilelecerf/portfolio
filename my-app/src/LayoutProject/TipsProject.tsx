import { Project } from '@/data/project';
import { Stack, Text } from '@mantine/core';

export const TipsProject: Project['layout'] = {
  what: (
    <Stack gap="xs">
      <Text>
        Une application web destinée aux restaurateurs, permettant
        d&apos;enregistrer et de répartir équitablement les pourboires entre les
        membres du personnel, tels que les serveurs et les cuisiniers.
      </Text>
      <Text>
        L&apos;application offre à l&apos;administrateur la possibilité
        d&apos;ajouter des pourboires, d&apos;en assurer la traçabilité et de
        gérer les employés, facilitant ainsi la comptabilité des pourboires au
        sein des restaurants.
      </Text>
    </Stack>
  ),
  me: (
    <Text>
      Développement du back-end : conception de la base de données, création de
      l&apos;API avec Symfony et API Platform, et mise en place des différentes
      routes nécessaires pour le front-end.
    </Text>
  ),
  infos: {
    contexte: 'Profesionnel',
    timing: '3 mois',
    numberOfPeople: 3,
  },
};
