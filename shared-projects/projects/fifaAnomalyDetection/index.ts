import { ProjectEntry } from "@/shared-projects/project-entry"

const fifaAnomalyDetection: ProjectEntry = {
  slug: "fifaAnomalyDetection",
  title: "FIFA Anomaly Detection",
  description:
    "Análisis de anomalías sobre datos de 17.660 futbolistas de FIFA 2017–2023 para detectar perfiles infravalorados, sobrevalorados y promesas con potencial alto y coste competitivo. Combina EDA, métodos univariantes y técnicas multivariantes para estudiar rareza estadística y patrones de mercado deportivo.",
  techStack: ["R"],
  tags: ["Ciencia de Datos", "Detección de Anomalías", "Sports Analytics"],
  images: ["/images/projectLogos/fifaAnomalyDetection/cover.png"],
  year: "2025",
  links: [
    {
      label: "Código fuente",
      href: "https://github.com/Juamp667/Trabajo-Detecci-n-de-Anomal-as",
    },
  ],
}

export default fifaAnomalyDetection
