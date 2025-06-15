import type React from "react";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MediaSidebar from "@/components/media-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Sinat | Portfolio",
  description: "Web designer and front-end developer",
  creator: "sinat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/images/Logoblack.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/images/Logowhite.svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col relative">
            <MediaSidebar />
            <Header />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
