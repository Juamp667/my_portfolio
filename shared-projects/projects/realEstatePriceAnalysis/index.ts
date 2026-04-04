import { ProjectEntry } from "@/shared-projects/project-entry"

const realEstatePriceAnalysis: ProjectEntry = {
  slug: "realEstatePriceAnalysis",
  title: "Real Estate Price Analysis",
  description:
    "Análisis exploratorio y modelado de precios inmobiliarios para estudiar correlaciones entre variables del inmueble y valor final de mercado. Incluye limpieza de datos, visualización, comparación de regresores y evaluación de rendimiento con validación y ajuste de hiperparámetros.",
  techStack: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn"],
  tags: ["EDA", "Regresión", "Real Estate"],
  images: ["/images/projectLogos/realEstatePriceAnalysis/cover.png"],
  year: "2025",
  links: [
    {
      label: "Repositorio",
      href: "https://github.com/Juamp667/RealEstatePriceAnalysis",
    },
  ],
}

export default realEstatePriceAnalysis
