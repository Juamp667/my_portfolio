import { ProjectEntry } from "@/shared-projects/project-entry"

const schrodingerSimulator: ProjectEntry = {
  slug: "schrodingerSimulator",
  title: "Schrödinger Simulator",
  description:
    "Aplicación de escritorio en Python para simular en tiempo real la ecuación de Schrödinger en 1D y 2D bajo potenciales estáticos. Implementa un esquema numérico basado en la aproximación de Cayley, reproduce fenómenos como doble rendija y difracción, y combina motor de simulación con visualización científica para uso docente y exploratorio.",
  techStack: ["Python", "NumPy", "SciPy", "Matplotlib"],
  tags: ["Física Computacional", "Simulación", "Visualización Científica"],
  images: ["/images/projectLogos/schrodingerSimulator/cover.png"],
  year: "2025",
  links: [],
}

export default schrodingerSimulator
