import { ReactNode } from 'react';
import { frameworks, languages, librairies, Outils, outils } from './outils';
import { HandymoovProject } from '@/LayoutProject/HandymoovProject';
import { UrbanGreenProject } from '@/LayoutProject/UrbanGreen';
import { IotaProject } from '@/LayoutProject/IotaProject';
import { F1GameProject } from '@/LayoutProject/F1GameProject';
import { TipsProject } from '@/LayoutProject/TipsProject';
import { MeufDeterreProject } from '@/LayoutProject/MeufDeterre';
import { SihmatiProject } from '@/LayoutProject/SihmatiProject';
import { SpotifyProject } from '@/LayoutProject/SpotifyProject';
import { StaticImageData } from 'next/image';

import iota1 from '../assets/projects/iotaProject/TRIVARUS_03_2_1.svg';
import iota2 from '../assets/projects/iotaProject/harcelement.png';
import iota3 from '../assets/projects/iotaProject/messenger.png';
import iota4 from '../assets/projects/iotaProject/step3.png';
import iota5 from '../assets/projects/iotaProject/cover.png';

import handymoov1 from '../assets/projects/handymoovProject/la.png';
import handymoov2 from '../assets/projects/handymoovProject/Capture-2025-01-19-224105.png';
import handymoov3 from '../assets/projects/handymoovProject/landing.png';
import handymoov4 from '../assets/projects/handymoovProject/people.png';
import handymoov5 from '../assets/projects/handymoovProject/Logo DA.png';

import meufDeterre1 from '../assets/projects/meufDeterre/Accueil.png';
import meufDeterre2 from '../assets/projects/meufDeterre/ytb.png';
import meufDeterre3 from '../assets/projects/meufDeterre/Logo from Google Drive.png';

import sihmati1 from '../assets/projects/sihmati/Maquette Desktop - A propos.png';
import sihmati2 from '../assets/projects/sihmati/Post 5 (1).png';
import sihmati3 from '../assets/projects/sihmati/Surf Simhati (1).jpg';
import sihmati4 from '../assets/projects/sihmati/lala.png';
import sihmati5 from '../assets/projects/sihmati/yoga 1.png';

import spotify1 from '../assets/projects/spotify/lolo.png';
import spotify2 from '../assets/projects/spotify/Liste artiste.png';
import spotify3 from '../assets/projects/spotify/spash screen.png';
import { AlphacorpProject } from '@/LayoutProject/AlphacorpProject';

type Work = 'Front' | 'Back' | 'WebDesign' | 'DA' | 'Marketing';

export interface Project {
  title: string;
  works: Work[];
  layout: {
    what: ReactNode;
    why?: ReactNode;
    me: ReactNode;
    more?: ReactNode;
    infos: {
      contexte: 'Scolaire' | 'Scolaire - cas client' | 'Profesionnel';
      timing: string;
      numberOfPeople: number;
    };
  };
  outils?: Partial<
    Record<'Outils' | 'Frameworks' | 'Languages' | 'Librairies', Outils[]>
  >;
  pictures?: StaticImageData[];
}

export const projects: Project[] = [
  {
    title: '',
    works: [],
    layout: {
      what: '',
      why: '',
      me: '',
      infos: {
        contexte: 'Profesionnel',
        timing: '',
        numberOfPeople: 0,
      },
    },
  },
  {
    title: 'Iota',
    works: ['Front'],
    layout: IotaProject,
    outils: {
      Frameworks: [frameworks.react],
      Outils: [outils.figma, outils.gitlab, outils.notion, outils.gitlab],
      Languages: [languages.ts],
      Librairies: [librairies.zod],
    },
    pictures: [iota5, iota1, iota2, iota3, iota4],
  },
  {
    title: 'Handymoov',
    works: ['Back', 'Front', 'Marketing'],
    layout: HandymoovProject,
    outils: {
      Frameworks: [frameworks.node, frameworks.rn],
      Outils: [
        outils.figma,
        outils.gitlab,
        outils.gitlhub,
        outils.docker,
        outils.uml,
        outils.drive,
      ],
      Languages: [languages.ts],
      Librairies: [librairies.express, librairies.axios],
    },
    pictures: [handymoov4, handymoov3, handymoov1, handymoov2, handymoov5],
  },
  {
    title: 'F1 Game',
    works: ['Back'],
    layout: F1GameProject,
    outils: {
      Frameworks: [frameworks.node],
      Outils: [outils.docker, outils.notion, outils.github, outils.uml],
      Languages: [languages.js],
    },
  },
  {
    title: 'Meuf Deterre',
    works: ['Marketing', 'WebDesign'],
    layout: MeufDeterreProject,
    outils: {
      Outils: [
        outils.figma,
        outils.ind,
        outils.notion,
        outils.ai,
        outils.drive,
      ],
    },
    pictures: [meufDeterre2, meufDeterre1, meufDeterre3],
  },
  {
    title: 'Alpha corp',
    works: ['Front'],
    layout: AlphacorpProject,
    outils: {
      Frameworks: [frameworks.react],
      Outils: [outils.figma, outils.gitlab, outils.notion, outils.gitlab],
      Languages: [languages.ts],
    },
  },
  {
    title: 'i-Tips',
    works: ['Back'],
    layout: TipsProject,
    outils: {
      Frameworks: [frameworks.symfony, frameworks.apiSf],
      Outils: [outils.figma, outils.hub],
      Languages: [languages.php],
    },
  },
  {
    title: 'Urban GREEN',
    works: ['Front', 'Back'],
    layout: UrbanGreenProject,
    outils: {
      Frameworks: [frameworks.react],
      Outils: [outils.figma, outils.gitlab, outils.notion, outils.gitlab],
      Languages: [languages.ts],
    },
  },
  {
    title: 'Doji ATS',
    works: ['Front'],
    layout: {
      what: <>En cours de rédaction...</>,
      why: '',
      me: '',
      infos: {
        contexte: 'Profesionnel',
        timing: '',
        numberOfPeople: 0,
      },
    },
    outils: {
      Frameworks: [frameworks.vue],
      Outils: [outils.figma, outils.github],
      Languages: [languages.js],
    },
  },
  {
    title: 'Simhati',
    works: ['Front', 'Back'],
    layout: SihmatiProject,
    outils: {
      Outils: [
        outils.figma,
        outils.github,
        outils.notion,
        outils.drive,
        outils.ind,
        outils.ai,
      ],
      Languages: [languages.php],
    },
    pictures: [sihmati4, sihmati3, sihmati1, sihmati2, sihmati5],
  },
  {
    title: 'Trouve ton concert',
    works: ['Front'],
    layout: SpotifyProject,
    outils: {
      Outils: [outils.figma, outils.github],
      Languages: [languages.draft],
      Frameworks: [frameworks.flutter],
    },
    pictures: [spotify1, spotify3, spotify2],
  },
  {
    title: '',
    works: [],
    layout: {
      what: <> </>,
      why: '',
      me: '',
      infos: {
        contexte: 'Profesionnel',
        timing: '',
        numberOfPeople: 0,
      },
    },
  },
];
