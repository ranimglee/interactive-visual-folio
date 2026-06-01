import { useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

const cubeFaces = [
  {
    label: "Full Stack Dev",
    transform: "translateZ(var(--cube-half))",
    accent: "from-cyan-300/18 to-white/5",
  },
  {
    label: "Spring Boot / Java",
    transform: "rotateY(180deg) translateZ(var(--cube-half))",
    accent: "from-emerald-300/16 to-white/5",
  },
  {
    label: "React / TypeScript",
    transform: "rotateY(-90deg) translateZ(var(--cube-half))",
    accent: "from-sky-300/18 to-white/5",
  },
  {
    label: "Node / APIs",
    transform: "rotateY(90deg) translateZ(var(--cube-half))",
    accent: "from-lime-300/14 to-white/5",
  },
  {
    label: "Docker / Cloud",
    transform: "rotateX(90deg) translateZ(var(--cube-half))",
    accent: "from-amber-200/16 to-white/5",
  },
  {
    label: "Clean Architecture",
    transform: "rotateX(-90deg) translateZ(var(--cube-half))",
    accent: "from-rose-300/14 to-white/5",
  },
];

export function CodeCube() {
  const shouldReduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -5, y: x * 5 });
  };

  return (
    <motion.div
      aria-label="3D code cube showing Ranim Abassi's development stack"
      className="code-cube-shell group relative mx-auto grid aspect-square w-56 place-items-center sm:w-64 lg:w-72"
      style={{ perspective: "900px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: hovered && !shouldReduceMotion ? 1.03 : 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-8 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
      <motion.div
        className="relative h-[var(--cube-size)] w-[var(--cube-size)]"
        style={{
          transformStyle: "preserve-3d",
          ["--cube-half" as string]: "calc(var(--cube-size) / 2)",
          ["--cube-size" as string]: "clamp(10rem, 15vw, 13rem)",
        }}
        animate={
          shouldReduceMotion
            ? { rotateX: 8, rotateY: -18 }
            : {
                rotateX: [8 + tilt.x, 11 + tilt.x, 8 + tilt.x],
                rotateY: [tilt.y, 360 + tilt.y],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                rotateY: {
                  duration: hovered ? 18 : 28,
                  ease: "linear",
                  repeat: Infinity,
                },
                rotateX: {
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }
        }
      >
        <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {cubeFaces.map((face) => (
            <div
              key={face.label}
              className={`absolute inset-0 grid place-items-center rounded-2xl border border-white/15 bg-gradient-to-br ${face.accent} p-4 text-center shadow-[0_0_28px_rgba(103,232,249,0.08)] backdrop-blur-xl`}
              style={{
                transform: face.transform,
                backfaceVisibility: "hidden",
              }}
            >
              <span className="max-w-[8.5rem] text-sm font-semibold leading-5 text-foreground/90 sm:text-base">
                {face.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="absolute bottom-3 text-center text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground/70">
        Code Cube
      </div>
    </motion.div>
  );
}
