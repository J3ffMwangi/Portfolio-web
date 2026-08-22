export type PageType = "home" | "about" | "projects" | "skills" | "contact";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: "Full Stack" | "Frontend" | "Mobile & API" | "Cloud & DevOps";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon?: string }[];
}
