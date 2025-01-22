// import { Title, Text, Stack, Box } from '@mantine/core';

import Projects from "@/app/projects/page";
import { Project } from "@/data/project";
import { Text } from "@mantine/core";

export const SihmatiProject: Project["layout"] = {
  what: <> cabinet de sophrologie.
    Ce cabinet propose des prestations de sophrologie destinées à des
    individus ou des groupes, en BtoC et BtoB. L’objectif était de
    développer un site web permettant de mettre en avant les offres de
    services de manière virtuelle, avec un accent particulier sur les
    prestations payantes.</>
  ,
  me: <>         <Text>
    Je me suis occupé de l’élaboration du Cahier des charges pour le
    développement de la plateforme ainsi que de la création d’un guide
    d’Accompagnement client.
  </Text>
    <Text>
      J{"'"}ai également pris en charge l{"'"}analyse stratégique du marché.
      J’ai travaillé sur le positionnement du produit et défini la stratégie
      marketing, ainsi que le plan de communication pour le site.
    </Text>
    <Text>Développement de la plateform pour une prise en main direct par le cliens</Text>
  </>,
  more: <>        Les Contribution de mon collègue directeur artistique sont :
    <Text size="md">
      Mon collègue, quant à lui, s’est occupé de la création de la direction
      visuelle et artistique, incluant le moodboard, la charte graphique, et
      la création du contenu pour les réseaux sociaux. Ce travail a permis
      de définir une image de marque cohérente et attrayante.
    </Text>
    <Text size="md" mt="md">
      Des vidéos de lancement et des reels ont aussi été réalisés pour
      promouvoir le cabinet sur les réseaux sociaux.
    </Text></>,
  infos: {
    contexte: "Scolaire cas client",
    timing: "2 semains",
    numberOfPeople: 2
  }
}


// export const SihmatiProject = () => {
//   return (
//     <Stack gap="md">
//       <Text>
//         Durée : 10 jours
//         <br />
//         Collaboration : Avec un DA/Web designer
//       </Text>

//       <Text size="md">
//         Dans le cadre de ce projet scolaire, nous avons travaillé sur la
//         création d{"'"}une plateforme pour Sihmati, un cabinet de sophrologie.
//         Ce cabinet propose des prestations de sophrologie destinées à des
//         individus ou des groupes, en BtoC et BtoB. L’objectif était de
//         développer un site web permettant de mettre en avant les offres de
//         services de manière virtuelle, avec un accent particulier sur les
//         prestations payantes.
//       </Text>

//       <Box>
//         <Title order={2}>Mon Rôle</Title>
//         <Text>
//           Je me suis occupé de l’élaboration du Cahier des charges pour le
//           développement de la plateforme ainsi que de la création d’un guide
//           d’Accompagnement client.
//         </Text>
//         <Text>
//           J{"'"}ai également pris en charge l{"'"}analyse stratégique du marché.
//           J’ai travaillé sur le positionnement du produit et défini la stratégie
//           marketing, ainsi que le plan de communication pour le site.
//         </Text>
//       </Box>

//       <Box>
//         <Title order={2}>Contribution de mon collègue</Title>
//         <Text size="md">
//           Mon collègue, quant à lui, s’est occupé de la création de la direction
//           visuelle et artistique, incluant le moodboard, la charte graphique, et
//           la création du contenu pour les réseaux sociaux. Ce travail a permis
//           de définir une image de marque cohérente et attrayante.
//         </Text>
//         <Text size="md" mt="md">
//           Des vidéos de lancement et des reels ont aussi été réalisés pour
//           promouvoir le cabinet sur les réseaux sociaux.
//         </Text>
//       </Box>

//       <Box>
//         <Title order={2}>Notre Organisation</Title>
//         <Text size="md">
//           Nous avons utilisé un diagramme de Gantt pour planifier les tâches et
//           garantir le respect des délais. Un organigramme des tâches et une
//           répartition claire des responsabilités ont également été réalisés pour
//           optimiser notre travail en équipe.
//         </Text>
//       </Box>
//     </Stack>
//   );
// };
