import { useEffect, useState, type MouseEvent } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { CvMenu } from "./CvMenu";

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#featured-work", label: t.nav.portfolio },
    { href: "#now", label: "Now" },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-full border px-5 py-2.5 transition-all ${
            scrolled ? "glass shadow-elegant" : "border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-bold">
              R
            </span>
            <span className="text-foreground">
              Ranim<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <CvMenu compact />
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              {t.nav.cta}
            </a>
          </div>

          <button
            className="md:hidden rounded-full p-2 hover:bg-secondary/60"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 animate-fade-up space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary/60"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between gap-2 px-2 pt-2 border-t border-border">
              <LanguageToggle />
              <CvMenu compact />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
