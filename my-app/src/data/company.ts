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
    label: "Alternance, Développeuse conceptrice d'activité",
    company_name: "Ecole 42",
    description:
      "Conception d'activité front-end destiné aux enfants de manière gamifiée, puis développement de ces activités.",
    year: "2023",
    time: "2 ans",
    id_project: 9,
  },
  {
    label: "Stage, développeuse Full Stack",
    company_name: "Arcana",
    description:
      "Au sein d'une association de musique qui avait besoin de se digitaliser. Système d'inscription et gestion des membres.",
    year: "2022",
    time: "2 mois",
    id_project: 8,
  },
  {
    label: "Freelance, développeuse front end",
    company_name: "Doji ATS",
    description: "Description à développer",
    year: "2022",
    time: "2 mois",
    id_project: 7,
  },

  {
    label: "Stage, développeuse Back End",
    company_name: "Capyweb",
    description:
      "Au sein d'une agence de développement web. Stage Capyweb avec création de maquette sur Figma, présentation client, création d'une API web pour un projet  ",
    year: "2021",
    time: "3 mois",
    id_project: 6,
  },
];
