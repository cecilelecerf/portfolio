import { Project } from '@/data/project';
import { Stack, Text } from '@mantine/core';

export const SihmatiProject: Project['layout'] = {
  what: (
    <Text>
      Sihmati est un cabinet de sophrologie proposant des prestations adaptées
      aussi bien aux particuliers qu&apos;aux entreprises, en BtoC et BtoB.
      L&apos;objectif du projet était de concevoir une plateforme web mettant en
      avant les services du cabinet, avec un accent particulier sur les offres
      payantes et la prise de rendez-vous en ligne.
    </Text>
  ),
  why: 'Offrir au cabinet une présence digitale impactante pour promouvoir ses services, instaurer une relation de confiance et simplifier l’accès aux prestations.',
  me: (
    <Stack>
      <Text>
        J&apos;ai pris en charge l&apos;élaboration du cahier des charges pour
        le développement de la plateforme, ainsi que la création d&apos;un guide
        d&apos;accompagnement client afin de faciliter l&apos;utilisation des
        services en ligne.
      </Text>
      <Text>
        En parallèle, j&apos;ai mené une analyse stratégique du marché pour
        identifier les opportunités de positionnement. J&apos;ai défini la
        stratégie marketing et mis en place un plan de communication digital
        adapté aux objectifs du cabinet.
      </Text>
      <Text>
        J&apos;ai également développé de la plateforme web en suivant le
        prototypage afin qu&apos;elle soit intuitive et directement exploitable
        par le client.
      </Text>
    </Stack>
  ),
  more: (
    <>
      <Text>
        Mon collaborateur, directeur artistique, s&apos;est chargé de la
        direction visuelle et artistique du projet. Il a conçu le moodboard,
        établi la charte graphique et créé les contenus destinés aux réseaux
        sociaux, contribuant ainsi à renforcer l&apos;image de marque du
        cabinet.
      </Text>
      <Text>
        Il a également réalisé des vidéos de lancement et des reels pour
        promouvoir les services du cabinet sur les réseaux sociaux.
      </Text>
    </>
  ),
  infos: {
    contexte: 'Scolaire - cas client',
    timing: '2 semains',
    numberOfPeople: 2,
  },
};
