import { ProjectEntry } from "@/shared-projects/project-entry"

const cloudContainerDataStack: ProjectEntry = {
  slug: "cloudContainerDataStack",
  title: "Cloud Container Data Stack",
  description:
    "Arquitectura reproducible de análisis de datos basada en contenedores Docker y despliegue en Azure. Separa responsabilidades entre PostgreSQL, un entorno Python científico y un servicio Jupyter Lab accesible vía web, con pruebas tanto en local como en despliegues multi-contenedor y cloud.",
  techStack: ["Docker", "Azure", "PostgreSQL", "Python"],
  tags: ["Cloud", "Infraestructura", "Big Data"],
  images: ["/images/projectLogos/cloudContainerDataStack/cover.png"],
  year: "2026",
  links: [],
}

export default cloudContainerDataStack
