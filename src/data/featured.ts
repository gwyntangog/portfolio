export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface TeachingSession {
  title: string;
  course: string;
  semester: string;
  description: string;
  materials?: string;
  image?: string;
  caption?: string;
}

export interface ResearchOutput {
  title: string;
  lab: string;
  type: 'Poster' | 'Award' | 'Brief' | 'Paper';
  description: string;
  link?: string;
  image?: string;
}

export const projects: Project[] = [
    {
    title: "🛠️ Work in Progress 🛠️",
    description: "🛠️ work in progress 🛠️",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/gwynt/project-alpha",
    live: "https://project-alpha.vercel.app",
    // image: "/images/project-alpha.png",
  },
  {
    title: "Material Substitution Data Dashboard",
    description: "A brief description of what this project does and why it matters.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/gwynt/project-alpha",
    live: "https://project-alpha.vercel.app",
    // image: "/images/project-alpha.png",
  },
  {
    title: "Portfolio Website",
    description: "A dee",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/gwynt/project-beta",
    // no live = shows "Repo only" badge automatically
  },
  {
    title: "Light Touch Support Program Analytics Dashboard",
    description: "A dee",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/gwynt/project-beta",
    // no live = shows "Repo only" badge automatically
  },
  {
    title: "Journal Cooking",
    description: "A dee",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/gwynt/project-beta",
    // image: "/images/project-alpha.png",
    // no live = shows "Repo only" badge automatically
  },
];

export const teaching: TeachingSession[] = [
  {
    title: "Exam Review Session",
    course: "6.1200 Math for Computer Science",
    semester: "Fall 2025",
    description: "Led a class-wide review session covering proof techniques. I started this tradition during my first semester as a teaching assistant.",
    image: `${import.meta.env.BASE_URL}/assets/thumbnails/612Teaching.jpeg`,
    materials: "https://www.youtube.com/watch?v=djMiglg9qqw",
    caption: "Watch the video here!",
  },
];

export const research: ResearchOutput[] = [
  {
    title: "Your Poster Title Here",
    lab: "Your Lab Name",
    type: "Poster",
    description: "Brief description of the research and what was presented.",
    link: "https://link-to-poster.com",
  },
  {
    title: "Award Name Here",
    lab: "Your Lab Name",
    type: "Award",
    description: "Brief description of what this award recognized.",
    // no link is fine
  },
  {
    title: "Research Brief Title",
    lab: "Your Lab Name",
    type: "Brief",
    description: "Brief description of the research brief and its scope.",
    link: "https://link-to-brief.com",
  },
];
