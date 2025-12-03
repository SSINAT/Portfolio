"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

interface Slide {
  title: string;
  imageUrl: string;
}

const slides: Slide[] = [
  {
    title: "Development of a Honeypot and Threat Intelligence Platform",
    imageUrl: "/slide/1.png",
  },
  {
    title: "Table of Contents",
    imageUrl: "/slide/2.png",
  },
  {
    title: "1. General Presentation",
    imageUrl: "/slide/3.png",
  },
  {
    title: "Presentation of Organization",
    imageUrl: "/slide/4.png",
  },
  {
    title: "Problem Statement",
    imageUrl: "/slide/5.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/6.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/7.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/8.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/9.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/10.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/11.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/12.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/13.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/13.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/14.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/15.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/16.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/17.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/18.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/19.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/20.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/21.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/22.png",
  },
  {
    title: "Project Objectives",
    imageUrl: "/slide/19.png",
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const downloadPresentation = () => {
    // Download the provided PDF file instead of generating text
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "/SINA_Sinat_Final_slide-2024-2025.pdf" // Adjust path as needed to match your PDF asset location
    );
    element.setAttribute("download", "SINA_Sinat_Final_slide-2024-2025.pdf");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background">
      {/* Main Slideshow Container */}
      <div className="flex-1 flex items-center justify-between gap-8 p-8 md:p-12 relative">
        {/* Left Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 hover:bg-primary/20 rounded-lg transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} className="text-primary" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center mx-auto z-10">
          {/* <h2 className="text-2xl md:text-3xl font-bold mt-6 text-center text-white">
            {slide.title}
          </h2> */}
          <div className="w-full max-w-5xl h-[100vh] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-primary/30 shadow-2xl">
            <img
              src={slide.imageUrl || "/placeholder.svg"}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Navigation */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 hover:bg-primary/20 rounded-lg transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={28} className="text-primary" />
        </button>

        {/* Download Button */}
        <button
          onClick={downloadPresentation}
          className="absolute right-4 md:right-8 top-8 flex flex-col items-center gap-2 px-4 py-3 rounded-lg hover:bg-primary/20 transition-colors border border-primary/50 z-20"
          title="Download full presentation"
        >
          <Download size={24} className="text-primary" />
          <span className="text-xs font-medium text-white">Download</span>
        </button>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between px-8 py-6 border-t border-primary/30 bg-background">
        <div className="flex items-center gap-4">
          <span className="text-sm md:text-base text-foreground">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-4 py-2 text-sm rounded transition-colors border border-primary"
            style={{
              backgroundColor: isAutoPlay ? "var(--primary)" : "transparent",
              color: isAutoPlay ? "var(--white)" : "var(--primary)",
            }}
          >
            {isAutoPlay ? "Pause" : "Play"}
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-2 flex-wrap  flex-1 max-w-md">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  index === currentSlide
                    ? "var(--primary)"
                    : "var(--border-color)",
                width: index === currentSlide ? "32px" : "12px",
                height: "12px",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}