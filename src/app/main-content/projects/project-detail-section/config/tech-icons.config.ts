import { TechIcon } from '../../../shared-interfaces/project';

export const TECH_ICON_MAP: Record<string, TechIcon> = {
  css: {
    key: 'css',
    label: 'CSS',
    iconSrc: 'assets/icons/skill-icons/css-icon.png',
  },
  html: {
    key: 'html',
    label: 'HTML',
    iconSrc: 'assets/icons/skill-icons/html-icon.png',
  },
  javascript: {
    key: 'javascript',
    label: 'JavaScript',
    iconSrc: 'assets/icons/skill-icons/javaScript-icon.png',
  },
  firebase: {
    key: 'firebase',
    label: 'Firebase',
    iconSrc: 'assets/icons/skill-icons/firebase-icon.png',
  },
  angular: {
    key: 'angular',
    label: 'Angular',
    iconSrc: 'assets/icons/skill-icons/angular-icon.png',
  },
  typescript: {
    key: 'typescript',
    label: 'TypeScript',
    iconSrc: 'assets/icons/skill-icons/typeScript-icon.png',
  },
} as const;
