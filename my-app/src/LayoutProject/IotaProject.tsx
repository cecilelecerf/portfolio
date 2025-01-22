import { Project } from '@/data/project';
import { List, ListItem, } from '@mantine/core';

export const IotaProject: Project["layout"] = {
  what: "Ce projet, initié par l’école 42, a pour objectif de développer des compétences numériques et psychosociales chez les enfants de CM1 et CM2.L’accent est mis sur l’importance de l’entraide et de la collaboration pour favoriser leur apprentissage.",
  why: "Apprendre et me perfectionner au sein de mon alternance",
  me: (
    <List>
      <ListItem>Développement de module front end de gestion de la donnée</ListItem>
      <ListItem>Développement front-end des activités avec attention particulière aux           animations interactives pour rendre la plateforme ludique et immersive</ListItem>
      <ListItem>Conception pédagogique des activités basée sur les 5 domaines de compétences du CRCN</ListItem>
    </List>
  ),
  infos: {
    contexte: "Profesionnel",
    numberOfPeople: 10,
    timing: "1 an et demi"
  }
}



//   <>
//       <Title order={2}>Contexte</Title>
//       <Text>
//         Iota est une entreprise avec laquelle je travaille depuis un an et demi
//         dans le cadre de mon alternance.
//       </Text>
//       <Title order={2} mt="md">
//         Mon rôle
//       </Title>
//       Au sein de l’équipe, j’ai participé activement à la conception des activités
// :
//       <List>
//         <ListItem>
//           Réflexion sur les thématiques et les approches pédagogiques.
//         </ListItem>
//         <ListItem>
//           Développement de méthodes pour transmettre ces notions de manière
//           ludique, en m’appuyant sur des recherches approfondies sur la
//           gamification et l’éducation des enfants.
//         </ListItem>
//       </List>
//       <Text>
//         Cependant, mon rôle principal reste celui de développeuse d’activités, en
//         me concentrant sur :
//       </Text>
//       <List>
//         <ListItem>
//           Le développement front-end, avec une attention particulière aux
//           animations interactives.
//         </ListItem>
//         <ListItem>
//           La création d’une plateforme ludique et immersive, qui se distingue des
//           pages web classiques par une expérience utilisateur innovante.
//         </ListItem>
//       </List>
//     </>
