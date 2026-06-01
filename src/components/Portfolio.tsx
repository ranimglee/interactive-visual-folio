import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { projects, type Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { CvMenu } from "./CvMenu";
import { CodeCube } from "./CodeCube";

const roles = ["Full Stack Developer", "Software Engineer", "Backend Developer"];

const storyCopy = {
  en: {
    heroKicker: "Portfolio of Ranim Abassi",
    heroTitle: "I build digital products with structure, feeling, and reliable code.",
    heroIntro:
      "Hi, I'm Ranim, a software engineer shaping web and mobile experiences from first idea to deployed product.",
    heroCta: "Explore my work",
    heroSecondary: "Contact me",
    scroll: "Scroll",
    aboutEyebrow: "About / How I build",
    aboutTitle: "I turn ambiguity into thoughtful systems people can actually use.",
    aboutBody:
      "I approach every project like a product story: understand the user, map the constraints, design the interaction, then engineer the system behind it. My sweet spot is full-stack work where interface quality and backend reliability support the same goal.",
    aboutPoints: [
      "Product-minded engineering",
      "Clean architecture",
      "Interfaces with restraint",
      "Deployment-aware decisions",
    ],
    featuredEyebrow: "Featured work",
    featuredTitle: "Case studies with a clearer before, after, and why.",
    openCaseStudy: "Open case study",
    problem: "Problem",
    solution: "Solution",
    outcome: "Outcome",
    stack: "Stack",
    otherEyebrow: "Additional work",
    otherTitle: "Other Projects",
    nowEyebrow: "Now",
    nowTitle:
      "Currently sharpening the bridge between product thinking and production engineering.",
    learning: "Learning",
    learningText:
      "Advanced React patterns, cloud-native delivery, and calmer motion systems for real products.",
    building: "Building",
    buildingText:
      "A portfolio of focused case studies, stronger full-stack workflows, and polished recruiter-ready narratives.",
    targeting: "Targeting",
    targetingText:
      "Full-stack, frontend, UI engineering, and backend developer roles where product quality matters.",
    footer: "Designed and engineered by Ranim Abassi.",
  },
  fr: {
    heroKicker: "Portfolio de Ranim Abassi",
    heroTitle: "Je cree des produits digitaux structures, sensibles et fiables.",
    heroIntro:
      "Bonjour, je suis Ranim, ingenieure logicielle orientee experiences web et mobiles, de l'idee au produit deploye.",
    heroCta: "Explorer mon travail",
    heroSecondary: "Me contacter",
    scroll: "Defiler",
    aboutEyebrow: "A propos / Ma methode",
    aboutTitle: "Je transforme l'ambiguite en systemes clairs et utiles.",
    aboutBody:
      "J'aborde chaque projet comme une histoire produit : comprendre l'utilisateur, cadrer les contraintes, designer l'interaction, puis construire le systeme qui la soutient. Mon terrain naturel est le full-stack, la ou l'interface et la fiabilite backend avancent ensemble.",
    aboutPoints: [
      "Engineering oriente produit",
      "Architecture claire",
      "Interfaces mesurees",
      "Decisions pensees pour le deploiement",
    ],
    featuredEyebrow: "Travaux en avant",
    featuredTitle: "Des case studies avec un avant, un apres et une intention claire.",
    openCaseStudy: "Ouvrir le case study",
    problem: "Probleme",
    solution: "Solution",
    outcome: "Impact",
    stack: "Stack",
    otherEyebrow: "Travaux additionnels",
    otherTitle: "Autres projets",
    nowEyebrow: "Maintenant",
    nowTitle: "Je renforce le lien entre pensee produit et engineering de production.",
    learning: "J'apprends",
    learningText:
      "Patterns React avances, delivery cloud-native et motion plus sobre pour des produits reels.",
    building: "Je construis",
    buildingText:
      "Des case studies plus precis, des workflows full-stack solides et une narration claire pour les recruteurs.",
    targeting: "Je cible",
    targetingText:
      "Roles full-stack, frontend, UI engineering et backend ou la qualite produit compte.",
    footer: "Design et developpement par Ranim Abassi.",
  },
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export function Portfolio() {
  const { lang, t } = useLang();
  const copy = storyCopy[lang];
  const shouldReduceMotion = useReducedMotion();
  const [activeRole, setActiveRole] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.28], shouldReduceMotion ? [0, 0] : [0, 90]);
  const featuredProjects = projects
    .filter((project) => project.featuredRank)
    .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));
  const otherProjects = projects.filter((project) => !project.featuredRank);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % roles.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ y: heroY }}
      >
        <div className="absolute inset-0 cinematic-field" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(0.12_0.02_260)_88%)]" />
      </motion.div>

      <section id="home" className="relative min-h-screen px-6 pb-16 pt-28 sm:pt-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto grid min-h-[calc(100vh-11rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.72fr]"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {copy.heroKicker}
            </motion.div>

         <motion.h1
  variants={fadeUp}
  className="max-w-5xl font-display text-4xl font-semibold leading-[0.98] tracking-normal sm:text-5xl lg:text-6xl"
