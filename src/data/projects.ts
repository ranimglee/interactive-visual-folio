export type Project = {
  id: string;
  titleEn: string;
  titleFr: string;
  tag: string;
  descEn: string;
  descFr: string;
  longDescEn: string;
  longDescFr: string;
  problemEn: string;
  problemFr: string;
  solutionEn: string;
  solutionFr: string;
  outcomeEn: string;
  outcomeFr: string;
  github?: string;
  liveUrl?: string;
  tech: string[];
  images: string[];
  featuredRank?: 1 | 2;
  featuredLabel?: string;
  impactHighlights: string[];
  caseStudy?: {
    businessChallenge: string;
    solution: string;
    contributions: string[];
    features: string[];
    architecture: string;
    challenges: { challenge: string; solution: string }[];
    impact: string[];
    stackSummary: string;
  };
  gradient: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "legy",
    titleEn: "Legy Digital Gastronomy Platform",
    titleFr: "Plateforme Gastronomique Digitale Legy",
    tag: "Flagship SaaS",
    featuredRank: 1,
    featuredLabel: "Flagship project",
    descEn:
      "AI-powered food delivery and digital gastronomy platform with enterprise-scale operations, financial management, AI recommendations, AR discovery, and BI dashboards.",
    descFr:
      "Plateforme gastronomique digitale avec operations enterprise-scale, gestion financiere, recommandations IA, AR et dashboards BI.",
    longDescEn:
      "Legy is an AI-powered food delivery and digital gastronomy platform that combines ordering, restaurant operations, moderation, financial governance, analytics, social engagement, and immersive discovery. It gives customers a personalized culinary experience while giving business teams powerful tools for payments, delivery operations, content quality, and performance monitoring.",
    longDescFr:
      "Legy est une plateforme de gastronomie digitale qui combine commande, operations restaurant, moderation, gouvernance financiere, analytics, engagement social et decouverte immersive.",
    problemEn:
      "Food delivery platforms often struggle with fragmented operations, payment risk, slow complaint handling, weak moderation, and limited visibility across restaurants, drivers, content, and financial performance.",
    problemFr:
      "Les plateformes de livraison souffrent souvent d'operations fragmentees, de risques de paiement, d'une moderation faible et d'un manque de visibilite centralisee.",
    solutionEn:
      "Legy centralizes core food delivery workflows into a secure, role-based platform with financial dashboards, delivery management, restaurant moderation, AI recommendations, reporting tools, and real-time operational notifications.",
    solutionFr:
      "Legy centralise les workflows de livraison dans une plateforme securisee par roles avec dashboards financiers, moderation, gestion des livreurs et notifications temps reel.",
    outcomeEn:
      "The platform improves operational control, reduces manual coordination, and gives each role a focused workspace for faster decisions and more reliable service delivery.",
    outcomeFr:
      "La plateforme ameliore le controle operationnel, reduit la coordination manuelle et offre a chaque role un espace de travail cible.",
    tech: [
      "Spring Boot",
      "JWT",
      "BCrypt",
      "Redis",
      "NoSQL",
      "REST APIs",
      "Google Maps API",
      "Weather API",
      "AI",
      "AR",
      "BI Dashboards",
    ],
    impactHighlights: [
      "Built enterprise-scale role-based workflows",
      "Designed advanced financial management modules",
      "Integrated AI recommendations and AR discovery",
      "Enabled analytics and business intelligence dashboards",
    ],
    images: [
      "/projects/legy/image.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-08%20203051.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-09%20174849.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-09%20181124.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-09%20194002.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-09%20195903.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-09%20210753.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-09%20212044.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-15%20172616.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-15%20173833.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-15%20173956.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-15%20174118.png",
      "/projects/legy/Capture%20d%27%C3%A9cran%202025-09-15%20174231.png",
    ],
    caseStudy: {
      businessChallenge:
        "Legy was designed around a common scaling problem in food delivery: the customer experience can look simple, while the business layer behind it becomes operationally heavy. Payments, driver compensation, restaurant moderation, delivery zones, complaint resolution, promotions, and financial reporting all need to stay reliable at the same time.",
      solution:
        "I helped shape Legy as a centralized, role-based platform where customers, restaurant managers, delivery drivers, moderators, and financial managers each get a purpose-built workflow. The product combines secure ordering, financial governance, delivery coordination, moderation tools, analytics, AI recommendations, and AR-enhanced discovery into one connected ecosystem.",
      contributions: [
        "Designed and developed backend services for secure authentication, role-based access, financial workflows, and operational data flows.",
        "Implemented RESTful APIs for payments, reporting, delivery management, moderation, restaurant operations, and customer-facing features.",
        "Integrated Redis caching and asynchronous processing to improve response times for high-traffic and reporting-heavy operations.",
        "Built dashboard-oriented data models that support KPI monitoring, financial visibility, driver compensation, and moderation oversight.",
        "Connected third-party services including Google Maps and weather data to support delivery tracking, zone management, and dynamic delivery logic.",
      ],
      features: [
        "Financial workspace for internal payments, recurring schedules, ROI tracking, driver compensation, dynamic delivery fees, and exportable PDF, CSV, and Excel reports.",
        "Moderator console for delivery zones, driver shift approval, restaurant validation, product moderation, complaint handling, and user analytics.",
        "Restaurant manager tools for menu management, order tracking, promotions, and content publishing.",
        "Customer experience for restaurant discovery, food ordering, live order tracking, driver tracking, ratings, reviews, promotions, and social engagement.",
        "Real-time notifications and monitoring flows for operational events, complaints, financial updates, and delivery status changes.",
      ],
      architecture:
        "The platform uses a modular Spring Boot backend with RESTful APIs, JWT authentication, BCrypt password hashing, role-based access control, Redis caching, asynchronous jobs, and a NoSQL data model optimized for flexible operational data. External API integrations extend the delivery layer with maps, location context, and weather-aware logic.",
      challenges: [
        {
          challenge: "Securing financial and role-sensitive operations",
          solution:
            "Implemented JWT authentication, BCrypt password hashing, and role-based access control to protect financial, moderation, restaurant, driver, and customer workflows.",
        },
        {
          challenge: "Keeping dashboards responsive with operational data",
          solution:
            "Used optimized queries, Redis caching, and asynchronous processing for reporting, notifications, and KPI-heavy screens.",
        },
        {
          challenge:
            "Coordinating delivery operations across drivers, zones, restaurants, and customers",
          solution:
            "Designed modular services for delivery zones, driver shifts, tracking, dynamic fees, and event-driven notifications.",
        },
      ],
      impact: [
        "Reduced operational fragmentation by giving each business role a dedicated, centralized workspace.",
        "Improved financial visibility through dashboards, automated exports, recurring payment flows, and driver compensation tracking.",
        "Strengthened trust and quality control with moderation workflows for restaurants, products, complaints, promotions, and user activity.",
        "Created a scalable backend foundation ready for additional AI, AR, analytics, and delivery optimization features.",
      ],
      stackSummary:
        "Spring Boot, RESTful APIs, JWT, BCrypt, Redis, asynchronous processing, NoSQL architecture, Google Maps API, Weather API, real-time notifications, dashboard analytics.",
    },
    gradient: "from-indigo-300/20 via-cyan-300/15 to-amber-200/20",
    accent: "indigo",
  },
  {
    id: "afaq",
    titleEn: "AFAQ Association Platform",
    titleFr: "Plateforme Web de l'Association AFAQ",
    tag: "Full-Stack Web",
    featuredRank: 2,
    featuredLabel: "Featured full-stack build",
    descEn:
      "Modern Angular and Spring Boot web application with secure authentication, REST APIs, MongoDB persistence, and scalable backend architecture.",
    descFr:
      "Application web Angular et Spring Boot avec authentification securisee, APIs REST, MongoDB et architecture backend scalable.",
    longDescEn:
      "AFAQ is a modern web application built for an association that needed a credible digital platform for content, projects, articles, resources, contact workflows, and administration. The product combines an Angular frontend with a Spring Boot backend, MongoDB persistence, secure authentication, and REST APIs.",
    longDescFr:
      "AFAQ est une application web moderne pour une association, construite avec Angular, Spring Boot, MongoDB, authentification securisee et APIs REST.",
    problemEn:
      "The organization needed a scalable digital platform to publish content, present projects, manage updates, and provide a reliable public experience.",
    problemFr:
      "L'organisation avait besoin d'une plateforme digitale scalable pour publier du contenu, presenter ses projets et gerer les mises a jour.",
    solutionEn:
      "Built a modern web architecture with Angular on the frontend, Spring Boot REST APIs on the backend, MongoDB for flexible content storage, and secure authentication for administration flows.",
    solutionFr:
      "Creation d'une architecture web moderne avec Angular, APIs REST Spring Boot, MongoDB et authentification securisee.",
    outcomeEn:
      "The platform gives the association a professional online presence, clearer content workflows, and a backend foundation that can grow with new features.",
    outcomeFr:
      "La plateforme offre une presence en ligne professionnelle, des workflows de contenu clairs et une base backend evolutive.",
    tech: ["Angular", "Spring Boot", "MongoDB", "REST APIs", "Secure Auth", "Scalable Backend"],
    impactHighlights: [
      "Built scalable Spring Boot REST APIs",
      "Implemented secure authentication",
      "Structured MongoDB content architecture",
      "Delivered modern Angular web experience",
    ],
    images: [
      "/projects/afaq/afaq.png",
      "/projects/afaq/home.png",
      "/projects/afaq/about.png",
      "/projects/afaq/projects.png",
      "/projects/afaq/articles.png",
      "/projects/afaq/article_detail.png",
      "/projects/afaq/recent_articles.png",
      "/projects/afaq/resources.png",
      "/projects/afaq/contact.png",
      "/projects/afaq/languages_selector.png",
      "/projects/afaq/admin_login.png",
    ],
    gradient: "from-teal-300/25 via-cyan-300/15 to-blue-300/20",
    accent: "teal",
  },
  {
    id: "congofood",
    titleEn: "CongoFood",
    titleFr: "CongoFood",
    tag: "Mobile + Cloud",
    descEn: "Food delivery platform developed for restaurant and order management.",
    descFr:
      "Plateforme de livraison de repas developpee pour la gestion des restaurants et des commandes.",
    longDescEn:
      "CongoFood is a food delivery platform focused on restaurant management, order workflows, and a mobile-first customer experience. The system combines Angular and Ionic on the frontend, Symfony on the backend, PostgreSQL for relational data, Dockerized services, and AWS deployment through CodeCommit.",
    longDescFr:
      "CongoFood est une plateforme de livraison orientee gestion restaurant, commandes et experience mobile-first avec Angular, Ionic, Symfony, PostgreSQL, Docker et AWS.",
    problemEn:
      "Restaurants needed a reliable platform to manage orders and operational workflows while serving customers through a mobile-friendly experience.",
    problemFr:
      "Les restaurants avaient besoin d'une plateforme fiable pour gerer les commandes et les workflows operationnels avec une experience mobile.",
    solutionEn:
      "Built a mobile-first food delivery experience with Ionic, Angular, Symfony APIs, PostgreSQL persistence, Docker containerization, and AWS deployment workflows.",
    solutionFr:
      "Creation d'une experience mobile-first avec Ionic, Angular, APIs Symfony, PostgreSQL, Docker et deploiement AWS.",
    outcomeEn:
      "The platform supports restaurant and order management workflows with a containerized architecture ready for cloud deployment.",
    outcomeFr:
      "La plateforme supporte les workflows restaurant et commandes avec une architecture containerisee prete pour le cloud.",
    github: "https://github.com",
    tech: ["Angular", "Ionic", "Symfony", "PostgreSQL", "Docker", "AWS", "AWS CodeCommit"],
    impactHighlights: [
      "Built mobile-first Ionic experience",
      "Containerized backend architecture with Docker",
      "Deployed cloud workflow on AWS",
      "Implemented restaurant and order management flows",
    ],
    images: [
      "/projects/food-delivery/dashboard.png",
      "/projects/food-delivery/dashboard_restaurant_manager.png",
      "/projects/food-delivery/restaurants.png",
      "/projects/food-delivery/login.png",
      "/projects/food-delivery/driver_login.png",
    ],
    gradient: "from-amber-300/25 via-orange-400/15 to-red-300/20",
    accent: "amber",
  },
  {
    id: "devops-pipeline",
    titleEn: "DevOps Pipeline Implementation",
    titleFr: "Mise en place d'un Pipeline DevOps",
    tag: "DevOps",
    descEn: "CI/CD pipeline using Jenkins and Docker to streamline deployment.",
    descFr: "Pipeline CI/CD avec Jenkins et Docker pour fluidifier le deploiement.",
    longDescEn:
      "A complete CI/CD pipeline orchestrating build, test, container packaging, and deployment using Jenkins, Docker, SonarQube, and Nexus.",
    longDescFr:
      "Un pipeline CI/CD complet orchestrant build, tests, packaging conteneur et deploiement avec Jenkins, Docker, SonarQube et Nexus.",
    problemEn: "Manual delivery slowed feedback loops and made release quality harder to verify.",
    problemFr:
      "Les livraisons manuelles ralentissaient les retours et rendaient la qualite plus difficile a verifier.",
    solutionEn:
      "Designed a Jenkins pipeline that builds, analyzes, packages, and prepares releases through Docker, SonarQube, Nexus, and Maven.",
    solutionFr:
      "Conception d'un pipeline Jenkins qui build, analyse, package et prepare les releases avec Docker, SonarQube, Nexus et Maven.",
    outcomeEn:
      "A repeatable release path with clearer quality gates and faster confidence before deployment.",
    outcomeFr:
      "Un chemin de livraison repetable avec des controles qualite plus clairs et plus de confiance avant de deployer.",
    github: "https://github.com/jihenesaad/5SE2-G5-tpFoyer",
    tech: ["Jenkins", "Docker", "SonarQube", "Nexus", "Maven"],
    impactHighlights: [
      "Built CI/CD automation",
      "Added quality gates with SonarQube",
      "Containerized deployment flow",
      "Integrated artifact management",
    ],
    images: [
      "/projects/devops-pipeline/pipeline.jpg",
      "/projects/devops-pipeline/sonarqube.png",
      "/projects/devops-pipeline/nexus.png",
      "/projects/devops-pipeline/dockerhub.png",
      "/projects/devops-pipeline/prometheus.png",
      "/projects/devops-pipeline/grafana.png",
      "/projects/devops-pipeline/grafana2.png",
    ],
    gradient: "from-cyan-400/25 via-sky-500/15 to-emerald-300/20",
    accent: "cyan",
  },
  {
    id: "gym-management",
    titleEn: "Gym Management Web App",
    titleFr: "Application de Gestion de Salle de Sport",
    tag: "Web",
    descEn: "Membership tracking, scheduling, and performance analytics platform.",
    descFr: "Plateforme de suivi des adhesions, planning et analytics.",
    longDescEn:
      "Full-featured platform for gym owners and members: subscriptions, class booking, trainer scheduling, and dashboards.",
    longDescFr:
      "Plateforme complete pour proprietaires de salles et adherents : abonnements, reservation de cours, planning des coachs et tableaux de bord.",
    problemEn:
      "Gym operations were spread across disconnected tools, making member follow-up and planning difficult.",
    problemFr:
      "La gestion de salle etait dispersee entre plusieurs outils, ce qui compliquait le suivi des adherents et le planning.",
    solutionEn:
      "Built a full-stack management platform for memberships, classes, trainers, and operational dashboards.",
    solutionFr:
      "Creation d'une plateforme full-stack pour les abonnements, cours, coachs et tableaux de bord operationnels.",
    outcomeEn:
      "Owners get a clearer view of activity while members can book and follow their progress more easily.",
    outcomeFr:
      "Les gerants obtiennent une vue plus claire de l'activite et les adherents reservent et suivent leur progression plus simplement.",
    github: "https://github.com/aminmguidich/FitFlex-web-app",
    tech: ["Spring Boot", "Angular", "MySQL", "Bootstrap"],
    impactHighlights: [
      "Built full-stack management workflows",
      "Implemented scheduling and member tracking",
      "Designed operational dashboards",
      "Connected backend APIs with Angular UI",
    ],
    images: ["/projects/gym-management/home.png"],
    gradient: "from-rose-400/25 via-orange-300/15 to-yellow-300/20",
    accent: "rose",
  },
  {
    id: "senior-care",
    titleEn: "Senior Care Web App",
    titleFr: "Application pour Personnes Agees",
    tag: "Web",
    descEn: "Connecting aged users with caregivers and managing daily activities.",
    descFr: "Connecter les seniors aux aidants et gerer les activites quotidiennes.",
    longDescEn:
      "An accessibility-first platform helping seniors stay connected with caregivers, manage medication reminders, and daily activities.",
    longDescFr:
      "Une plateforme axee sur l'accessibilite aidant les seniors a rester connectes avec leurs aidants, gerer rappels de medicaments et activites.",
    problemEn:
      "Care coordination needs simple interfaces, reliable reminders, and trust between seniors and caregivers.",
    problemFr:
      "La coordination des soins demande des interfaces simples, des rappels fiables et une relation de confiance.",
    solutionEn:
      "Created an accessibility-minded web app for caregiver connection, medication reminders, and daily activity tracking.",
    solutionFr:
      "Creation d'une application web orientee accessibilite pour connecter aidants, rappels medicaux et activites quotidiennes.",
    outcomeEn:
      "The experience prioritizes clarity, larger interaction targets, and calmer daily coordination.",
    outcomeFr:
      "L'experience privilegie la clarte, de grandes zones d'interaction et une coordination quotidienne plus sereine.",
    github: "https://github.com/asmazakraoui/SpringProject",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    impactHighlights: [
      "Built accessibility-first interface",
      "Implemented caregiver workflows",
      "Added reminder and activity features",
      "Designed calm UX for sensitive use cases",
    ],
    images: ["/projects/senior-care/home.png", "/projects/senior-care/login.png"],
    gradient: "from-emerald-400/25 via-teal-300/15 to-lime-300/20",
    accent: "emerald",
  },
];
