import { Project } from '@/data/project';
import { Box, Flex, Paper, Stack, Text } from '@mantine/core';

export const HandymoovProject: Project["layout"] = {
  what: <>Projet visant à faciliter
    l&apos;accès aux transports pour les personnes à mobilité réduite. un waze pour les personnes en situations de handicapes dans le contexte des transports en commun</>,
  why: <>Créer un projet concret en collaboration avec d'autre secteur du digital et mettre en place l'ensemble des connaissances vues durant mes périodes scolaires</>,
  me: (
    <Stack>
      <Text>j&apos;ai participé à la réalisation des interviews de
        la cible en colaboration avec l&apos;équipe marketing afin de mieux
        comprendre leurs besoins spécifiques.</Text>
      <Text>Intégration d'une landing page</Text>
      <Text>
        Création d'une API et une application mobile de trajet de transport avec un systeme d'alerte de problème par les users et une planification et récupération des divers problème via l'api de la RATP
      </Text>
    </Stack>
  ),
  infos: {
    contexte: "Scolaire",
    timing: "6 mois",
    numberOfPeople: 6
  }
}

// export const HandymoovProject = () => (
//   <Stack gap="md">
//     <Text>
//       <strong>Projet scolaire de 6 mois</strong>, visant à faciliter
//       l&apos;accès aux transports pour les personnes à mobilité réduite.
//     </Text>

//     <Text>
//       Pour ce projet, j&apos;ai participé à la réalisation des interviews avec
//       la cible en colaboration avec l&apos;équipe marketing afin de mieux
//       comprendre leurs besoins spécifiques. Cette étape nous a permis de définir
//       les fonctionnalités essentielles de l&apos;application. Le développement a
//       ensuite duré deux mois, durant lesquels j&apos;ai créé une application
//       mobile connectée à une API développée en Node.js avec Express. L&apos;API,
//       quant à elle, récupère les informations relatives aux transports en commun
//       via l&apos;API Prim de la RATP, permettant de fournir des données en temps
//       réel sur les trajets accessibles. Mon rôle principal a été le
//       développement complet de l’application, depuis la création de l&apos;API
//       jusqu’à la partie front-end. J’ai également collaboré avec l’équipe sur le
//       web design pour assurer une expérience utilisateur optimale. Les
//       technologies utilisées pour ce projet incluent Node.js pour la gestion de
//       l&apos;API, Sequelize pour l’ORM, et React Native pour le développement de
//       l’application mobile.
//     </Text>
//     <Box>
//       <Text w="bold">Équipe :</Text>
//       <Flex gap="md" wrap="wrap">
//         <Paper shadow="md" p="sm" radius="sm">
//           <Text>Marion Cuquenèle</Text>
//           <Text>Marketing/Coordination</Text>
//         </Paper>
//         <Paper shadow="md" p="sm" radius="sm">
//           <Text>Léna Guillotin</Text>
//           <Text>E-commerce</Text>
//         </Paper>
//         <Paper shadow="md" p="sm" radius="sm">
//           <Text>Klara Mens</Text>
//           <Text>Graphisme</Text>
//         </Paper>
//         <Paper shadow="md" p="sm" radius="sm">
//           <Text>Moi-même</Text>
//           <Text>Développement web</Text>
//         </Paper>
//         <Paper shadow="md" p="sm" radius="sm">
//           <Text>Alexandre Demay</Text>
//           <Text>Communication digitale</Text>
//         </Paper>
//         <Paper shadow="md" p="sm" radius="sm">
//           <Text>Quentin Raffenne</Text>
//           <Text>Web design</Text>
//         </Paper>
//       </Flex>
//     </Box>
//   </Stack>
// );
