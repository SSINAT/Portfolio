import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Sinat-Sina | Resume ",
  description: "Professional resume of Sinat Sina, Front-end Developer",
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-fira-code">
        {children}
      </div>
    </ThemeProvider>
  );
}
