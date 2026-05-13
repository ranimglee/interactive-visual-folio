import { useEffect } from "react";
import { X, Github, ExternalLink, ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLang } from "@/i18n/LanguageContext";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { lang, t } = useLang();

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

  if (!project) return null;

  const title = lang === "fr" ? project.titleFr : project.titleEn;
  const desc = lang === "fr" ? project.longDescFr : project.longDescEn;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-up"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass shadow-elegant"
      >
        <button
          onClick={onClose}
          aria-label={t.portfolio.close}
          className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-secondary/70 hover:bg-secondary transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className={`relative h-40 sm:h-56 bg-gradient-to-br ${project.gradient}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="text-xs uppercase tracking-wider text-primary">{project.tag}</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-muted-foreground leading-relaxed">{desc}</p>

          {project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-secondary/60 border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div>
            <h3 className="text-sm uppercase tracking-wider text-primary mb-3">
              {t.portfolio.screenshots}
            </h3>
            {project.images.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-3">
                {project.images.map((src, i) => (
                  <a
                    key={src}
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
                  >
                    <img
                      src={src}
                      alt={`${title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </a>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground flex flex-col items-center gap-3">
                <ImageIcon className="h-8 w-8 opacity-50" />
                {t.portfolio.noScreenshots}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-primary/50 transition-colors"
              >
                <Github className="h-4 w-4" /> {t.portfolio.viewCode}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
              >
                <ExternalLink className="h-4 w-4" /> {t.portfolio.visitProject}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
