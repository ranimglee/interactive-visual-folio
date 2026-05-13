import { Languages } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/40 p-1">
      <Languages className="h-3.5 w-3.5 ml-2 text-muted-foreground" />
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs rounded-full uppercase tracking-wider transition-colors ${
            lang === l
              ? "bg-gradient-primary text-primary-foreground shadow-glow"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
