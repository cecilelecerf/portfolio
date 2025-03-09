interface Company {
  label: string;
  company_name: string;
  description: string;
  year: string;
  time: string;
  id_project: number;
}

export const compagny: Company[] = [
  {
    label: "Alternance, Développeuse Front-End et conceptrice d'activités",
    company_name: 'Ecole 42 - Projet Iota',
    description:
      "Conception d'activités front-end destinées aux enfants de manière gamifiée, suivie du développement de ces activités.",
    year: '2023',
    time: '2 ans',
    id_project: 9,
  },
  {
    label: 'Stage, Développeuse Full Stack',
    company_name: 'Arcana',
    description:
      "Au sein d'une association musicale, j'ai contribué à la digitalisation de leurs services, en développant un système d'inscription et de gestion des membres.",
    year: '2022',
    time: '2 mois',
    id_project: 8,
  },
  {
    label: 'Freelance, Développeuse Front-End',
    company_name: 'Doji ATS',
    description: 'Description à développer',
    year: '2022',
    time: '2 mois',
    id_project: 7,
  },

  {
    label: 'Stage, Développeuse Back-End',
    company_name: 'Capyweb',
    description:
      "Au sein d'une agence de développement web, j'ai créé des maquettes sur Figma, présenté des projets aux clients et développé une API pour un projet spécifique.",
    year: '2021',
    time: '3 mois',
    id_project: 6,
  },
];
