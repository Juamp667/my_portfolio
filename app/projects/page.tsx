"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { projectsList } from "@/shared-projects/projects-map"
import { ProjectCard } from "@/components/project-card"
import { useMemo, useState } from "react"

import "@/styles/projects.css"

export default function ProjectsPage() {
  const [query, setQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const sanitizedQuery = query.trim().toLowerCase()

  const filteredProjects = useMemo(() => {
    if (!sanitizedQuery) return projectsList
    return projectsList.filter((project) => {
      const matchesTitle = project.title.toLowerCase().includes(sanitizedQuery)
      const matchesStack = project.techStack.some((tech) => tech.toLowerCase().includes(sanitizedQuery))
      const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(sanitizedQuery))
      return matchesTitle || matchesStack || matchesTags
    })
  }, [sanitizedQuery, projectsList])

  return (
    <div className="web">
      <Navigation />
      <section className="projects-page">
      <div className="projects-top">
        <div className="projects-hero">
          <h1>Proyectos seleccionados</h1>
          <p style={{textAlign:"justify"}} >
            Colección de desarrollos que cruzan física, datos y experiencias educativas.
            Cada proyecto empuja una hipótesis, aporta una visual o automatiza una tarea concreta.
          </p>
        </div>

        <div className="projects-query">
          <div className="projects-query-glow" aria-hidden="true"></div>
          <div className="projects-query-content">
            <div className="projects-view-toggle" role="group" aria-label="Cambiar vista">
              <button
                type="button"
                className={viewMode === "grid" ? "active" : ""}
                onClick={() => setViewMode("grid")}
              >
                Bloques
              </button>
              <button
                type="button"
                className={viewMode === "list" ? "active" : ""}
                onClick={() => setViewMode("list")}
              >
                Lista
              </button>
            </div>
          <div className="projects-query-row">
            <label htmlFor="projects-filter" className="sr-only">
              Buscar proyectos
            </label>
            <input
              id="projects-filter"
              type="search"
              placeholder="e.g. Next.js, educación, Insights"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <span className="projects-query-count">{filteredProjects.length} resultados</span>
            <Link href="/" className="projects-query-home">
              Volver al inicio
            </Link>
          </div>
          </div>
        </div>
      </div>

      <div className={`projects-grid ${viewMode === "list" ? "is-list" : ""}`}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      </section>
    </div>
  )
}
