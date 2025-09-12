# Components

This document provides an overview of the main Angular components in this portfolio project.  
It explains their purpose and how they are connected.

## Main Components

- **AppComponent (`app/`)**  
  Root component, contains main-content component and router outlet.

- **Header (`shared-components/header/`)**  
  Top navigation bar with links to different sections (skills, projects, contact).

- **Footer (`shared-components/footer/`)**  
  Global footer with social links.

- **SkillSetSection (`main-content/skill-set-section/`)**  
  Displays all frontend skills with icons, animations, and descriptions.

- **ProjectCard (`main-content/projects/project-card/`)**  
  Reusable card component that shows a project (image, title, teaser text).

- **ProjectsOverview (`main-content/projects/`)**  
  Grid/list of all projects, uses multiple `ProjectCard` components.  
  Each card links to a detail page via Angular Router.

- **ProjectDetail (`main-content/projects/project-detail/`)**  
  Shows details of a single project. Routed by `project/:id` or `project/:slug`.

- **ContactForm (`main-content/contact-form/`)**  
  Form to contact me (in progress, will include validation and backend integration).
