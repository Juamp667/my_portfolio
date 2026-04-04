export type ProjectEntry = {
  slug: string
  title: string
  description: string
  techStack: string[]
  images: string[]
  tags: string[]
  year: string
  links?: { label: string; href: string }[]
}
