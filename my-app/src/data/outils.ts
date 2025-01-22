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
import next from '../assets/logo/next.png';
import axios from '../assets/logo/axios.png';
import apiPlateform from '../assets/logo/apiPlateform.png';
import dart from '../assets/logo/dart.png';
import express from '../assets/logo/express.png';
import flutter from '../assets/logo/flutter.png';
import github from '../assets/logo/github.png';
import zod from '../assets/logo/zod.png';
import ai from '../assets/logo/ai.png';
import canva from '../assets/logo/canva.png';
import drawSql from '../assets/logo/drawSQL.png';
import id from '../assets/logo/id.png';
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
    logo: next,
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
    logo: axios,
    often: true,
  },
  express: {
    name: 'Express',
    logo: express,
    often: true,
  },
  zod: {
    name: 'Zod',
    logo: zod,
    often: true,
  },
  apiSf: {
    name: 'Api plateform',
    logo: apiPlateform,
  },
  flutter: {
    name: 'Flutter',
    logo: flutter,
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
    logo: github,
    often: true,
  },
  figma: {
    name: 'Figma',
    logo: figma,
    often: true,
  },
  canva: {
    name: 'Canva',
    logo: canva,
  },
  ai: {
    name: 'Illustrator',
    logo: ai,
  },
  ind: {
    name: 'InDesign',
    logo: id,
  },
  uml: {
    name: 'Draw Sql',
    logo: drawSql,
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
    name: 'Dart',
    logo: dart,
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
