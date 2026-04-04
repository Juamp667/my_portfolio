export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  date: string
  imgSrc: string
  summary: string
  tech: string[]
  finished: boolean
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    title: "Data Observatory",
    date: "2025",
    imgSrc: "/images/set1.png",
    summary:
      "Pipeline que cruza datos de sensores urbanos con modelos predictivos para identificar oportunidades de ahorro energético.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Vercel", "Python"],
    finished: true,
    links: [
      { label: "Ver caso", href: "https://example.com/observatory" },
      { label: "Código fuente", href: "https://github.com/Juamp667/data-observatory" },
    ],
  },
  {
    title: "MatterFlow Simulator",
    date: "2024",
    imgSrc: "/images/set2.png",
    summary:
      "Visualizador interactivo de mecánica cuántica que ayuda a explorar la evolución temporal de paquetess de onda.",
    tech: ["React Three Fiber", "TypeScript", "WebGL", "Python"],
    finished: true,
    links: [
      { label: "Demostración", href: "https://example.com/matterflow" },
      { label: "Repositorio", href: "https://github.com/Juamp667/matterflow" },
    ],
  },
  {
    title: "Mentoor Insights",
    date: "2023",
    imgSrc: "/images/set3.png",
    summary:
      "Plataforma de analítica para cursos privados que cruza métricas de progreso con recursos recomendados por IA.",
    tech: ["Supabase", "Next.js", "OpenAI API", "Tailwind"],
    finished: true,
    links: [
      { label: "Explorar", href: "https://mentoor.example.com" },
      { label: "Código abierto", href: "https://github.com/Juamp667/mentoor-insights" },
    ],
  },
  {
    title: "Realtime Learning Lab",
    date: "2022",
    imgSrc: "/images/set4.png",
    summary:
      "Laboratorio online para experimentar con modelos ML pequenos y visualizar metrics en tiempo real.",
    tech: ["Django", "Celery", "Redis", "Docker"],
    finished: false,
    links: [
      { label: "Ver proyecto", href: "https://example.com/realtime" },
      { label: "Repo técnico", href: "https://github.com/Juamp667/realtime-lab" },
    ],
  },
]
