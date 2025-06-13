import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageSrc: string
  imageAlt: string
  liveLink?: string
  githubLink?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="project-card flex flex-col" style={{ borderColor: "#ABB2BF" }}>
      <div className="project-card-header" style={{ borderColor: "#ABB2BF" }}>
        {tags.join(" ")}
      </div>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="project-card-body flex-1">
        <h3 className="text-white text-lg mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="project-card-footer" style={{ borderColor: "#ABB2BF" }}>
        {liveLink && (
          <Link href={liveLink} className="btn-outline text-xs">
            Live {"<~>"}
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink} className="btn-outline text-xs">
            Github {"</>"}
          </Link>
        )}
      </div>
    </div>
  )
}
