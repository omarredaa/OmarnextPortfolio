import { Project, Experience } from "./types";

export const specializationTitles = {
  frontend: "Front-End Developer ( Next.js | React.js | TypeScript)",
  backend: "Backend-End Developer ( Node.js | Mongodb | Mongoose)",
  fullstack:
    "Full-Stack Developer ( Next.js | React.js | TypeScript | Node.js | MongoDB | Mongoose)",
};

export const specializationDetails = {
  frontend:
    "Front-end expertise with Next.js, React.js, and TypeScript, focusing on responsive UI and fast client-side experiences.",
  backend:
    "Back-end expertise with Node.js, MongoDB, and TypeScript, building APIs, databases, and server-side logic.",
  fullstack:
    "Full-stack expertise combining front-end (Next.js, React.js, TypeScript) and back-end (Node.js, MongoDB, TypeScript) development.",
};

export const specializationAbout = {
  frontend:
    "I build beautiful, responsive web interfaces with Next.js, React.js, and TypeScript. My focus is on delivering polished user experiences and performance-driven UI architecture.",
  backend:
    "I design and implement robust back-end systems using Node.js, MongoDB, and TypeScript. My work centers on scalable APIs, data integrity, and efficient server-side logic.",
  fullstack:
    "I connect the front-end and back-end into cohesive solutions by combining Next.js, React.js, TypeScript, Node.js, and MongoDB. I enjoy creating end-to-end applications that are both user-friendly and technically sound.",
};

export const footerDescriptions = {
  frontend:
    "Front-End Developer specializing in modern web interfaces and user experiences.",
  backend:
    "Back-End Developer focused on scalable APIs and robust server-side solutions.",
  fullstack:
    "Full-Stack Developer creating end-to-end web applications with cutting-edge technologies.",
};

export const projectRoleLabels = {
  frontend: "Front-End Developer",
  backend: "Back-End Developer",
  fullstack: "Full-Stack Developer",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Perfume and SkinCare Shop",
    description:
      "An enterprise-grade e-commerce platform featuring secure authentication, payment processing, and a full administrator dashboard for order and inventory management.",
    image: "/p1.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Stripe API",
      ".Net Core",
      "SQL Server",
    ],
    liveDemo: "https://dkhonemiraates.com/",
    github: "https://github.com/omarredaa",
  },
  {
    id: "2",
    title: "Medi Mengle App",
    description:
      "A professional medical management system with secure user workflows, payment integration, and a comprehensive administration interface for patient and appointment tracking.",
    image: "/p2.png",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind css",
      ".Net Core",
      "SQL Server",
    ],
    liveDemo: "https://github.com/omarredaa",
    github: "https://github.com/omarredaa",
  },
  {
    id: "3",
    title: "Travel Planning",
    description:
      "An intelligent travel dashboard delivering real-time forecasts, interactive mapping, and itinerary planning tools to help users make informed decisions for future trips.",
    image: "/p3.png",
    techStack: ["React", "Tailwind CSS", "Leaflet library"],
    liveDemo: "https://github.com/omarredaa",
    github: "https://github.com/omarredaa",
  },
  {
    id: "4",
    title: "Electronic Store",
    description:
      "A polished retail storefront with responsive shopping experiences, multiple user role support, and an administrative console for product and sales operations.",
    image: "/p4.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "Stripe api",
      ".Net Core",
      "SQL Serever",
    ],
    liveDemo: "https://github.com/omarredaa",
    github: "https://github.com/omarredaa",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "2023 - Present",
    achievements: [
      "Developed and maintained multiple client projects using React and Node.js",
      "Improved application performance by 40% through code optimization",
      "Led a team of 3 developers on a major product redesign",
    ],
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "StartupXYZ",
    duration: "2022 - 2023",
    achievements: [
      "Built responsive web applications using React and TypeScript",
      "Implemented CI/CD pipelines reducing deployment time by 50%",
      "Collaborated with UX designers to create pixel-perfect interfaces",
    ],
  },
  {
    id: "3",
    role: "Junior Developer",
    company: "Freelance",
    duration: "2021 - 2022",
    achievements: [
      "Developed custom websites for small businesses",
      "Learned and implemented modern web technologies",
      "Delivered projects on time and within budget",
    ],
  },
];

export type Specialization = "frontend" | "backend" | "fullstack";

export const skillCategories = [
  {
    name: "Front-End Development",
    skills: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Typescript"],
  },
  {
    name: "State Management",
    skills: ["Redux", "Context API"],
  },
  {
    name: "Styling & UI",
    skills: ["Tailwind CSS", "Material UI", "Responsive Design"],
  },
  {
    name: "Tools & Workflow",
    skills: ["ESLint", "Prettier", "Git", "GitHub"],
  },
];

export const skillCategoriesBySpecialization: Record<
  Specialization,
  typeof skillCategories
> = {
  frontend: [
    {
      name: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Typescript"],
    },
    {
      name: "State Management",
      skills: ["Redux", "Context API"],
    },
    {
      name: "Styling & UI",
      skills: ["Tailwind CSS", "Material UI", "Responsive Design"],
    },
    {
      name: "Tools & Workflow",
      skills: ["ESLint", "Prettier", "Git", "GitHub"],
    },
  ],
  backend: [
    {
      name: "Back-End Development",
      skills: ["Node.js", "Express.js", "TypeScript", "REST APIs"],
    },
    {
      name: "Database & Storage",
      skills: ["MongoDB", "Mongoose", "SQL", "NoSQL"],
    },
    {
      name: "Authentication & Security",
      skills: ["JWT", "OAuth", "bcrypt", "Data Validation"],
    },
    {
      name: "DevOps & Deployment",
      skills: ["Docker", "Heroku", "Vercel", "CI/CD"],
    },
    {
      name: "Tools & Workflow",
      skills: ["Git", "GitHub", "Postman", "Swagger"],
    },
  ],
  fullstack: [
    {
      name: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Typescript"],
    },
    {
      name: "Back-End Development",
      skills: ["Node.js", "Express.js", "TypeScript", "REST APIs"],
    },
    {
      name: "Database & Storage",
      skills: ["MongoDB", "Mongoose", "SQL", "NoSQL"],
    },
    {
      name: "Tools & Workflow",
      skills: ["ESLint", "Prettier", "Git", "GitHub", "Docker", "CI/CD"],
    },
  ],
};

export const getSpecializationFromPathname = (
  pathname?: string,
): Specialization => {
  const segment = pathname?.split("/")[1]?.toLowerCase() || "frontend";

  if (segment === "full-stack" || segment === "fullstack") {
    return "fullstack";
  }

  if (segment === "backend" || segment === "back-end") {
    return "backend";
  }

  return "frontend";
};

export const personalInfo = {
  name: "Omar Reda",
  title: "Front-End Developer ( Next.js | React.js | TypeScript)",
  tagline: "Building scalable web applications with modern technologies",
  photo: "/profile.png",
  about: `I'm a passionate full-stack developer with expertise in Next.js , React.js , TypeScript and Node.js . With over 2 years of experience, I specialize in creating efficient, scalable, and user-friendly web applications. My journey in software development started with a curiosity for problem-solving, and I've since built numerous projects that solve real-world problems.`,
  email: "omarredaa616@gmail.com",
  phone: "+201114594275",
  linkedin: "https://www.linkedin.com/in/omar-reda-73356327a/",
  github: "https://github.com/omarredaa",
};
