export interface Project {
  slug: string;
  title: string;
  gitHub_Link: string;
  details: string;
  teaser_text: string;
  image: string;
  techStack: string[];
  duration: number;
}

export interface TechIcon {
  key: string;
  label: string;
  iconSrc: string;
}
