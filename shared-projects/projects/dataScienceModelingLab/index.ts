import { ProjectEntry } from "@/shared-projects/project-entry"

const dataScienceModelingLab: ProjectEntry = {
  slug: "dataScienceModelingLab",
  title: "Data Science Modeling Lab",
  description:
    "Trabajo integral de introducción a ciencia de datos con dos líneas principales: clasificación del dataset BUPA para detección preliminar de consumo excesivo de alcohol y regresión sobre California Housing para estimación de precios. Incluye EDA, balanceo de clases, selección de variables, validación cruzada y comparación de modelos clásicos.",
  techStack: ["Python", "R", "scikit-learn", "Jupyter Notebook"],
  tags: ["Machine Learning", "Clasificación", "Regresión"],
  images: ["/images/projectLogos/dataScienceModelingLab/cover.png"],
  year: "2025",
  links: [
    {
      label: "Código fuente",
      href: "https://github.com/Juamp667/Trabajo-final-ICD",
    },
  ],
}

export default dataScienceModelingLab
