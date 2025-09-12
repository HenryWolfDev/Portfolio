import type { Project } from './project-card/project-card.component';

export const PROJECTS: Project[] = [
  {
    slug: 'join',
    title: 'Join',
    teaser_text:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    image: '/assets/Design material/05_Projects_Images/Join.png',
    featured: true,
  },
  {
    slug: 'el-pollo-loco',
    title: 'El Pollo Loco',
    teaser_text:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    image: '/assets/Design material/05_Projects_Images/El_Pollo_Loco.png',
  },
  {
    slug: 'dabubble',
    title: 'DABubble',
    teaser_text:
      'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    image: '/assets/Design material/05_Projects_Images/DA_Bubble.png',
  },
];
