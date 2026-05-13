import { useEffect, useRef, useState } from "react";
import { FileDown, ChevronDown, Eye, Download } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

// 👉 Place CV PDFs in public/cv/ with these exact names:
//    ranim-cv-fr.pdf, ranim-cv-en.pdf, ranim-cv-de.pdf, ranim-cv-tr.pdf
const CV_LANGS = [
  { code: "fr", file: "/cv/ranim-cv-fr.pdf", flag: "🇫🇷" },
  { code: "en", file: "/cv/ranim-cv-en.pdf", flag: "🇬🇧" },
  { code: "de", file: "/cv/ranim-cv-de.pdf", flag: "🇩🇪" },
  { code: "tr", file: "/cv/ranim-cv-tr.pdf", flag: "🇹🇷" },
] as const;

export function CvMenu({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const labels: Record<string, string> = {
    fr: t.cv.french,
    en: t.cv.english,
    de: t.cv.german,
    tr: t.cv.turkish,
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-2 rounded-full transition-colors ${
          compact
            ? "glass px-4 py-2 text-sm hover:border-primary/50"
            : "bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
        }`}
      >
        <FileDown className="h-4 w-4" />
        {t.nav.downloadCv}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 glass rounded-2xl p-3 shadow-elegant animate-fade-up z-50">
          <div className="px-2 pb-2 text-xs uppercase tracking-wider text-muted-foreground">
            {t.cv.pickLang}
          </div>
          <div className="space-y-1">
            {CV_LANGS.map((c) => (
              <div
                key={c.code}
                className="flex items-center justify-between gap-2 rounded-xl px-3 py-2 hover:bg-secondary/60 transition-colors"
              >
                <span className="flex items-center gap-2 text-sm">
                  <span aria-hidden>{c.flag}</span>
                  {labels[c.code]}
                </span>
                <div className="flex items-center gap-1">
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    title={t.cv.view}
                    className="grid h-8 w-8 place-items-center rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                  </a>
                  <a
                    href={c.file}
                    download
                    title={t.cv.download}
                    className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
