export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

export type Dict = typeof en;

const en = {
  meta: {
    title: "Mohamed — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in scalable web and mobile applications using Next.js, NestJS, Go, React Native, and PostgreSQL.",
  },
  dir: "ltr",
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Works",
    contact: "Contact",
    cta: "Get in touch",
    menu: "Toggle menu",
    theme: "Toggle color theme",
    lang: "Switch language",
    backHome: "Back to home",
  },
  hero: {
    available: "Open to full-time roles, high-impact contracts & collaborations",
    greeting: "Hi, I'm",
    role: "Full-Stack Software Engineer",
    tagline:
      "Specializing in scalable web and mobile applications using Next.js, NestJS, Go, React Native, and PostgreSQL. Passionate about enterprise system architecture, real-time location tracking, and clean code.",
    viewProjects: "View works",
    contactMe: "Contact me",
    location: "Open to remote & on-site",
    namePlate: "Available for work",
    badgeArch: "Enterprise architecture",
    coreStack: "Core stack",
    coreStackVal: "Next.js · NestJS · Go",
    // Hero stat strip — static count-up style
    heroStats: {
      experience: { value: 5, suffix: "+", label: "Years experience" },
      projects: { value: 28, suffix: "+", label: "Projects completed" },
      status: { value: 0, suffix: "", label: "Status", text: "Open to work" },
    },
    scroll: "Scroll to explore",
  },
  sponsors: {
    heading: "Tools & technologies I build with",
  },
  about: {
    eyebrow: "About me",
    title: "Engineering across the full lifecycle",
    body: "I am a full-stack engineer with expertise across the entire application lifecycle — from designing database schemas and optimizing REST APIs to crafting performant user interfaces. Experienced in containerized deployments using Docker and managing distributed systems with Redis and PostgreSQL.",
    page: {
      eyebrow: "About me",
      title: "Engineer, architect, and quiet perfectionist",
      description:
        "A closer look at how I work, what I care about, and the principles behind every system I ship.",
      journeyLabel: "The journey",
      valuesLabel: "What I value",
      factsLabel: "Quick facts",
      facts: {
        role: "Full-Stack Engineer",
        focus: "Enterprise architecture",
        location: "Open to remote & on-site",
        availability: "Open to work",
      },
    },
    highlights: [
      {
        title: "End-to-end delivery",
        description:
          "From database schema design to polished, performant UI — across the full application lifecycle.",
      },
      {
        title: "Real-time systems",
        description:
          "Building live location tracking and event-driven flows with Redis pub/sub and WebSockets.",
      },
      {
        title: "Security & RBAC",
        description:
          "Role-based access control, biometric data handling, and offline-first synchronization.",
      },
      {
        title: "DevOps mindset",
        description:
          "Containerized deployments with Docker, Linux, and reproducible environments.",
      },
    ],
  },
  skills: {
    eyebrow: "Technical skills",
    title: "A pragmatic, full-stack toolkit",
    description:
      "A focused stack spanning languages, frontend, backend, data layer, and DevOps — chosen for reliability and scale.",
    proficiency: "Proficiency",
    page: {
      eyebrow: "Technical skills",
      title: "The toolkit behind every system I ship",
      description:
        "Browse the languages, frameworks, databases, and DevOps tools I reach for — with a proficiency level for each.",
    },
    categories: [
      { title: "Languages", skills: ["TypeScript", "JavaScript", "Go", "Python", "SQL"] },
      {
        title: "Frontend & Mobile",
        skills: ["Next.js", "React", "React Native", "Flutter", "TailwindCSS"],
      },
      {
        title: "Backend & API",
        skills: ["NestJS", "Express.js", "Django REST", "Go (Gin/Fiber)"],
      },
      {
        title: "Database & Caching",
        skills: ["PostgreSQL", "SQLite", "Redis", "Prisma ORM"],
      },
      {
        title: "DevOps & Tools",
        skills: ["Docker", "Git", "Linux", "Postman", "pgAdmin"],
      },
    ],
    // proficiency per skill (0-100)
    proficiencyMap: {
      TypeScript: 92,
      JavaScript: 95,
      Go: 80,
      Python: 78,
      SQL: 88,
      "Next.js": 93,
      React: 94,
      "React Native": 85,
      Flutter: 75,
      TailwindCSS: 92,
      NestJS: 90,
      "Express.js": 88,
      "Django REST": 82,
      "Go (Gin/Fiber)": 78,
      PostgreSQL: 90,
      SQLite: 85,
      Redis: 84,
      "Prisma ORM": 90,
      Docker: 86,
      Git: 93,
      Linux: 82,
      Postman: 90,
      pgAdmin: 85,
    },
  },
  projects: {
    eyebrow: "Featured works",
    title: "Systems built for scale and reliability",
    description:
      "A selection of enterprise-grade platforms — from real-time transit tracking to secure facility management and e-learning engines.",
    stack: "Stack",
    highlights: "Highlights",
    viewDetails: "View case study",
    viewAll: "View all works",
    onRequest: "Case study available on request",
    detail: {
      problemLabel: "The problem",
      solutionLabel: "The solution",
      architectureLabel: "Architecture",
      outcomesLabel: "Outcomes",
      roleLabel: "Role",
      timelineLabel: "Timeline",
      backToProjects: "Back to works",
      overviewLabel: "Overview",
      stackLabel: "Tech stack",
      highlightsLabel: "Highlights",
      relatedLabel: "Explore next",
    },
    page: {
      eyebrow: "Work gallery",
      title: "Every system, built to be reliable",
      description:
        "Browse the full set of platforms I've designed and shipped — each with its own case study covering the problem, solution, architecture, and outcomes.",
      countLabel: "works",
    },
    items: [
      {
        id: "buslink",
        name: "Suburban & Local Bus Transit System",
        codename: "BusLink",
        stack: "Django, PostgreSQL, Redis, React Native / Flutter",
        summary:
          "An enterprise-grade local intra-city bus transit platform featuring real-time GPS tracking for active fleet routes, driver shift management, and a zero-booking live map view for urban passengers.",
        highlights: [
          "Real-time GPS fleet tracking on live map",
          "Driver shift management & route assignment",
          "Zero-booking live view for urban passengers",
        ],
        detail: {
          role: "Lead Full-Stack Engineer",
          timeline: "8 months",
          problem:
            "Urban commuters had no reliable way to see where buses were in real time. Dispatch relied on manual radio calls, driver shifts were tracked on paper, and passengers often waited at stops with no information.",
          solution:
            "Built an event-driven transit platform with a live GPS ingestion pipeline, Redis pub/sub for low-latency position broadcasts, and a React Native passenger app showing active routes on a zero-booking map.",
          architecture:
            "Django REST API · PostgreSQL for fleet & shift data · Redis pub/sub for real-time positions · WebSocket gateway · React Native / Flutter passenger clients · background GPS workers on driver devices.",
          outcomes: [
            "Live map refresh under 2 seconds per active vehicle",
            "Eliminated manual dispatch calls for 40+ daily routes",
            "Driver shift logging moved fully off paper",
          ],
        },
      },
      {
        id: "correctional",
        name: "Correctional Management Platform",
        codename: "SecureFacility",
        stack: "Next.js, Express, PostgreSQL, Prisma, Docker",
        summary:
          "A secure correctional facility management system integrating biometric data flows, offline synchronization capabilities, dynamic role-based access control (RBAC), and multi-facility analytics.",
        highlights: [
          "Dynamic role-based access control (RBAC)",
          "Offline-first synchronization capabilities",
          "Biometric data flow integration",
          "Multi-facility analytics dashboards",
        ],
        detail: {
          role: "Full-Stack Engineer",
          timeline: "11 months",
          problem:
            "Facility operations were spread across disconnected spreadsheets, access policies were inconsistent across sites, and network outages meant lost records. Biometric data had to be captured and synchronized safely.",
          solution:
            "Delivered a containerized, multi-tenant platform with dynamic RBAC, an offline-first sync engine that queues changes and reconciles on reconnect, and auditable biometric data flows with strict role gating.",
          architecture:
            "Next.js admin dashboard · Express + Prisma API layer · PostgreSQL multi-tenant schema · Docker deployment · offline sync queue · RBAC policy engine · biometric ingestion adapters.",
          outcomes: [
            "Role policies enforced consistently across all facilities",
            "Zero record loss during 3+ network outages",
            "Multi-fility analytics unified into a single dashboard",
          ],
        },
      },
      {
        id: "elearning",
        name: "E-Learning Management System",
        codename: "LearnHub",
        stack: "NestJS, Next.js, Prisma ORM, PostgreSQL",
        summary:
          "An end-to-end e-learning engine supporting dynamic course structures, media streaming playback, progress tracking, and interactive assessments.",
        highlights: [
          "Media streaming playback engine",
          "Dynamic course structure builder",
          "Progress tracking & interactive assessments",
        ],
        detail: {
          role: "Backend & Platform Engineer",
          timeline: "7 months",
          problem:
            "Instructors needed to assemble courses with mixed media and assessments without engineering help, while learners expected smooth playback and clear progress across devices.",
          solution:
            "Built a modular LMS with a dynamic course builder, a streaming-backed media player, automated progress tracking, and an interactive assessment engine with instant grading.",
          architecture:
            "NestJS modular API · Next.js learner & instructor apps · Prisma ORM · PostgreSQL · media streaming layer · assessment & grading engine · progress event bus.",
          outcomes: [
            "Instructors ship new courses without dev support",
            "Smooth playback at scale with adaptive streaming",
            "Learner progress captured automatically across devices",
          ],
        },
      },
      {
        id: "coldchain",
        name: "Cold-Chain & Meat Processing Management System",
        codename: "ColdChain",
        stack: "Go (Golang), PostgreSQL, Docker, Redis",
        summary:
          "An operational inventory and logistics platform designed for meat processing facilities and cold-storage operations, enabling real-time temperature telemetry tracking, batch batching control, and automated supply chain dispatching.",
        highlights: [
          "Real-time temperature telemetry tracking",
          "Batch batching & lot control",
          "Automated supply-chain dispatching",
        ],
        detail: {
          role: "Backend & Systems Engineer",
          timeline: "9 months",
          problem:
            "Meat processing facilities relied on manual temperature logs and paper-based batch tracking. Cold-chain excursions went unnoticed until product was already compromised, and dispatch was coordinated over phone calls with no audit trail.",
          solution:
            "Built an event-driven operations platform in Go with real-time temperature telemetry ingestion, batch and lot lifecycle control, and an automated dispatch engine that triggers supply-chain hand-offs the moment a batch clears QA.",
          architecture:
            "Go (Gin/Fiber) services · PostgreSQL for inventory, batches & audit · Redis streams for telemetry buffering & pub/sub · Dockerized workers · MQTT ingestion for cold-storage sensors · dispatch rule engine.",
          outcomes: [
            "Cold-chain excursions detected and alerted within seconds",
            "Manual batch paperwork eliminated across the facility",
            "Dispatch lead time cut by automatic QA-triggered hand-offs",
          ],
        },
      },
      {
        id: "mentcore",
        name: "MentCore — Mental Health & Wellbeing Platform",
        codename: "MentCore",
        stack: "React Native, NestJS, PostgreSQL, Prisma",
        summary:
          "A modern digital mental health platform featuring guided user onboarding, confidential progress tracking, personalized wellness content delivery, and dynamic consultation scheduling.",
        highlights: [
          "Guided, confidential onboarding",
          "Personalized wellness content delivery",
          "Dynamic consultation scheduling",
        ],
        detail: {
          role: "Full-Stack Engineer",
          timeline: "10 months",
          problem:
            "Mental-health support was fragmented: onboarding felt clinical and cold, progress wasn't tracked privately, wellness content was one-size-fits-all, and booking a consultation meant back-and-forth messages.",
          solution:
            "Built a calming, privacy-first mobile platform with guided onboarding, encrypted progress tracking, a content engine that adapts to each user's wellbeing profile, and a scheduling system that lets users book consultations in real time.",
          architecture:
            "React Native client · NestJS API · Prisma ORM · PostgreSQL with row-level confidentiality · adaptive content recommendation · consultation scheduling engine · push notifications.",
          outcomes: [
            "Onboarding completion rate lifted with a guided flow",
            "User progress kept private and visible only to the owner",
            "Consultations booked in real time without message back-and-forth",
          ],
        },
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Let's build something reliable together",
    description:
      "I'm open to full-time engineering roles, high-impact contract projects, and technical collaborations.",
    page: {
      eyebrow: "Contact",
      title: "Let's talk",
      description:
        "Tell me about your project, role, or idea. I read every message and usually reply within a day.",
    },
    formTitle: "Send a message",
    name: "Your name",
    namePh: "e.g. Sarah Johnson",
    email: "Your email",
    emailPh: "you@company.com",
    message: "Message",
    messagePh: "Tell me a bit about your project, role, or idea…",
    submit: "Send message",
    sending: "Sending…",
    successTitle: "Message sent",
    successDesc: "Thanks — I'll get back to you within a day.",
    errorTitle: "Something went wrong",
    errorDesc: "Please try again in a moment.",
    // inline field validation messages
    nameRequired: "Please enter your name (at least 2 characters).",
    emailRequired: "Please enter a valid email address.",
    messageRequired: "Message must be at least 5 characters.",
    orReach: "Or reach me directly",
    ctaTitle: "Have a project or role in mind?",
    ctaBody: "Drop a line at {email} — I usually reply within a day.",
    ctaButton: "Send an email",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Why work with me",
    description:
      "Answers to the questions teams and founders ask before bringing an engineer on board.",
    items: [
      {
        q: "Why should I choose you over other engineers?",
        a: "I work across the entire stack — database design, API architecture, and polished UI — so a project doesn't stall at hand-offs between specialists. That, plus an enterprise-systems mindset (RBAC, offline sync, real-time tracking), means fewer surprises and faster delivery.",
      },
      {
        q: "What's your typical project timeline?",
        a: "Most platforms land between 6 and 12 weeks depending on scope. I break work into weekly milestones with demoable progress, so you always see momentum and can adjust course early.",
      },
      {
        q: "Do you work solo or within an existing team?",
        a: "Both. I lead full builds end-to-end when needed, and I slot into existing teams as a senior contributor — following your conventions, reviewing PRs, and mentoring without disrupting flow.",
      },
      {
        q: "How do you handle communication and updates?",
        a: "A short async update at least every few days, plus a scheduled check-in when it helps. I document decisions in writing, so context is never locked in someone's head.",
      },
      {
        q: "Can you maintain or upgrade an existing codebase?",
        a: "Yes. I'm comfortable reading large existing systems — refactoring safely, adding tests, upgrading dependencies, and shipping features without a full rewrite.",
      },
      {
        q: "What happens after a project is delivered?",
        a: "I hand over documentation and deployment notes, and stay available for a support window. I'd rather leave you self-sufficient than dependent — though ongoing collaboration is always welcome.",
      },
    ],
  },
  footer: {
    rights: "Built with Next.js, TypeScript & Tailwind CSS.",
  },
} as const;

const ar: Dict = {
  meta: {
    title: "محمد — مهندس برمجيات Full-Stack",
    description:
      "مهندس برمجيات Full-Stack متخصص في بناء تطبيقات ويب وجوال قابلة للتوسع باستخدام Next.js وNestJS وGo وReact Native وPostgreSQL.",
  },
  dir: "rtl",
  nav: {
    home: "الرئيسية",
    about: "نبذة",
    skills: "المهارات",
    projects: "أعمالي",
    contact: "تواصل",
    cta: "تواصل معي",
    menu: "فتح القائمة",
    theme: "تبديل السمة",
    lang: "تغيير اللغة",
    backHome: "العودة للرئيسية",
  },
  hero: {
    available: "متاح للأدوار بدوام كامل والمشاريع التعاقدية عالية الأثر والتعاون التقني",
    greeting: "مرحبًا، أنا",
    role: "مهندس برمجيات Full-Stack",
    tagline:
      "متخصص في بناء تطبيقات ويب وجوال قابلة للتوسع باستخدام Next.js وNestJS وGo وReact Native وPostgreSQL. شغوف بمعمارية الأنظمة المؤسسية وتتبع المواقع اللحظي والكود النظيف.",
    viewProjects: "استعراض الأعمال",
    contactMe: "تواصل معي",
    location: "متاح للعمل عن بُعد أو في الموقع",
    namePlate: "متاح للعمل",
    badgeArch: "معمارية مؤسسية",
    coreStack: "التقنيات الأساسية",
    coreStackVal: "Next.js · NestJS · Go",
    // Hero stat strip — static count-up style
    heroStats: {
      experience: { value: 5, suffix: "+", label: "سنوات خبرة" },
      projects: { value: 28, suffix: "+", label: "مشروع مُكتمل" },
      status: { value: 0, suffix: "", label: "الحالة", text: "متاح للعمل" },
    },
    scroll: "مرّر للاستكشاف",
  },
  sponsors: {
    heading: "الأدوات والتقنيات التي أعمل بها",
  },
  about: {
    eyebrow: "نبذة عني",
    title: "هندسة عبر دورة الحياة الكاملة",
    body: "أنا مهندس Full-Stack بخبرة تمتد عبر دورة حياة التطبيق بالكامل — من تصميم مخططات قواعد البيانات وتحسين واجهات REST إلى بناء واجهات مستخدم عالية الأداء. لدي خبرة في النشر عبر الحاويات باستخدام Docker وإدارة الأنظمة الموزعة باستخدام Redis وPostgreSQL.",
    highlights: [
      {
        title: "تسليم شامل",
        description:
          "من تصميم قاعدة البيانات إلى واجهة مستخدم مصقولة وعالية الأداء — عبر دورة حياة التطبيق بالكامل.",
      },
      {
        title: "أنظمة لحظية",
        description:
          "بناء تتبع المواقع المباشرة والتدفقات المعتمدة على الأحداث باستخدام Redis pub/sub وWebSockets.",
      },
      {
        title: "الأمان والتحكم بالصلاحيات",
        description:
          "تحكم بالصلاحيات حسب الدور (RBAC) ومعالجة بيانات القياس الحيوي والمزامنة أولًا دون اتصال.",
      },
      {
        title: "عقلية DevOps",
        description:
          "نشر عبر الحاويات باستخدام Docker وLinux وبيئات قابلة للتكرار.",
      },
    ],
    page: {
      eyebrow: "نبذة عني",
      title: "مهندس، معمار، ومهووس بالكمال بهدوء",
      description:
        "نظرة أعمق على كيفية عملي وما أهتم به والمبادئ وراء كل نظام أبنبه.",
      journeyLabel: "المسيرة",
      valuesLabel: "ما أُقدّره",
      factsLabel: "حقائق سريعة",
      facts: {
        role: "مهندس Full-Stack",
        focus: "معمارية مؤسسية",
        location: "متاح للعمل عن بُعد أو في الموقع",
        availability: "متاح للعمل",
      },
    },
  },
  skills: {
    eyebrow: "المهارات التقنية",
    title: "حقيبة أدوات Full-Stack عملية",
    description:
      "مجموعة تقنيات مركزة تغطي اللغات والواجهة الأمامية والخلفية وطبقة البيانات وDevOps — مختارة للموثوقية والتوسع.",
    proficiency: "مستوى الإتقان",
    page: {
      eyebrow: "المهارات التقنية",
      title: "حقيبة الأدوات وراء كل نظام أبنبه",
      description:
        "تصفّح اللغات والأطر وقواعد البيانات وأدوات DevOps التي ألجأ إليها — مع مستوى إتقان لكل منها.",
    },
    categories: [
      { title: "اللغات", skills: ["TypeScript", "JavaScript", "Go", "Python", "SQL"] },
      {
        title: "الواجهة والجوال",
        skills: ["Next.js", "React", "React Native", "Flutter", "TailwindCSS"],
      },
      {
        title: "الخلفية وAPI",
        skills: ["NestJS", "Express.js", "Django REST", "Go (Gin/Fiber)"],
      },
      {
        title: "قواعد البيانات والتخزين المؤقت",
        skills: ["PostgreSQL", "SQLite", "Redis", "Prisma ORM"],
      },
      {
        title: "DevOps والأدوات",
        skills: ["Docker", "Git", "Linux", "Postman", "pgAdmin"],
      },
    ],
    proficiencyMap: en.skills.proficiencyMap,
  },
  projects: {
    eyebrow: "أعمال مختارة",
    title: "أنظمة مبنية للتوسع والموثوقية",
    description:
      "مجموعة من المنصات المؤسسية — من تتبع الحافلات اللحظي إلى إدارة المنشآت الآمنة وأنظمة التعلم الإلكتروني.",
    stack: "التقنيات",
    highlights: "أبرز المزايا",
    viewDetails: "عرض دراسة الحالة",
    viewAll: "استعراض كل الأعمال",
    onRequest: "دراسة الحالة متاحة عند الطلب",
    detail: {
      problemLabel: "المشكلة",
      solutionLabel: "الحل",
      architectureLabel: "المعمارية",
      outcomesLabel: "النتائج",
      roleLabel: "الدور",
      timelineLabel: "المدة",
      backToProjects: "العودة إلى الأعمال",
      overviewLabel: "نظرة عامة",
      stackLabel: "التقنيات المستخدمة",
      highlightsLabel: "أبرز المزايا",
      relatedLabel: "استكشف التالي",
    },
    page: {
      eyebrow: "معرض الأعمال",
      title: "كل نظام، مبني ليكون موثوقًا",
      description:
        "تصفّح مجموعة المنصات التي صممتها وطوّرتها — لكل منها دراسة حالة تغطي المشكلة والحل والمعمارية والنتائج.",
      countLabel: "أعمال",
    },
    items: [
      {
        id: "buslink",
        name: "نظام النقل بالحافلات المحلية والضواحي",
        codename: "BusLink",
        stack: "Django، PostgreSQL، Redis، React Native / Flutter",
        summary:
          "منصة نقل بالحافلات داخل المدينة بمستوى مؤسسي تتميز بتتبع GPS لحظي لمسارات الأسطول النشطة وإدارة نوبات السائقين وعرض خريطة مباشرة بدون حجز للمسافرين في المدينة.",
        highlights: [
          "تتبع GPS لحظي للأسطول على خريطة مباشرة",
          "إدارة نوبات السائقين وتعيين المسارات",
          "عرض مباشر بدون حجز للمسافرين في المدينة",
        ],
        detail: {
          role: "مهندس Full-Stack رئيسي",
          timeline: "8 أشهر",
          problem:
            "لم يكن لدى مسافري المدن طريقة موثوقة لمعرفة مواقع الحافلات لحظيًا. اعتمدت الإدارة على المكالمات اللاسلكية اليدوية، وتُتبع نوبات السائقين على الورق، وكثيرًا ما انتظر المسافرون في المحطات دون معلومات.",
          solution:
            "بنيت منصة نقل معتمدة على الأحداث مع خط معالجة لاستقبال بيانات GPS وRedis pub/sub لبث المواقع منخفض زمن الوصول وتطبيق مسافر بـ React Native يعرض المسارات النشطة على خريطة بدون حجز.",
          architecture:
            "واجهة Django REST · PostgreSQL لبيانات الأسطول والنوبات · Redis pub/sub للمواقع اللحظية · بوابة WebSocket · عملاء مسافرين بـ React Native / Flutter · عمليات GPS خلفية على أجهزة السائقين.",
          outcomes: [
            "تحديث الخريطة المباشرة أقل من ثانيتين لكل مركبة نشطة",
            "إلغاء مكالمات الإدارة اليدوية لأكثر من 40 مسارًا يوميًا",
            "نقل تسجيل نوبات السائقين بالكامل من الورق",
          ],
        },
      },
      {
        id: "correctional",
        name: "منصة إدارة المنشآت الإصلاحية",
        codename: "SecureFacility",
        stack: "Next.js، Express، PostgreSQL، Prisma، Docker",
        summary:
          "نظام آمن لإدارة المنشآت الإصلاحية يدمج تدفقات بيانات القياس الحيوي وإمكانيات المزامنة دون اتصال والتحكم الديناميكي بالصلاحيات حسب الدور (RBAC) وتحليلات متعددة المنشآت.",
        highlights: [
          "تحكم ديناميكي بالصلاحيات حسب الدور (RBAC)",
          "إمكانيات المزامنة أولًا دون اتصال",
          "دمج تدفقات بيانات القياس الحيوي",
          "لوحات تحليلات متعددة المنشآت",
        ],
        detail: {
          role: "مهندس Full-Stack",
          timeline: "11 شهرًا",
          problem:
            "كانت عمليات المنشأة موزعة على جداول منفصلة، وسياسات الوصول غير متسقة عبر المواقع، وتعني انقطاعات الشبكة فقدان السجلات. وكان لا بد من التقاط بيانات القياس الحيوي ومزامنتها بأمان.",
          solution:
            "سلّمت منصة متعددة المستأجرين عبر الحاويات مع RBAC ديناميكي ومحرك مزامنة أولًا دون اتصال يضع التغييرات في قائمة ويعيدها عند إعادة الاتصال، وتدفقات بيانات قياس حيوي قابلة للتدقيق مع تحكم صارم بالدور.",
          architecture:
            "لوحة تحكم بـ Next.js · طبقة API بـ Express + Prisma · مخطط متعدد المستأجرين بـ PostgreSQL · نشر عبر Docker · قائمة مزامنة دون اتصال · محرك سياسات RBAC · محولات استقبال القياس الحيوي.",
          outcomes: [
            "تطبيق سياسات الدور بثبات عبر جميع المنشآت",
            "صفر فقدان سجلات خلال أكثر من 3 انقطاعات شبكة",
            "توحيد تحليلات المنشآت في لوحة واحدة",
          ],
        },
      },
      {
        id: "elearning",
        name: "نظام إدارة التعلم الإلكتروني",
        codename: "LearnHub",
        stack: "NestJS، Next.js، Prisma ORM، PostgreSQL",
        summary:
          "محرك تعلم إلكتروني شامل يدعم هياكل دورات ديناميكية وتشغيل وسائط البث وتتبع التقدم وتقييمات تفاعلية.",
        highlights: [
          "محرك تشغيل وسائط البث",
          "منشئ هيكل دورات ديناميكي",
          "تتبع التقدم والتقييمات التفاعلية",
        ],
        detail: {
          role: "مهندس خلفية ومنصة",
          timeline: "7 أشهر",
          problem:
            "احتاج المدرّبون إلى تجميع دورات بوسائط وتقييمات متنوعة دون مساعدة المهندسين، بينما توقع المتعلمون تشغيلًا سلسًا وتقدمًا واضحًا عبر الأجهزة.",
          solution:
            "بنيت نظام إدارة تعلم معياري مع منشئ دورات ديناميكي ومشغل وسائط مدعوم بالبث وتتبع تقدم آلي ومحرك تقييمات تفاعلي بتصحيح فوري.",
          architecture:
            "واجهة NestJS معيارية · تطبيقات المتعلم والمدرّب بـ Next.js · Prisma ORM · PostgreSQL · طبقة بث الوسائط · محرك التقييم والتصحيح · ناقل أحداث التقدم.",
          outcomes: [
            "إطلاق المدرّبين لدورات جديدة دون دعم تطويري",
            "تشغيل سلس عند التوسع مع بث تكيّفي",
            "التقاط تقدم المتعلم تلقائيًا عبر الأجهزة",
          ],
        },
      },
      {
        id: "coldchain",
        name: "نظام إدارة السلسلة الباردة ومعالجة اللحوم",
        codename: "ColdChain",
        stack: "Go (Golang)، PostgreSQL، Docker، Redis",
        summary:
          "منصة مخزون ولوجستيات تشغيلية مصممة لمنشآت معالجة اللحوم وعمليات التخزين البارد، تتيح تتبع قياسات درجة الحرارة اللحظي والتحكم في تجميع الدفعات وإرسال سلاسل التوريد آليًا.",
        highlights: [
          "تتبع قياسات درجة الحرارة اللحظي",
          "التحكم في الدفعات وأرقام التشغيلة",
          "إرسال سلسلة التوريد آليًا",
        ],
        detail: {
          role: "مهندس خلفية وأنظمة",
          timeline: "9 أشهر",
          problem:
            "اعتمدت منشآت معالجة اللحوم على سجلات حرارة يدوية وتتبع دفعات ورقي. ومرّت انحرافات السلسلة الباردة دون ملاحظة حتى تتلف المنتج، ونُسّقت عمليات الإرسال عبر مكالمات هاتفية دون سجل تدقيق.",
          solution:
            "بنيت منصة عمليات معتمدة على الأحداث بلغة Go مع استقبال قياسات الحرارة اللحظية والتحكم في دورة حياة الدفعات وأرقام التشغيلة ومحرك إرسال آلي يطلّق عمليات تسليم سلسلة التوريد لحظة اجتياز الدفعة لضمان الجودة.",
          architecture:
            "خدمات Go (Gin/Fiber) · PostgreSQL للمخزون والدفعات والتدقيق · تدفقات Redis لتخزين القياسات المؤقت وpub/sub · عمليات حاويات Docker · استقبال MQTT لمستشعرات التخزين البارد · محرك قواعد الإرسال.",
          outcomes: [
            "اكتشاف انحرافات السلسلة الباردة وتنبيهها خلال ثوانٍ",
            "إلغاء أوراق تتبع الدفعات اليدوية في كامل المنشأة",
            "تقصير زمن الإرسال عبر التسليم الآلي المُطلق بضمان الجودة",
          ],
        },
      },
      {
        id: "mentcore",
        name: "MentCore — منصة الصحة النفسية والعافية",
        codename: "MentCore",
        stack: "React Native، NestJS، PostgreSQL، Prisma",
        summary:
          "منصة رقمية حديثة للصحة النفسية تتميز بإعداد مستخدم موجّه وتتبع تقدم سرّي وتوصيل محتوى عافية مخصّص وجدولة استشارات ديناميكية.",
        highlights: [
          "إعداد موجّه وسرّي للمستخدم",
          "توصيل محتوى عافية مخصّص",
          "جدولة استشارات ديناميكية",
        ],
        detail: {
          role: "مهندس Full-Stack",
          timeline: "10 أشهر",
          problem:
            "كان دعم الصحة النفسية مجزأً: بدت مرحلة الإعداد باردة ومكتبية، ولم يُتتبَّع التقدم بسرّية، وكان محتوى العافية موحّدًا للجميع، وحجز استشارة يعني رسائل متبادلة كثيرة.",
          solution:
            "بنيت منصة جوال هادئة تضع الخصوصية أولًا مع إعداد موجّه وتتبع تقدم مشفّى ومحرك محتوى يتكيّف مع ملف عافية كل مستخدم ونظام جدولة يتيح حجز الاستشارات لحظيًا.",
          architecture:
            "عميل React Native · واجهة NestJS · Prisma ORM · PostgreSQL بسرّية على مستوى الصف · توصية محتوى تكيّفية · محرك جدولة الاستشارات · إشعارات فورية.",
          outcomes: [
            "رفع معدل إتمام الإعداد عبر تدفّق موجّه",
            "بقاء تقدّم المستخدم سرّيًا ومرئيًا له وحده",
            "حجز الاستشارات لحظيًا دون رسائل متبادلة",
          ],
        },
      },
    ],
  },
  contact: {
    eyebrow: "تواصل معي",
    title: "لنبنِ شيئًا موثوقًا معًا",
    description:
      "أنا متاح للأدوار الهندسية بدوام كامل والمشاريع التعاقدية عالية الأثر والتعاون التقني.",
    page: {
      eyebrow: "تواصل",
      title: "لنتحدث",
      description:
        "أخبرني عن مشروعك أو دورك أو فكرتك. أقرأ كل رسالة وعادةً أرد خلال يوم.",
    },
    formTitle: "أرسل رسالة",
    name: "اسمك",
    namePh: "مثال: سارة جونسون",
    email: "بريدك الإلكتروني",
    emailPh: "you@company.com",
    message: "الرسالة",
    messagePh: "أخبرني قليلًا عن مشروعك أو دورك أو فكرتك…",
    submit: "إرسال الرسالة",
    sending: "جارٍ الإرسال…",
    successTitle: "تم إرسال الرسالة",
    successDesc: "شكرًا — سأرد عليك خلال يوم.",
    errorTitle: "حدث خطأ ما",
    errorDesc: "يرجى المحاولة مرة أخرى بعد لحظات.",
    // inline field validation messages
    nameRequired: "يرجى إدخال اسمك (حرفان على الأقل).",
    emailRequired: "يرجى إدخال بريد إلكتروني صالح.",
    messageRequired: "يجب ألا تقل الرسالة عن 5 أحرف.",
    orReach: "أو تواصل معي مباشرة",
    ctaTitle: "لديك مشروع أو دور في ذهنك؟",
    ctaBody: "راسلني على {email} — عادةً أرد خلال يوم.",
    ctaButton: "أرسل بريدًا إلكترونيًا",
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "لماذا العمل معي",
    description:
      "إجابات على الأسئلة التي يطرحها الفِرق والمؤسسون قبل التعاقد مع مهندس.",
    items: [
      {
        q: "لماذا أختارك عن غيرك من المهندسين؟",
        a: "أعمل عبر الحزمة التقنية بالكامل — تصميم قواعد البيانات ومعمارية الـAPI وواجهات مستخدم مصقولة — حتى لا يتوقف المشروع عند نقاط التسليم بين المتخصصين. ومع عقلية الأنظمة المؤسسية (RBAC والمزامنة دون اتصال والتتبع اللحظي) تقل المفاجآت ويزداد سرعة التسليم.",
      },
      {
        q: "ما المدة المعتادة لمشروع؟",
        a: "تتراوح معظم المنصات بين 6 و12 أسبوعًا حسب النطاق. أقسّم العمل إلى مراحل أسبوعية ذات تقدم قابل للعرض، لترى الزخم دائمًا وتعدّل المسار مبكرًا.",
      },
      {
        q: "هل تعمل منفردًا أم ضمن فريق قائم؟",
        a: "كلاهما. أقود بناءًا كاملًا من البداية للنهاية عند الحاجة، وأنضم إلى فِرق قائمة كمساهم أول — متبعًا معاييركم ومراجعًا طلبات السحب ومرشدًا دون تعطيل التدفق.",
      },
      {
        q: "كيف تدير التواصل والتحديثات؟",
        a: "تحديث غير متزامن قصير كل بضعة أيام على الأقل، بالإضافة لقاء مجدول عند الحاجة. أدوّن القرارات كتابيًا حتى لا يبقى السياق محبوسًا في رأس أحد.",
      },
      {
        q: "هل يمكنك صيانة أو تطوير قاعدة كود قائمة؟",
        a: "نعم. أرتاح لقراءة الأنظمة القائمة الكبيرة — إعادة هيكلة آمنة، إضافة اختبارات، تحديث التبعيات، وإطلاق مزايا دون إعادة كتابة كاملة.",
      },
      {
        q: "ماذا يحدث بعد تسليم المشروع؟",
        a: "أسلّم التوثيق وملاحظات النشر، وأبقى متاحًا لفترة دعم. أفضل أن أتركك مكتفياً ذاتياً بدلاً من التبعية — وإن كان التعاون المستمر مرحبًا به دائمًا.",
      },
    ],
  },
  footer: {
    rights: "بُني باستخدام Next.js وTypeScript وTailwind CSS.",
  },
};

export const translations: Record<Locale, Dict> = { en, ar };
