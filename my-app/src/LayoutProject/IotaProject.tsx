import { Project } from '@/data/project';
import { Text } from '@mantine/core';

export const IotaProject: Project["layout"] = {
  what: "Ce projet, initié par l’école 42, est une plateforme ludique qui a pour objectif de développer des compétences numériques et psychosociales chez les enfants de CM1 et CM2. L’accent est mis sur l’importance de l’entraide et de la collaboration pour favoriser leur apprentissage.",
  why: "Me perfectionner dans le développement front-end d'une plateform ludique",
  me: (
    <Text>
      Développement de module front end de gestion de la donnée.<br></br>
      Développement front-end des activités avec attention particulière aux animations interactives pour rendre la plateforme ludique et immersive<br></br>
      Conception pédagogique des activités basée sur les 5 domaines de compétences du CRCN
    </Text>
  ),
  infos: {
    contexte: "Profesionnel",
    numberOfPeople: 10,
    timing: "1 an et demi"
  }
}
