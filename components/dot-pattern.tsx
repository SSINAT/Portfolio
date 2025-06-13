export default function DotPattern({ className = "" }: { className?: string }) {
  return <div className={`dot-pattern absolute ${className}`} aria-hidden="true" />
}
