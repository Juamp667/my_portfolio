"use client"

import Link from "next/link"
import { useState } from "react"
import { ProjectEntry } from "@/shared-projects/project-entry"

type ProjectCardProps = {
  project: ProjectEntry
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [coverImage, ...secondaryImages] = project.images
  const [showDescription, setShowDescription] = useState(false)
  const descriptionId = `${project.title.replace(/\s+/g, "-").toLowerCase()}-description`
  const techLogoMap: Record<string, string> = {
    "python": "/images/techStackLogos/python.svg",
    "javascript": "/images/techStackLogos/javascript.svg",
    "sql": "/images/techStackLogos/sql_mysql_generic.svg",
    "postgresql": "/images/techStackLogos/postgresql.svg",
    "docker": "/images/techStackLogos/docker.svg",
    "numpy": "/images/techStackLogos/numpy.svg",
    "pandas": "/images/techStackLogos/pandas.svg",
    "scikit-learn": "/images/techStackLogos/scikitlearn.svg",
    "scipy": "/images/techStackLogos/scipy.svg",
    "r": "/images/techStackLogos/r.svg",
    "jupyter notebook": "/images/techStackLogos/jupyter.svg",
    "jupyter": "/images/techStackLogos/jupyter.svg",
    "apache hadoop": "/images/techStackLogos/apachehadoop.svg",
    "html5": "/images/techStackLogos/html5.svg",
    "azure": "/images/techStackLogos/azure.png",
    "matplotlib": "/images/techStackLogos/matplotlib.png",
    "seaborn": "/images/techStackLogos/seaborn.svg",
    "gephi": "/images/techStackLogos/gephi.png",
  }
  const collageSizes = [2, 1, 1, 2, 3, 5]

  const collageImages = project.images.slice(0, 6)

  return (
    <article className={`project-card${showDescription ? " is-expanded" : ""}`}>
      <div className="project-card-image">
        {collageImages.length > 1 ? (
          <div className="project-card-collage">
            {collageImages.map((image, index) => {
              const span = collageSizes[index] ?? 1
              return (
                <div
                  key={image}
                  className="project-card-collage-tile"
                  style={{
                    gridColumn: `span ${span}`,
                    gridRow: `span ${span}`,
                  }}
                >
                  <img src={image} alt={`${project.title} collage ${index + 1}`} />
                </div>
              )
            })}
          </div>
        ) : coverImage ? (
          <img src={coverImage} alt={project.title} />
        ) : (
          <div className="project-card-placeholder" aria-hidden="true" />
        )}
        {secondaryImages.length > 0 && collageImages.length <= 1 && (
          <div className="project-card-thumbnails">
            {secondaryImages.map((image) => (
              <img key={image} src={image} alt={`${project.title} alternativa`} />
            ))}
          </div>
        )}
      </div>

      <div className="project-card-content">
        <div className="project-card-title">
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </div>

        <button
          type="button"
          className="project-card-toggle"
          onClick={() => setShowDescription((prev) => !prev)}
          aria-expanded={showDescription}
          aria-controls={descriptionId}
        >
          {showDescription ? "Ocultar descripción" : "Mostrar descripción"}
        </button>

        {showDescription && (
          <p id={descriptionId}>{project.description}</p>
        )}

        <div className="project-card-tech">
          {project.techStack.map((tech) => {
            const normalized = tech.toLowerCase()
            const logo = techLogoMap[normalized]
            return (
              <span key={tech} className="project-card-tech-item">
                {logo && <img src={logo} alt={`Logo de ${tech}`} loading="lazy" />}
                {tech}
              </span>
            )
          })}
        </div>

        {project.tags.length > 0 && (
          <div className="project-card-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <div className="project-card-links">
          {project.links?.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
