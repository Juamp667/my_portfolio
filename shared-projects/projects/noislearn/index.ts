import { ProjectEntry } from "@/shared-projects/project-entry"

const noislearn: ProjectEntry = {
  slug: "noislearn",
  title: "noislearn",
  description:
    "Librería experimental en Python, con interfaz inspirada en scikit-learn, para trabajar con datos ruidosos en minería de datos. Incluye utilidades para inyectar label noise, filtros de limpieza con clasificadores individuales y por ensamble, y componentes compatibles con pipelines de imbalanced-learn.",
  techStack: ["Python", "scikit-learn", "NumPy", "Jupyter Notebook"],
  tags: ["Machine Learning", "Data Quality", "Python Library"],
  images: ["/images/projectLogos/noislearn/cover.png"],
  year: "2026",
  links: [
    {
      label: "Repositorio",
      href: "https://github.com/Juamp667/noislearn",
    },
  ],
}

export default noislearn
