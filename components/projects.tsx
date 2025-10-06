import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    category: "Research",
    title: "QuantumSim",
    description:
      "High-performance quantum many-body simulation library with GPU acceleration. Used by researchers worldwide for studying quantum phase transitions.",
    technologies: ["Python", "CUDA", "C++", "MPI"],
    links: {
      github: "#",
      external: "#",
    },
  },
  {
    category: "Machine Learning",
    title: "PhysicsML",
    description:
      "Machine learning framework specifically designed for physics problems. Includes pre-trained models for particle classification and field theory calculations.",
    technologies: ["Python", "PyTorch", "JAX", "NumPy"],
    links: {
      github: "#",
      external: "#",
    },
  },
  {
    category: "Data Analysis",
    title: "LHC Data Pipeline",
    description:
      "Real-time data processing pipeline for Large Hadron Collider experiments. Processes petabytes of particle collision data with sub-millisecond latency.",
    technologies: ["C++", "Python", "Apache Kafka", "ROOT"],
    links: {
      github: "#",
      external: "#",
    },
  },
  {
    category: "Visualization",
    title: "FieldViz",
    description:
      "Interactive 3D visualization tool for electromagnetic and quantum fields. Enables researchers to explore complex field configurations intuitively.",
    technologies: ["JavaScript", "Three.js", "WebGL", "Python"],
    links: {
      github: "#",
      external: "#",
    },
  },
  {
    category: "Education",
    title: "Physics Playground",
    description:
      "Interactive web platform for learning physics concepts through simulations. Used in universities worldwide for undergraduate physics education.",
    technologies: ["React", "TypeScript", "WebAssembly", "Python"],
    links: {
      github: "#",
      external: "#",
    },
  },
  {
    category: "Open Source",
    title: "SciCompute",
    description:
      "Collection of optimized numerical algorithms for scientific computing. Provides fast implementations of common physics calculations.",
    technologies: ["Rust", "Python", "WebAssembly", "BLAS"],
    links: {
      github: "#",
      external: "#",
    },
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <p className="text-muted-foreground leading-relaxed">
              A selection of research projects, open-source contributions, and scientific software tools {"I've"}{" "}
              developed over the years.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <span className="text-xs text-accent font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
