interface DecorativeElementsProps {
  variant?: "home" | "works" | "about" | "contacts";
}

export default function DecorativeElements({
  variant = "home",
}: DecorativeElementsProps) {
  return (
    <>
      {/* Vertical dots on the left side
      <div className="fixed left-4 top-20 opacity-40 hidden lg:block z-0">
        <div className="flex flex-col space-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-foreground rounded-full"></div>
          ))}
        </div>
      </div> */}

      {/* Rectangle outlines positioned on left and right sides */}
      {variant === "home" && (
        <>
          {/* Left side rectangles */}
          <div className="absolute top-40 left-0 opacity-30 hidden lg:block">
            <div
              className="w-24 h-24 border border-foreground"
              style={{ transform: "translateX(-50%)" }}
            ></div>
          </div>

          <div className="absolute top-96 left-8 opacity-30 hidden lg:block">
            <div className="w-32 h-20 border border-foreground"></div>
          </div>

          <div className="absolute bottom-80 left-0 opacity-30 hidden lg:block">
            <div
              className="w-20 h-32 border border-foreground"
              style={{ transform: "translateX(-25%)" }}
            ></div>
          </div>

          {/* Right side rectangles */}
          <div className="absolute top-32 right-0 opacity-30 hidden lg:block">
            <div
              className="w-28 h-28 border border-foreground"
              style={{ transform: "translateX(50%)" }}
            ></div>
          </div>

          <div className="absolute top-[600px] right-8 opacity-30 hidden lg:block">
            <div className="w-24 h-16 border border-foreground"></div>
          </div>

          <div className="absolute bottom-40 right-0 opacity-30 hidden lg:block">
            <div
              className="w-32 h-24 border border-foreground"
              style={{ transform: "translateX(25%)" }}
            ></div>
          </div>
        </>
      )}

      {variant === "works" && (
        <>
          {/* Left side rectangles */}
          <div className="absolute top-20 left-0 opacity-30 hidden lg:block">
            <div
              className="w-20 h-32 border border-foreground"
              style={{ transform: "translateX(-40%)" }}
            ></div>
          </div>

          <div className="absolute bottom-60 left-4 opacity-30 hidden lg:block">
            <div className="w-28 h-20 border border-foreground"></div>
          </div>

          {/* Right side rectangles */}
          <div className="absolute top-80 right-0 opacity-30 hidden lg:block">
            <div
              className="w-24 h-16 border border-foreground"
              style={{ transform: "translateX(30%)" }}
            ></div>
          </div>

          <div className="absolute bottom-32 right-6 opacity-30 hidden lg:block">
            <div className="w-20 h-28 border border-foreground"></div>
          </div>
        </>
      )}

      {variant === "about" && (
        <>
          {/* Left side rectangles */}
          <div className="absolute top-24 left-0 opacity-30 hidden lg:block">
            <div
              className="w-24 h-20 border border-foreground"
              style={{ transform: "translateX(-50%)" }}
            ></div>
          </div>

          <div className="absolute bottom-40 left-6 opacity-30 hidden lg:block">
            <div className="w-32 h-24 border border-foreground"></div>
          </div>

          {/* Right side rectangles */}
          <div className="absolute top-60 right-0 opacity-30 hidden lg:block">
            <div
              className="w-20 h-20 border border-foreground"
              style={{ transform: "translateX(40%)" }}
            ></div>
          </div>

          <div className="absolute bottom-80 right-4 opacity-30 hidden lg:block">
            <div className="w-28 h-16 border border-foreground"></div>
          </div>
        </>
      )}

      {variant === "contacts" && (
        <>
          {/* Left side rectangles */}
          <div className="absolute top-40 left-0 opacity-30 hidden lg:block">
            <div
              className="w-20 h-24 border border-foreground"
              style={{ transform: "translateX(-30%)" }}
            ></div>
          </div>

          {/* Right side rectangles */}
          <div className="absolute top-60 right-0 opacity-30 hidden lg:block">
            <div
              className="w-28 h-20 border border-foreground"
              style={{ transform: "translateX(35%)" }}
            ></div>
          </div>

          <div className="absolute bottom-40 right-8 opacity-30 hidden lg:block">
            <div className="w-24 h-24 border border-foreground"></div>
          </div>
        </>
      )}

      {/* Right border line */}
      <div className="fixed right-0 top-0 bottom-0 w-px bg-foreground opacity-20 hidden lg:block"></div>
    </>
  );
}
