import { lazy, Suspense, useEffect, useState } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  Smartphone,
  Palette,
  Layers,
  Sparkles,
  Send,
  Calendar,
} from "lucide-react";

const Scene3D = lazy(() => import("./Scene3D").then((m) => ({ default: m.Scene3D })));

const skills = [
  { name: "Java", level: 80 },
  { name: "Spring Boot", level: 85 },
  { name: "React", level: 75 },
  { name: "Angular", level: 80 },
  { name: "Symfony", level: 80 },
  { name: "Docker", level: 70 },
  { name: ".NET", level: 65 },
  { name: "Power BI", level: 50 },
];

const projects = [
  {
    title: "DevOps Pipeline Implementation",
    tag: "DevOps",
    desc: "CI/CD pipeline using Jenkins and Docker to streamline deployment and improve system reliability.",
    gradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Gym Management Web App",
    tag: "Web",
    desc: "Comprehensive web platform with membership tracking, scheduling, and performance analytics.",
    gradient: "from-fuchsia-500/30 to-pink-500/30",
  },
  {
    title: "Senior Care Web App",
    tag: "Web",
    desc: "User-friendly web app tailored for aged users to connect with caregivers and manage daily activities.",
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    title: "Food Delivery Platform",
    tag: "Mobile",
    desc: "Dual-platform solution for users and owners — food ordering and management on web and mobile.",
    gradient: "from-amber-500/30 to-orange-500/30",
  },
];

const services = [
  { icon: Code2, title: "Web Development", desc: "Fast, responsive, scalable websites with React and Node.js." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile applications crafted with FlutterFlow." },
  { icon: Palette, title: "UI Design", desc: "User-friendly, aesthetic interfaces designed in Figma." },
  { icon: Layers, title: "Full-Stack", desc: "End-to-end development including database and REST APIs." },
];

export function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-70"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
        <div className="absolute inset-0 -z-0">
          {mounted && (
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          )}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="text-gradient">Ranim</span>
              <br />
              <span className="text-foreground/90">Full-stack</span>{" "}
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Final-year software engineering student crafting innovative,
              scalable web and mobile experiences with a love for clean code
              and beautiful interfaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
              >
                View my work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:border-primary/50 transition-colors"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-muted-foreground">
              <a href="https://www.linkedin.com/in/ranim-abassi" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:ranim.abassi20@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <span className="text-sm flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> Tunis, Tunisia
              </span>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="Building the future, one line at a time">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-3xl p-8 shadow-elegant">
            <p className="text-muted-foreground leading-relaxed">
              I am Ranim Abassi, a final-year software engineering student
              specializing in software development. Passionate about creating
              impactful solutions, I build web and mobile applications using a
              variety of modern technologies.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I thrive on challenges, particularly those involving innovative
              technologies, and I am eager to apply my skills in real-world
              applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Age", value: "24" },
              { label: "City", value: "Tunis, Tunisia" },
              { label: "Degree", value: "Software Engineering" },
              { label: "Freelance", value: "Available" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5 hover:border-primary/40 transition-colors">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                <div className="mt-1 font-semibold text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="A toolkit forged through practice">
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {skills.map((s, i) => (
            <div key={s.name} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary/60 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-primary"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* RESUME */}
      <Section id="resume" eyebrow="Resume" title="Education & experience">
        <div className="grid md:grid-cols-2 gap-6">
          <TimelineCard
            icon={GraduationCap}
            title="Education"
            items={[
              {
                heading: "ESPRIT — Higher School of Engineering",
                meta: "09/2022 — Present",
                text: "Software Engineering, specializing in Software Development.",
              },
              {
                heading: "Preparatory Institute of Bizerte",
                meta: "09/2019 — 06/2022",
                text: "Preparatory Cycle in Mathematics and Physics.",
              },
            ]}
          />
          <TimelineCard
            icon={Briefcase}
            title="Experience"
            items={[
              {
                heading: "Full-Stack Developer Intern · Confledis",
                meta: "09/2024 — 11/2024 · Paris, France",
                text: "Built an online restaurant management app with Symfony & Angular, deployed via Docker, managed PostgreSQL.",
              },
              {
                heading: "Web Development Intern · EasyTek",
                meta: "07/2023 — 09/2023 · Tunis, Tunisia",
                text: "Developed access control & attendance system using Java 8 and MySQL.",
              },
            ]}
          />
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section id="portfolio" eyebrow="Portfolio" title="Selected projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl glass p-8 hover:border-primary/40 transition-all hover:-translate-y-1 shadow-elegant"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-primary">{p.tag}</span>
                  <Sparkles className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow="Services" title="What I can help you build">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's create something great">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <ContactRow icon={MapPin} label="Location" value="Tunis, Tunisia" />
            <ContactRow icon={Mail} label="Email" value="ranim.abassi20@gmail.com" href="mailto:ranim.abassi20@gmail.com" />
            <ContactRow icon={Linkedin} label="LinkedIn" value="ranim-abassi" href="https://www.linkedin.com/in/ranim-abassi" />
            <ContactRow icon={Calendar} label="Availability" value="Open to freelance & opportunities" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:ranim.abassi20@gmail.com`;
            }}
            className="glass rounded-3xl p-6 space-y-4 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Your name"
                className="w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              placeholder="Subject"
              className="w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project…"
              className="w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ranim Abassi · Crafted with care.
      </footer>
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
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function TimelineCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: { heading: string; meta: string; text: string }[];
}) {
  return (
    <div className="glass rounded-3xl p-8 shadow-elegant">
      <div className="flex items-center gap-3 mb-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
        {items.map((it) => (
          <div key={it.heading} className="relative pl-7">
            <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-primary shadow-glow" />
            <div className="font-medium">{it.heading}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{it.meta}</div>
            <p className="text-sm text-muted-foreground mt-2">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/40 transition-colors">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}
