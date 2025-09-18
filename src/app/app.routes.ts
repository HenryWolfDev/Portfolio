import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },

  {
    path: 'legal-notice',
    loadComponent: () =>
      import('./legal-notice/legal-notice.component').then(
        (m) => m.LegalNoticeComponent
      ),
  },

  {
    path: 'projects/:slug',
    loadComponent: () =>
      import(
        './main-content/projects/project-detail-section/project-detail-section.component'
      ).then((m) => m.ProjectDetailSectionComponent),
  },
];
