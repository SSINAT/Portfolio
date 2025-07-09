import Image from "next/image";

interface CertificateCardProps {
  title: string;
  provider: string;
  duration: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  certificateUrl?: string;
}

export default function CertificateCard({
  title,
  provider,
  duration,
  date,
  imageSrc,
  imageAlt,
  certificateUrl,
}: CertificateCardProps) {
  return (
    <div
      className="project-card flex flex-col"
      style={{ borderColor: "#ABB2BF" }}
    >
      <div className="project-card-header" style={{ borderColor: "#ABB2BF" }}>
        {provider} • {duration} • {date}
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
        <p className="text-sm">
          Professional certification in cybersecurity and ethical hacking
        </p>
      </div>
      <div className="project-card-footer" style={{ borderColor: "#ABB2BF" }}>
        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs"
          >
            View Certificate {"<~>"}
          </a>
        )}
      </div>
    </div>
  );
}
