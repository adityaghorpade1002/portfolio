export const portfolioData = {
  personal: {
    name: "Aditya Ghorpade",
    role: "Full Stack Developer",
    badge: "Available for Full-time Roles & Internships",
    location: "Pune, Maharashtra, India",
    email: "adityaghorpade1002@gmail.com",
    phone: "+91 73858 27935",
    profileImage: "/portfolio.jpg",
    bio: [
      "I am an MCA student and full stack software engineer based in Pune with proven experience building production-grade web systems across Next.js, React, Node.js, TypeScript, Java, and modern databases.",
      "My public repositories reflect real-world engineering—from real-time WebSocket order management systems (OrderHub) and role-based evaluation platforms with automated test suites to multi-tenant ERPs and online proctored compilers.",
      "Dedicated to clean architecture, type safety, modular component libraries, and robust API contracts backed by automated testing and Agile sprint methodologies."
    ],
    summaryStatement: "Building resilient, performant web applications, real-time WebSocket systems, and scalable databases with Next.js, TypeScript, React, Node.js, and Java.",
    social: {
      github: "https://github.com/adityaghorpade1002",
      linkedin: "https://linkedin.com/in/aditya-ghorpade1002",
      email: "mailto:adityaghorpade1002@gmail.com",
    },
    resume: {
      fileName: "Aditya-Ghorpade-Full-Stack-Developer-Resume.pdf",
      filePath: "/resume/Aditya-Ghorpade-Full-Stack-Developer-Resume.pdf",
    }
  },

  skills: {
    categories: [
      {
        id: "frontend",
        title: "Frontend Engineering",
        description: "Modern, responsive, and type-safe user interfaces built with React and Next.js App Router.",
        skills: [
          { name: "Next.js (App Router)", level: "Core" },
          { name: "React.js", level: "Core" },
          { name: "TypeScript", level: "Core" },
          { name: "JavaScript (ES6+)", level: "Core" },
          { name: "Tailwind CSS", level: "Core" },
          { name: "TanStack Query", level: "Proficient" },
          { name: "Zustand", level: "Proficient" },
          { name: "HTML5 & CSS3", level: "Core" },
        ]
      },
      {
        id: "backend",
        title: "Backend & Systems",
        description: "Scalable server architectures, WebSockets, REST APIs, and authentication middleware.",
        skills: [
          { name: "Node.js & Express", level: "Core" },
          { name: "Socket.IO (WebSockets)", level: "Core" },
          { name: "Java (OOP)", level: "Core" },
          { name: "Prisma ORM", level: "Core" },
          { name: "Zod Schema Validation", level: "Core" },
          { name: "Java Servlets & JSP", level: "Proficient" },
          { name: "RESTful API Design", level: "Core" },
          { name: "JWT & RBAC Security", level: "Core" },
        ]
      },
      {
        id: "languages",
        title: "Programming Languages",
        description: "Versatile language foundation spanning strongly-typed, functional, and enterprise stacks.",
        skills: [
          { name: "TypeScript", level: "Advanced" },
          { name: "JavaScript", level: "Advanced" },
          { name: "Java", level: "Advanced" },
          { name: "PHP", level: "Proficient" },
          { name: "C / C++", level: "Academic" },
          { name: "Python", level: "Working" },
        ]
      },
      {
        id: "databases",
        title: "Databases & Storage",
        description: "Relational modeling, migration workflows, aggregation queries, and cloud database engines.",
        skills: [
          { name: "PostgreSQL", level: "Core" },
          { name: "MySQL", level: "Core" },
          { name: "Supabase", level: "Core" },
          { name: "MongoDB", level: "Proficient" },
          { name: "Database Migrations", level: "Proficient" },
        ]
      },
      {
        id: "tools",
        title: "Tools, Testing & DevOps",
        description: "Version control, automated testing frameworks, containerization, and API suites.",
        skills: [
          { name: "Git & GitHub", level: "Core" },
          { name: "Docker & Compose", level: "Working" },
          { name: "Vitest / Unit Testing", level: "Proficient" },
          { name: "Postman API Suites", level: "Core" },
          { name: "VS Code & Eclipse", level: "Core" },
          { name: "Agile & Scrum Sprints", level: "Practiced" },
        ]
      }
    ]
  },

  projects: [
    {
      id: "multi-store-order-management",
      title: "OrderHub",
      subtitle: "Multi-Store Order Management & Real-Time WebSocket System",
      year: "2026",
      featured: true,
      category: "Full Stack & Distributed",
      description: "An enterprise-grade order management platform designed for multi-store retail operations. Integrates real-time WebSocket state synchronization with high-throughput PostgreSQL aggregation engines and automated transactional data archival.",
      bullets: [
        "Architected full-stack solution with Next.js 16 (App Router), React 19, TypeScript, Node.js, Express, and PostgreSQL 15 via Prisma ORM.",
        "Engineered real-time WebSocket engine using Socket.IO with store-specific rooms (store:{storeId}) and global administrative feeds with auto-reconnect backoff.",
        "Implemented PostgreSQL analytics engine utilizing DATE_TRUNC and jsonb_array_elements for low-overhead sales velocity and revenue aggregation.",
        "Constructed zero-downtime data archival mechanism utilizing SQL Common Table Expressions (CTEs) transitioning aged orders into cold tables.",
        "Configured multi-container Docker Compose deployment and comprehensive OpenAPI / Swagger specifications."
      ],
      technologies: ["Next.js 16", "TypeScript", "Node.js", "Socket.IO", "PostgreSQL", "Prisma ORM", "Docker Compose", "Tailwind CSS"],
      githubUrl: "https://github.com/adityaghorpade1002/multi-store-order-management",
      liveUrl: null,
      isLiveAvailable: false
    },
    {
      id: "store-rating-platform",
      title: "Store Rating Platform",
      subtitle: "3-Tier Role-Based Rating & Admin Platform with 176 Vitest Tests",
      year: "2026",
      featured: true,
      category: "Full Stack & Testing",
      description: "A production-grade, full-stack web application designed for transparent store reviews and role-based platform oversight. Built with a clean enterprise layered architecture, strong type-safety, robust security controls, and 176 automated test cases.",
      bullets: [
        "Developed 3-tier enterprise architecture separating UI, validation, services, and Prisma database access layers with strict TypeScript typing.",
        "Implemented multi-role access control (Admin, Store Owner, User) with stateless JWT tokens in secure HTTP-only cookies and Edge middleware guards.",
        "Engineered dynamic store rating calculation engine with real-time average aggregation, review histories, and pagination.",
        "Integrated Zod schemas for unified client/server input validation and comprehensive automated testing suite with 176 passing Vitest unit and integration tests."
      ],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "MySQL", "TanStack Query", "Vitest", "Zod", "Tailwind CSS"],
      githubUrl: "https://github.com/adityaghorpade1002/store-rating-platform",
      liveUrl: null,
      isLiveAvailable: false
    },
    {
      id: "collegefunda",
      title: "CollegeFunda",
      subtitle: "College Guidance & Course Discovery Platform",
      year: "2025",
      featured: true,
      category: "Full Stack Web Platform",
      description: "A college discovery and guidance platform engineered to help students explore colleges, entrance criteria, course streams, and cutoffs with responsive filtering.",
      bullets: [
        "Constructed component-driven frontend architecture using React.js and Tailwind CSS with smooth search filtering.",
        "Integrated Supabase backend for persistent relational storage, structured search queries, and user authentication.",
        "Implemented responsive layouts and clean REST API communication layers ensuring rapid page-loads across devices."
      ],
      technologies: ["React.js", "Node.js", "Supabase", "REST API", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/adityaghorpade1002/CollegeFunda",
      liveUrl: null,
      isLiveAvailable: false
    },
    {
      id: "aquaflow",
      title: "AquaFlow",
      subtitle: "Supply Chain & Workflow Management Platform",
      year: "2026",
      featured: true,
      category: "Enterprise Workflow",
      description: "An operational workflow automation platform built with Vite, React, and Tailwind CSS designed for process tracking, chemist analytics, and pipeline monitoring.",
      bullets: [
        "Built modular React dashboard with status progression stages, operational flags, and audit tracking.",
        "Connected interactive UI state flows with backend RESTful services and relational database validation.",
        "Optimized layout responsiveness and data filtering for operational teams."
      ],
      technologies: ["Vite", "React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/adityaghorpade1002/AQUA_FLOW",
      liveUrl: null,
      isLiveAvailable: false
    },
    {
      id: "javax-compiler",
      title: "Javax Compiler",
      subtitle: "Online Examination Platform with Proctoring",
      year: "2025",
      featured: false,
      category: "Systems & Security",
      description: "A secure online Java code compilation and examination platform equipped with automated compilation execution and client-side proctoring safeguards.",
      bullets: [
        "Built server-side Java compilation and execution engine using Java Servlets, JSP, and process orchestration.",
        "Engineered proctoring safeguards including tab-switching detection and multiple-face detection triggers to maintain exam integrity.",
        "Developed automated timer submission, persistent exam question delivery, and structured session storage in MySQL."
      ],
      technologies: ["Java", "Servlets", "JSP", "JavaScript", "MySQL", "Web APIs"],
      githubUrl: null, // Academic / Internal repository
      liveUrl: null,
      isLiveAvailable: false
    },
    {
      id: "campus-nexus",
      title: "Campus Nexus",
      subtitle: "Role-Based College ERP System",
      year: "2024",
      featured: false,
      category: "Enterprise ERP",
      description: "An institutional resource planning (ERP) platform connecting college administration, faculty, and students with strict role-based access control.",
      bullets: [
        "Constructed dedicated multi-role dashboards for Administrators, Faculty members, and Students with tailored privilege levels.",
        "Engineered core modules for student attendance logging, internal grading, report generation, and student profile management.",
        "Implemented secure CRUD operations, SQL injection mitigation, and relational integrity using PHP and PostgreSQL."
      ],
      technologies: ["PHP", "PostgreSQL", "JavaScript", "HTML5", "CSS3"],
      githubUrl: null, // Academic / Internal repository
      liveUrl: null,
      isLiveAvailable: false
    },
    {
      id: "vitta-vidhi",
      title: "Vitta Vidhi Advisors",
      subtitle: "Corporate Financial & Legal Advisory Web Platform",
      year: "2026",
      featured: false,
      category: "Web Application",
      description: "A responsive professional web portal for financial and advisory services featuring structured service catalogs, consultation request funnels, and type-safe architecture.",
      bullets: [
        "Developed structured TypeScript and React components with tailored advisory service workflows.",
        "Designed accessible, mobile-first design system with performant asset loading and clear call-to-actions."
      ],
      technologies: ["TypeScript", "React.js", "Tailwind CSS", "Next.js"],
      githubUrl: "https://github.com/adityaghorpade1002/vitta-vidhi-advisors",
      liveUrl: null,
      isLiveAvailable: false
    }
  ],

  experience: [
    {
      id: "qloax-internship",
      role: "IT Intern",
      company: "QLOAX LLP",
      location: "Pune, Maharashtra",
      period: "Dec 2025 – April 2026",
      status: "Active / Scheduled",
      product: "Acadmyx – School/College ERP System",
      description: "Contributing to the engineering and deployment of Acadmyx, an enterprise-grade ERP system built for educational institutions.",
      contributions: [
        "Participating in backend module engineering, implementing REST API endpoints, and executing database queries.",
        "Supporting enterprise workflow automation and administrative process optimization to improve institutional efficiency.",
        "Collaborating closely with senior developers across Agile sprint cycles, conducting feature testing, and assisting deployment workflows.",
        "Working with team Git workflows, version control conventions, and structured code reviews."
      ],
      technologies: ["REST APIs", "Backend Services", "Database Management", "Agile/Scrum", "Git"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Dr. D. Y. Patil Institute of Management and Research, Pimpri",
      period: "2024 – 2026",
      score: "CGPA: 8.27",
      highlight: "Specializing in Full Stack Systems, Advanced Java, Database Architecture & Cloud Computing"
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      institution: "Tuljaram Chaturchand College, Baramati",
      period: "2021 – 2024",
      score: "CGPA: 7.65",
      highlight: "Foundation in Data Structures, OOP, Web Technologies, and Database Systems"
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "YCIS College, Satara",
      period: "2019 – 2021",
      score: "84.00%",
      highlight: "Science Stream with focus on Mathematics & Computer Foundations"
    },
    {
      degree: "Secondary School Certificate (SSC - 10th)",
      institution: "Maharashtra High School, Khojewadi",
      period: "2018 – 2019",
      score: "84.40%",
      highlight: "Academic Excellence with high distinction in Mathematics and Science"
    }
  ],

  achievements: {
    awards: [
      {
        title: "1st Rank — Web Development Competition",
        issuer: "Undergraduate Inter-Collegiate Level",
        description: "Awarded first place for designing and implementing a responsive, functional web application under strict time constraints."
      },
      {
        title: "Technical Event Leadership",
        issuer: "Departmental Recognition",
        description: "Recognized for proactive technical contributions and student coordination across collegiate hackathons and coding events."
      },
      {
        title: "High Academic Project Ratings",
        issuer: "Institutional Evaluation",
        description: "Consistently secured top-tier evaluation scores for software engineering deliverables and practical project presentations."
      }
    ],
    certifications: [
      {
        title: "Cloud Computing",
        issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
        verified: true
      },
      {
        title: "Software Development",
        issuer: "Microsoft & LinkedIn Learning",
        verified: true
      },
      {
        title: "Python Web Development",
        issuer: "Infotech Technologies",
        verified: true
      },
      {
        title: "Java Programming",
        issuer: "MBTB",
        verified: true
      }
    ]
  }
};
