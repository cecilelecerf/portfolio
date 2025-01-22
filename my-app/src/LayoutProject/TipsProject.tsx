// import { Text, Stack } from '@mantine/core';

import { Project } from "@/data/project";
import { Text } from "@mantine/core";

export const TipsProject: Project["layout"] = {
  what: <>application web destinée aux
    restaurateurs, permettant d{'’'}enregistrer et de répartir équitablement
    les pourboires entre les membres du personnel, tels que les serveurs et
    cuisiniers.
    <Text>
      L{"'"}application permet à l{'’'}administrateur d{'’'}ajouter des
      pourboires, de suivre leur traçabilité, et de gérer les employés, ce qui
      est essentiel pour simplifier la comptabilité des pourboires dans les
      restaurants.
    </Text></>,
  me: <Text>Gestion du back end avec conception de la db, création de l'api en SYmfony avec API plateform, création des diverses routes utile pour le front</Text>,
  infos: {
    contexte: "Profesionnel",
    timing: "3 mois",
    numberOfPeople: 3
  }
}

// export const TipsProject = () => (
//   <Stack gap="md">
//     <Text>
//       Dans le cadre de mon stage de 2 mois chez <strong>Capy Web</strong>, j
//       {'’'}ai participé à la création d{'’'}une application web destinée aux
//       restaurateurs, permettant d{'’'}enregistrer et de répartir équitablement
//       les pourboires entre les membres du personnel, tels que les serveurs et
//       cuisiniers.
//     </Text>

//     <Text>
//       Mon rôle principal était le développement du <strong>backend</strong>, en
//       utilisant <strong>Symfony</strong> pour créer une API performante. Cette
//       application avait pour objectif de simplifier la gestion des pourboires,
//       de garantir une traçabilité des montants reçus, et de faciliter leur
//       répartition entre les employés selon les services (matin, midi, soir).
//     </Text>

//     <Text>
//       Le projet a été conçu de manière collaborative avec deux autres
//       stagiaires, responsables de la partie <strong>frontend</strong>. Nous
//       avons également travaillé ensemble sur la création des maquettes de l{"'"}
//       application avec <strong>Figma</strong>, et nous avons élaboré un{' '}
//       <strong>diagramme UML</strong> pour définir l{'’'}architecture du projet.
//     </Text>

//     <Text>
//       L{"'"}application permet à l{'’'}administrateur d{'’'}ajouter des
//       pourboires, de suivre leur traçabilité, et de gérer les employés, ce qui
//       est essentiel pour simplifier la comptabilité des pourboires dans les
//       restaurants.
//     </Text>
//   </Stack>
// );
