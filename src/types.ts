export interface Project {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  contribution: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  highlights: string[];
  type: "mobile-security" | "ui-dataviz";
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
    badge?: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
  field?: string;
  submissionId?: string;
}
