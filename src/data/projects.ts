export type Project = {
  id: string;
  titleEn: string;
  titleFr: string;
  tag: string;
  descEn: string;
  descFr: string;
  longDescEn: string;
  longDescFr: string;
  github?: string;
  liveUrl?: string;
  tech: string[];
  images: string[]; // paths under /public, e.g. "/projects/devops/1.png"
  gradient: string;
};

// 👉 Drop screenshots into  public/projects/<id>/  and list them in `images`.
// 👉 Replace `github` URLs with the real repos when ready.
export const projects: Project[] = [
  {
    id: "devops-pipeline",
    titleEn: "DevOps Pipeline Implementation",
    titleFr: "Mise en place d'un Pipeline DevOps",
    tag: "DevOps",
    descEn: "CI/CD pipeline using Jenkins and Docker to streamline deployment.",
    descFr: "Pipeline CI/CD avec Jenkins et Docker pour fluidifier le déploiement.",
    longDescEn:
      "A complete CI/CD pipeline orchestrating build, test, container packaging and deployment using Jenkins, Docker, SonarQube and Nexus to ensure quality and reliability at every stage.",
    longDescFr:
      "Un pipeline CI/CD complet orchestrant build, tests, packaging conteneur et déploiement avec Jenkins, Docker, SonarQube et Nexus pour garantir qualité et fiabilité à chaque étape.",
    github: "https://github.com/ranimglee/devops-pipeline",
    tech: ["Jenkins", "Docker", "SonarQube", "Nexus", "Maven"],
    images: [],
    gradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    id: "gym-management",
    titleEn: "Gym Management Web App",
    titleFr: "Application de Gestion de Salle de Sport",
    tag: "Web",
    descEn: "Membership tracking, scheduling, and performance analytics platform.",
    descFr: "Plateforme de suivi des adhésions, planning et analytics.",
    longDescEn:
      "Full-featured platform for gym owners and members: subscriptions, class booking, trainer scheduling and dashboards.",
    longDescFr:
      "Plateforme complète pour propriétaires de salles et adhérents : abonnements, réservation de cours, planning des coachs et tableaux de bord.",
    github: "https://github.com/ranimglee/gym-management",
    tech: ["Spring Boot", "Angular", "MySQL", "Bootstrap"],
    images: [],
    gradient: "from-fuchsia-500/30 to-pink-500/30",
  },
  {
    id: "senior-care",
    titleEn: "Senior Care Web App",
    titleFr: "Application pour Personnes Âgées",
    tag: "Web",
    descEn: "Connecting aged users with caregivers and managing daily activities.",
    descFr: "Connecter les seniors aux aidants et gérer les activités quotidiennes.",
    longDescEn:
      "An accessibility-first platform helping seniors stay connected with caregivers, manage medication reminders and daily activities.",
    longDescFr:
      "Une plateforme axée sur l'accessibilité aidant les seniors à rester connectés avec leurs aidants, gérer rappels de médicaments et activités.",
    github: "https://github.com/ranimglee/senior-care",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    images: [],
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    id: "food-delivery",
    titleEn: "Food Delivery Platform",
    titleFr: "Plateforme de Livraison de Repas",
    tag: "Mobile",
    descEn: "Dual-platform solution for users and restaurant owners — web and mobile.",
    descFr: "Solution double pour utilisateurs et restaurateurs — web et mobile.",
    longDescEn:
      "End-to-end ordering experience with mobile app for customers and a web admin panel for restaurant owners to manage menus and orders in real time.",
    longDescFr:
      "Expérience de commande de bout en bout : appli mobile clients et panneau admin web pour les restaurateurs (menus, commandes en temps réel).",
    github: "https://github.com/ranimglee/food-delivery",
    tech: ["FlutterFlow", "Firebase", "Symfony"],
    images: [],
    gradient: "from-amber-500/30 to-orange-500/30",
  },
];
