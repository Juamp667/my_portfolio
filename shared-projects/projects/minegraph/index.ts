import { ProjectEntry } from "@/shared-projects/project-entry"

const minegraph: ProjectEntry = {
  slug: "minegraph",
  title: "Minegraph",
  description:
    "Script en Python para transformar items y recetas de Minecraft en un grafo dirigido listo para análisis visual. Procesa ficheros JSON de crafting, smelting y otros sistemas de recetas, resuelve iconos y exporta nodos y aristas en CSV para herramientas como Gephi.",
  techStack: ["Python", "Gephi"],
  tags: ["Grafos", "Automatización", "Game Data"],
  images: ["/images/projectLogos/minegraph/cover.png"],
  year: "2026",
  links: [
    {
      label: "Repositorio",
      href: "https://github.com/Juamp667/Minegraph",
    },
  ],
}

export default minegraph
