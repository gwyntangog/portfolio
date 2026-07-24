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
  lab?: string;
  type: 'Poster' | 'Award' | 'Brief' | 'Paper';
  description: string;
  link?: string;
  image?: string;
}

export const projects: Project[] = [
    {
    title: "🛠️ Work in Progress 🛠️",
    description: "🛠️ work in progress 🛠️",
    tech: [],
  },
  {
    title: "Material Substitution Data Dashboard",
    description: "🛠️ Work in progress. A dashboard that shows how the demand for products predominantly made of copper change with material prices. Makes use of synthetic interview data to create utility functions.",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/gwyntangog/msl_analysis",
    image: `${import.meta.env.BASE_URL}/assets/thumbnails/msl_dashboard.png`,
    live: "https://gwyntangog.github.io/msl_analysis/",
  },
  {
    title: "Portfolio Website",
    description: "This website! I upgraded from my first website (which was made using a template), to one made from scratch.",
    tech: ["HTML", "CSS", "Astro", "TypeScript"],
    github: "https://github.com/gwyntangog/portfolio",
    live: "https://gwyntangog.github.io/portfolio/",
  },
  {
    title: "Light Touch Support Program Analytics Dashboard",
    description: "For my internship, I performed data analysis on recent reporting data from the Engine Room's Light Touch Support program. Wrote automation scripts for repetitive data analysis tasks. Made and deployed an interactive data analysis dashboard.",
    tech: ["Python", "Dash", "JavaScript"],
    github: "https://github.com/gwyntangog/LITS_data_analytics",
    image: `${import.meta.env.BASE_URL}/assets/thumbnails/lits_dashboard.png`,
    live: "https://lits-analyst.onrender.com/"
  },
  {
    title: "Journal Cooking",
    description: "Developed a recipe-sharing website in a team as part of the MIT Web Lab class. The process covered brain storming, mock-ups, and programming.",
    tech: ["JavaScript", "CSS", "React"],
    image: `${import.meta.env.BASE_URL}/assets/thumbnails/journal_cooking.png`,
    github: "https://github.com/weblab-class/Gyuu03-littlenotebook-airconbear",
  },
  {
    title: "First Iteration - Personal Website",
    description: "My first iteration of a personal website, using a bootstrap website.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}/assets/thumbnails/first_personal.png`,
    github: "https://github.com/gwyntangog/resume",
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
    title: "Assessment of Gamification Data to inform Concrete Delivery Professional Shortage",
    type: "Poster",
    description: "I analyzed data from several concrete companies using gamification to measure its impacts on driver productivity, retention, and recruitment using Python. I made a research poster and presented it to industry stakeholders.",
    image: `${import.meta.env.BASE_URL}/assets/thumbnails/gamification.png`,
    link: "https://drive.google.com/file/d/1RqNX0FYlklpnejkK-74roY5JqA5cg5Tj/view?usp=drive_link",
  },
  {
    title: "Site-Specific Carbon Uptake Estimation of Crushed Concrete at End-of-Life",
    type: "Poster",
    description: "I performed data cleaning and modeling to analyze the amount of carbon uptake in a specific cement stockpile yard. I made a research poster and presented results to industry stakeholders.",
    image: `${import.meta.env.BASE_URL}/assets/thumbnails/carbonuptake.png`,
    link: "https://drive.google.com/file/d/1OfOODrRrusjJKFxdST8uftOiSRQCJJMI/view?usp=drive_link",
  },
  {
    title: "Outstanding UROP Student Award",
    type: "Award",
    description: "The Outstanding UROP Student Awards recognize students for exceptional contributions as undergraduate researchers. Recipients are selected based on nominations submitted by UROP supervisors and mentors.",
    image: `${import.meta.env.BASE_URL}/assets/thumbnails/urop_award.png`,
    link: "https://urop.mit.edu/mentors/outstanding-student/student-recipients/",
  },
];
