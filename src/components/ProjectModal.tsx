import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  ImageIcon,
  Maximize2,
  X,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { useLang } from "@/i18n/LanguageContext";

const modalEase = [0.22, 1, 0.36, 1] as const;

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { lang, t } = useLang();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const labels =
    lang === "fr"
      ? {
          problem: "Probleme",
          solution: "Solution",
          outcome: "Impact",
          stack: "Stack technique",
        }
      : {
          problem: "Problem",
          solution: "Solution",
          outcome: "Outcome",
          stack: "Tech stack",
        };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.45, ease: modalEase }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-background/95 shadow-elegant"
          >
            <ModalContent
              project={project}
              labels={labels}
              lang={lang}
              closeLabel={t.portfolio.close}
              onClose={onClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalContent({
  project,
  labels,
  lang,
  closeLabel,
  onClose,
}: {
  project: Project;
  labels: { problem: string; solution: string; outcome: string; stack: string };
  lang: "en" | "fr";
  closeLabel: string;
  onClose: () => void;
}) {
  const title = lang === "fr" ? project.titleFr : project.titleEn;
  const desc = lang === "fr" ? project.longDescFr : project.longDescEn;
  const problem = lang === "fr" ? project.problemFr : project.problemEn;
  const solution = lang === "fr" ? project.solutionFr : project.solutionEn;
  const outcome = lang === "fr" ? project.outcomeFr : project.outcomeEn;

  return (
    <>
      <button
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-background/70 text-foreground backdrop-blur-xl transition-colors hover:border-primary/45"
      >
        <X className="h-5 w-5" />
      </button>

      <div className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(to_top,oklch(0.13_0.02_270),transparent_70%)]" />
        <div className="relative flex min-h-64 flex-col justify-end p-6 sm:p-9">
          <span className="mb-3 w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-primary">
            {project.tag}
          </span>
          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-normal sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{desc}</p>
        </div>
      </div>

      <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_0.82fr]">
        <div className="space-y-5">
          {project.caseStudy ? (
            <RichCaseStudy project={project} />
          ) : (
            <>
              <ModalDetail label={labels.problem} text={problem} />
              <ModalDetail label={labels.solution} text={solution} />
              <ModalDetail label={labels.outcome} text={outcome} />
            </>
          )}

          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.24em] text-primary">
              {labels.stack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-secondary/55 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/45"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            )}
          </div>
        </div>

        <div>
          {project.images.length > 0 ? (
            <ProjectGallery images={project.images} title={title} />
          ) : (
            <div
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient} p-5`}
            >
              <div className="rounded-2xl border border-white/15 bg-background/50 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  {lang === "fr"
                    ? "Visuels de projet a ajouter dans public/projects/."
                    : "Project visuals can be added in public/projects/."}
                </div>
                <div className="mt-6 grid gap-3">
                  <span className="h-3 rounded-full bg-white/25" />
                  <span className="h-3 w-4/5 rounded-full bg-white/15" />
                  <span className="h-24 rounded-xl border border-white/10 bg-white/10" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeImage = images[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <>
      <div className="sticky top-4 space-y-4">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-secondary/30">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group relative block w-full text-left"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt={`${title} screenshot ${activeIndex + 1}`}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.28 }}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
            </AnimatePresence>
            <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/75 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur-xl opacity-0 transition-opacity group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" />
              Enlarge
            </span>
          </button>
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goToPrevious}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/45 hover:text-primary"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {activeIndex + 1} / {images.length}
          </div>
          <button
            type="button"
            onClick={goToNext}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/45 hover:text-primary"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:max-h-[460px] lg:grid-cols-2 lg:overflow-y-auto lg:overflow-x-hidden">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`min-w-36 overflow-hidden rounded-xl border bg-secondary/30 transition-all hover:-translate-y-0.5 hover:border-primary/45 lg:min-w-0 ${
                index === activeIndex ? "border-primary/70" : "border-white/10"
              }`}
            >
              <img
                src={src}
                alt={`${title} thumbnail ${index + 1}`}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-background/90 p-4 backdrop-blur-lg"
            onClick={() => setLightboxOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxOpen(false);
              }}
              aria-label="Close image preview"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-background/75 text-foreground backdrop-blur-xl transition-colors hover:border-primary/45"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
              aria-label="Previous enlarged screenshot"
              className="absolute left-5 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-background/75 text-foreground backdrop-blur-xl transition-colors hover:border-primary/45"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.img
              src={activeImage}
              alt={`${title} enlarged screenshot ${activeIndex + 1}`}
              className="max-h-[86vh] max-w-[92vw] rounded-2xl border border-white/10 object-contain shadow-elegant"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              aria-label="Next enlarged screenshot"
              className="absolute right-5 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-background/75 text-foreground backdrop-blur-xl transition-colors hover:border-primary/45"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function RichCaseStudy({ project }: { project: Project }) {
  if (!project.caseStudy) return null;

  return (
    <>
      <ModalDetail label="Business Challenge" text={project.caseStudy.businessChallenge} />
      <ModalDetail label="Solution" text={project.caseStudy.solution} />
      <ModalList label="My Contributions" items={project.caseStudy.contributions} />
      <ModalList label="Key Features" items={project.caseStudy.features} />
      <ModalDetail label="Technical Architecture" text={project.caseStudy.architecture} />
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <h3 className="text-xs uppercase tracking-[0.24em] text-primary">Challenges & Solutions</h3>
        <div className="mt-4 space-y-4">
          {project.caseStudy.challenges.map((item) => (
            <div key={item.challenge} className="border-l border-primary/25 pl-4">
              <div className="text-sm font-semibold text-foreground">{item.challenge}</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
      <ModalList label="Results & Impact" items={project.caseStudy.impact} />
      <ModalDetail label="Technologies Used" text={project.caseStudy.stackSummary} />
    </>
  );
}

function ModalList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <h3 className="text-xs uppercase tracking-[0.24em] text-primary">{label}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ModalDetail({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <h3 className="text-xs uppercase tracking-[0.24em] text-primary">{label}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}
