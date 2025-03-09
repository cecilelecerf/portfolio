import { Project } from '@/data/project';
import { Text } from '@mantine/core';

export const HandymoovProject: Project['layout'] = {
  what: (
    <>
      Projet visant à faciliter l&apos;accès aux transports pour les personnes à
      mobilité réduite. Un waze pour les personnes en situations de handicapes
      dans le contexte des transports en commun.
    </>
  ),
  why: (
    <>
      Créer un projet concret en collaboration avec d&apos;autre secteur du
      digital
    </>
  ),
  me: (
    <Text>
      Participation aux interviews des utilisateurs en collaboration avec
      l&apos;équipe marketing pour mieux comprendre leurs besoins. <br></br>
      Intégration d&apos;une landing page.<br></br>
      Développement d&apos;une API et d&apos;une application mobile de gestion
      des trajets de transport, incluant un système d&apos;alerte utilisateur
      pour signaler des incidents et une planification des trajets via
      l&apos;API de la RATP.
    </Text>
  ),
  infos: {
    contexte: 'Scolaire',
    timing: '6 mois',
    numberOfPeople: 6,
  },
};
