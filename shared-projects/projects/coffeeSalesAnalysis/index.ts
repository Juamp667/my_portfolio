import { ProjectEntry } from "@/shared-projects/project-entry"

const coffeeSalesAnalysis: ProjectEntry = {
  slug: "coffeeSalesAnalysis",
  title: "Coffee Sales Analysis",
  description:
    "Exploratory Data Analysis sobre ventas de café procedentes de una máquina expendedora. El proyecto estudia patrones de consumo, productos más vendidos, recurrencia de clientes y evolución temporal de ingresos para extraer insights de negocio accionables.",
  techStack: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
  tags: ["EDA", "Business Analytics", "Visualización"],
  images: ["/images/projectLogos/coffeeSalesAnalysis/cover.png"],
  year: "2025",
  links: [
    {
      label: "Repositorio",
      href: "https://github.com/Juamp667/Coffee-sales-analysis",
    },
  ],
}

export default coffeeSalesAnalysis
