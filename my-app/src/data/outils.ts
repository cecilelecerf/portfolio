import react from '../assets/logo/react.png';
import vue from '../assets/logo/vue.png';
import symfony from '../assets/logo/sf.png';
import node from '../assets/logo/node.png';
import docker from '../assets/logo/docker.png';
import notion from '../assets/logo/notion.png';
import gitlab from '../assets/logo/gitlab.png';
import figma from '../assets/logo/figma.svg';
import drive from '../assets/logo/drive.png';
import ts from '../assets/logo/ts.png';
import js from '../assets/logo/js.png';
import php from '../assets/logo/php.png';
import { StaticImageData } from 'next/image';

export type Outils = {
  name: string;
  logo?: StaticImageData;
  often?: boolean;
};

export const frameworks: Record<string, Outils> = {
  react: {
    name: 'React',
    logo: react,
    often: true,
  },
  next: {
    name: 'Next',
    often: true,
  },
  vue: {
    name: 'Vue',
    logo: vue,
  },
  symfony: {
    name: 'Symfony',
    logo: symfony,
  },
  node: {
    name: 'Node',
    logo: node,
    often: true,
  },
};

export const librairies: Record<string, Outils> = {
  axios: {
    name: 'Axios',
    often: true,
  },
  express: {
    name: 'Express',
    often: true,
  },
  zod: {
    name: 'Zod',
    often: true,
  },
  apiSf: {
    name: 'Api plateform',
  },
  flutter: {
    name: 'Flutter',
  },
};

export const outils: Record<string, Outils> = {
  docker: {
    name: 'Docker',
    logo: docker,
    often: true,
  },
  notion: {
    name: 'Notion',
    logo: notion,
    often: true,
  },
  gitlab: {
    name: 'GitLab',
    logo: gitlab,
  },
  github: {
    name: 'GitHub',
    often: true,
  },
  figma: {
    name: 'Figma',
    logo: figma,
    often: true,
  },
  canva: {
    name: 'Canva',
  },
  ai: {
    name: 'Illustrator',
  },
  ind: {
    name: 'InDesign',
  },
  uml: {
    name: 'Draw Uml',
    often: true,
  },
  drive: {
    name: 'Suite google',
    logo: drive,
    often: true,
  },
};

export const languages: Record<string, Outils> = {
  ts: {
    name: 'Typescript',
    logo: ts,
    often: true,
  },
  js: {
    name: 'Javascript',
    logo: js,
  },
  php: {
    name: 'PHP',
    logo: php,
  },
  draft: {
    name: 'Draft',
  },
};
interface AllOutils {
  label: string;
  infos: Record<string, Outils>;
}
export const allOutils: AllOutils[] = [
  {
    label: 'Frameworks',
    infos: frameworks,
  },
  {
    label: 'Languages',
    infos: languages,
  },
  {
    label: 'Librairies',
    infos: librairies,
  },
  {
    label: 'Outils',
    infos: outils,
  },
];
