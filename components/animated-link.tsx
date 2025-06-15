"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedLink({
  href,
  children,
  className,
  onClick,
}: AnimatedLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    // Add a small delay to allow for any click animations
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

