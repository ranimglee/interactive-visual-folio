import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, Eye, FileDown } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const CV_LANGS = [
  { code: "en", file: "/cv/cv_english.pdf", flag: "EN" },
  { code: "fr", file: "/cv/cv_fran%C3%A7ais.pdf", flag: "FR" },
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

  const labels: Record<(typeof CV_LANGS)[number]["code"], string> = {
    en: t.cv.english,
    fr: t.cv.french,
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
        <div className="absolute right-0 z-50 mt-2 w-72 animate-fade-up rounded-2xl glass p-3 shadow-elegant">
          <div className="px-2 pb-2 text-xs uppercase tracking-wider text-muted-foreground">
            {t.cv.pickLang}
          </div>
          <div className="space-y-1">
            {CV_LANGS.map((c) => (
              <div
                key={c.code}
                className="flex items-center justify-between gap-2 rounded-xl px-3 py-2 transition-colors hover:bg-secondary/60"
              >
                <span className="flex items-center gap-2 text-sm">
                  <span
                    aria-hidden
                    className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[0.65rem] font-semibold text-primary"
                  >
                    {c.flag}
                  </span>
                  {labels[c.code]}
                </span>
                <div className="flex items-center gap-1">
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    title={t.cv.view}
                    className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                  >
                    <Eye className="h-4 w-4" />
                  </a>
                  <a
                    href={c.file}
                    download
                    title={t.cv.download}
                    className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground transition-transform hover:scale-105"
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