>
  {copy.heroTitle}
</motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-col gap-3 text-lg text-muted-foreground sm:flex-row sm:items-center"
            >
              <span>{copy.heroIntro}</span>
              <span className="relative inline-flex h-9 w-fit min-w-52 items-center overflow-hidden rounded-full border border-primary/25 bg-primary/10 px-4 text-sm font-medium text-primary">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[activeRole]}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    {roles[activeRole]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <motion.a
                href="#featured-work"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90"
              >
                {copy.heroCta} <ArrowDown className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-primary/40"
              >
                <Mail className="h-4 w-4" /> {copy.heroSecondary}
              </motion.a>
              <CvMenu compact />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
            >
              <SocialLink
                href="https://www.linkedin.com/in/ranim-abassi"
                label="LinkedIn"
                icon={<Linkedin className="h-4 w-4" />}
              />
              <SocialLink
                href="mailto:ranim.abassi20@gmail.com"
                label="Email"
                icon={<Mail className="h-4 w-4" />}
              />
              <SocialLink
                href="https://github.com/ranimglee"
                label="GitHub"
                icon={<Github className="h-4 w-4" />}
              />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {t.hero.location}
              </span>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="hidden justify-center md:flex lg:justify-end">
            <CodeCube />
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground sm:flex"
        >
          {copy.scroll}
          <motion.span
            animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-primary to-transparent"
          />
        </motion.a>
      </section>

      <Section id="about" eyebrow={copy.aboutEyebrow} title={copy.aboutTitle}>
        <motion.div variants={stagger} className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.p variants={fadeUp} className="max-w-3xl text-xl leading-9 text-muted-foreground">
            {copy.aboutBody}
          </motion.p>
          <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-2">
            {copy.aboutPoints.map((point) => (
              <motion.div
                key={point}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm font-medium text-foreground/90"
              >
                {point}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      <Section id="featured-work" eyebrow={copy.featuredEyebrow} title={copy.featuredTitle}>
        <div className="space-y-10">
          {featuredProjects.map((project, index) => (
            <CaseStudy
              key={project.id}
              project={project}
              index={index}
              copy={copy}
              lang={lang}
              onOpen={() => setOpenProject(project)}
            />
          ))}
        </div>
      </Section>

      <Section id="other-projects" eyebrow={copy.otherEyebrow} title={copy.otherTitle}>
        <motion.div variants={stagger} className="grid gap-4 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <OtherProjectCard
              key={project.id}
              project={project}
              lang={lang}
              onOpen={() => setOpenProject(project)}
            />
          ))}
        </motion.div>
      </Section>

      <Section id="now" eyebrow={copy.nowEyebrow} title={copy.nowTitle}>
        <motion.div variants={stagger} className="grid gap-4 md:grid-cols-3">
          {[
            { label: copy.learning, text: copy.learningText },
            { label: copy.building, text: copy.buildingText },
            { label: copy.targeting, text: copy.targetingText },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-primary">{item.label}</div>
              <p className="mt-4 leading-7 text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <footer id="contact" className="scroll-mt-28 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">{copy.footer}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <SocialLink
              href="mailto:ranim.abassi20@gmail.com"
              label="Email"
              icon={<Mail className="h-4 w-4" />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ranim-abassi"
              label="LinkedIn"
              icon={<Linkedin className="h-4 w-4" />}
            />
            <SocialLink
              href="https://github.com/ranimglee"
              label="GitHub"
              icon={<Github className="h-4 w-4" />}
            />
          </div>
        </div>
      </footer>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</div>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </motion.section>
  );
}

function CaseStudy({
  project,
  index,
  copy,
  lang,
  onOpen,
}: {
  project: Project;
  index: number;
  copy: (typeof storyCopy)["en"];
  lang: "en" | "fr";
  onOpen: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const title = lang === "fr" ? project.titleFr : project.titleEn;
  const desc = lang === "fr" ? project.descFr : project.descEn;
  const problem = lang === "fr" ? project.problemFr : project.problemEn;
  const solution = lang === "fr" ? project.solutionFr : project.solutionEn;
  const outcome = lang === "fr" ? project.outcomeFr : project.outcomeEn;
  const isReversed = index % 2 === 1;
  const isFlagship = project.featuredRank === 1;

  return (
    <motion.article
      variants={fadeUp}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter" || event.key === " ") onOpen();
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease }}
      className={`group grid cursor-pointer gap-8 rounded-2xl border bg-white/[0.035] p-5 outline-none transition-colors hover:border-primary/35 focus-visible:border-primary/60 sm:p-7 lg:grid-cols-2 ${
        isFlagship
          ? "border-primary/25 shadow-[0_24px_90px_-52px_oklch(0.78_0.18_195_/_0.45)] lg:p-10"
          : "border-white/10 lg:p-8"
      }`}
    >
      <div className={isReversed ? "lg:order-2" : undefined}>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.featuredLabel && (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                {project.featuredLabel}
              </span>
            )}
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
              {project.tag}
            </span>
          </div>
          <Sparkles className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <h3
          className={`font-display font-semibold tracking-normal ${
            isFlagship ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {title}
        </h3>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{desc}</p>

        <div className="mt-8 grid gap-4">
          <CaseDetail label={copy.problem} text={problem} />
          <CaseDetail label={copy.solution} text={solution} />
          <CaseDetail label={copy.outcome} text={outcome} />
        </div>

        <AchievementList items={project.impactHighlights} className="mt-7" />

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            {copy.openCaseStudy} <ArrowRight className="h-4 w-4" />
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          )}
        </div>
      </div>

      <ProjectVisual project={project} title={title} />
    </motion.article>
  );
}

function CaseDetail({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-l border-primary/30 pl-4">
      <div className="text-xs uppercase tracking-[0.22em] text-primary">{label}</div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function AchievementList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`grid gap-2 ${className}`}>
      {items.slice(0, 4).map((item) => (
        <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="mt-0.5 text-primary">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectVisual({ project, title }: { project: Project; title: string }) {
  const [firstImage, secondImage] = project.images;

  if (firstImage) {
    return (
      <div className="relative min-h-80 overflow-hidden rounded-2xl border border-white/10 bg-secondary/30">
        <img
          src={firstImage}
          alt={`${title} screenshot`}
          className="h-full min-h-80 w-full object-cover"
          loading="lazy"
        />
        {secondImage && (
          <img
            src={secondImage}
            alt={`${title} secondary screenshot`}
            className="absolute bottom-5 right-5 w-2/5 rounded-xl border border-white/20 shadow-elegant"
            loading="lazy"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-80 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute left-6 right-6 top-6 rounded-2xl border border-white/15 bg-background/45 p-4 backdrop-blur-xl">
        <div className="mb-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        </div>
        <div className="space-y-3">
          <span className="block h-3 w-2/3 rounded-full bg-white/30" />
          <span className="block h-3 w-full rounded-full bg-white/15" />
          <span className="block h-3 w-4/5 rounded-full bg-white/15" />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
        {project.tech.slice(0, 3).map((tech) => (
          <div
            key={tech}
            className="rounded-xl border border-white/15 bg-background/45 p-3 text-xs font-medium text-foreground backdrop-blur-xl"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

function OtherProjectCard({
  project,
  lang,
  onOpen,
}: {
  project: Project;
  lang: "en" | "fr";
  onOpen: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const title = lang === "fr" ? project.titleFr : project.titleEn;
  const desc = lang === "fr" ? project.descFr : project.descEn;
  const [firstImage] = project.images;

  return (
    <motion.button
      variants={fadeUp}
      type="button"
      onClick={onOpen}
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
      transition={{ duration: 0.22, ease }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] text-left outline-none transition-colors hover:border-primary/35 focus-visible:border-primary/60"
    >
      {firstImage && (
        <div className="relative h-44 overflow-hidden border-b border-white/10 bg-secondary/30">
          <img
            src={firstImage}
            alt={`${title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
            {project.tag}
          </span>
          <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
        <AchievementList items={project.impactHighlights} className="mt-5" />
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
            View details <ArrowRight className="h-3.5 w-3.5" />
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.button>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
    >
      {icon}
      {label}
    </a>
  );
}
