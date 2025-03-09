import { Project } from '@/data/project';
import { Stack, Text } from '@mantine/core';
export const UrbanGreenProject: Project['layout'] = {
  what: (
    <>
      <Text>
        Urban Green est une entreprise spécialisée dans l’aménagement végétal
        des petits espaces urbains, offrant des solutions innovantes et
        écoresponsables pour intégrer la nature en milieu urbain.
        L&apos;objectif est d&apos;améliorer le cadre de vie en proposant des
        aménagements verts optimisés pour les balcons, terrasses, patios et
        espaces restreints en ville.
      </Text>
      <Text>
        Grâce à une approche sur mesure, Urban Green accompagne ses clients –
        particuliers et professionnels – dans la conception et la mise en place
        d’espaces végétalisés esthétiques et fonctionnels. L’entreprise propose
        également des conseils en entretien et durabilité pour assurer la
        pérennité des installations.
      </Text>
    </>
  ),
  me: (
    <Stack gap={0}>
      <Text>
        <Text span fw="bolder">
          Marketing :
        </Text>{' '}
        Analyse SWOT, étude des cibles et de la concurrence, définition du
        positionnement stratégique et élaboration d&apos;un plan marketing.
      </Text>
      <Text>
        <Text span fw="bolder">
          Design & communication :
        </Text>{' '}
        Création d’un moodboard, sélection des couleurs et typographies,
        conception du logo et des cartes de visite, mise en place d’une
        stratégie de communication.
      </Text>
      <Text>
        <Text span fw="bolder">
          Web design :
        </Text>{' '}
        Audit ergonomique, élaboration de wireframes et prototypage pour une
        expérience utilisateur optimisée.
      </Text>
      <Text>
        <Text span fw="bolder">
          Développement web :
        </Text>{' '}
        Rédaction du cahier des charges et développement d’un site vitrine
        interactif.
      </Text>
    </Stack>
  ),
  why: 'Création d’un site vitrine dynamique mettant en avant les services écoresponsables et l’expertise en paysagisme urbain du client',
  infos: {
    contexte: 'Scolaire - cas client',
    timing: '1 semaine',
    numberOfPeople: 1,
  },
};
