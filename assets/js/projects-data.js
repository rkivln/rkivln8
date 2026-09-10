// Portfolio data for Gokulan A
const portfolioData = {
  profile: {
    name: "GOKULAN A",
    primaryTitle: "Full Stack JavaScript (MERN) Developer",
    secondaryTitles: "UI/UX Designer · AI Enthusiast",
    tagline: "I build products, not just projects.",
    philosophy: "Building digital products at the intersection of Full-Stack Development, AI, and Human-Centered Design.",
    location: "Puducherry, India",
    education: {
      degree: "B.Tech — Computer Science and Engineering and Business Systems",
      institution: "Sri Manakula Vinayagar Engineering College (SMVEC)",
      graduation: "Expected 2029",
      cgpa: "8.59"
    },
    links: {
      portfolio: "https://gokulanportfolio.vercel.app",
      linkedin: "https://www.linkedin.com/in/gokulan-a",
      github: "https://github.com",
      email: "mailto:contact@gokulan.dev"
    }
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, tag: "Core" },
        { name: "Tailwind CSS", level: 95, tag: "Styling" },
        { name: "HTML5 / CSS3", level: 95, tag: "Foundation" },
        { name: "JavaScript (ES6+)", level: 92, tag: "Language" },
        { name: "Responsive UI", level: 95, tag: "Design" },
        { name: "REST API Integration", level: 90, tag: "Architecture" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 88, tag: "Runtime" },
        { name: "Express.js", level: 88, tag: "Framework" },
        { name: "REST APIs", level: 92, tag: "Architecture" },
        { name: "Server-side Logic", level: 85, tag: "Backend" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", level: 86, tag: "NoSQL" },
        { name: "SQL", level: 84, tag: "Relational" },
        { name: "Supabase", level: 88, tag: "BaaS & Auth" }
      ]
    },
    {
      category: "Programming",
      items: [
        { name: "JavaScript", level: 92, tag: "Primary" },
        { name: "Python", level: 85, tag: "AI / Scripting" },
        { name: "C", level: 80, tag: "Systems" },
        { name: "SQL", level: 84, tag: "Data" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", level: 90, tag: "VCS" },
        { name: "Vercel", level: 92, tag: "Deployment" },
        { name: "VS Code", level: 95, tag: "Editor" },
        { name: "Figma", level: 88, tag: "Design" },
        { name: "Framer", level: 82, tag: "Interactive" }
      ]
    },
    {
      category: "Design & UI/UX",
      items: [
        { name: "UI/UX Design", level: 90, tag: "Creative" },
        { name: "Figma Prototyping", level: 88, tag: "Workflow" },
        { name: "Responsive Layouts", level: 95, tag: "Standard" },
        { name: "Human-Centered Design", level: 88, tag: "UX" }
      ]
    }
  ],
  projects: [
    {
      id: "pramaanx",
      title: "PRAMAANX",
      badge: "Smart India Hackathon • Top 45",
      category: "AI / Document Security / Identity Verification",
      summary: "AI-based Fake Identity & Document Screening System designed to assist organizations in detecting suspicious identities and fraudulent documents through automated screening.",
      description: "PRAMAANX implements a privacy-preserving, local-first architecture where sensitive document and biometric data is analyzed locally before transmitting verification results to central authorization servers. Selected among Top 45 out of 129 participating teams in the Smart India Hackathon Internal Selection.",
      tags: ["Python", "OpenCV", "Face Verification", "Liveness Detection", "Local OCR", "Privacy-Preserving", "FastAPI"],
      architectureSteps: [
        { step: "1", title: "Passport / Identity Document", desc: "User or physical scanner uploads physical identity document" },
        { step: "2", title: "Local OCR Extraction", desc: "Document text fields extracted locally without external transmission" },
        { step: "3", title: "Document Processing", desc: "Security patterns, typography, and holograms analyzed for forgery" },
        { step: "4", title: "Face Detection", desc: "Biometric facial coordinates isolated from ID photo" },
        { step: "5", title: "Face Verification", desc: "1:1 biometric comparison between live capture and ID portrait" },
        { step: "6", title: "Liveness Detection", desc: "Anti-spoofing algorithms detect printouts, masks, or video replays" },
        { step: "7", title: "Identity Screening", desc: "Cross-validation against suspicious patterns & fraud heuristics" },
        { step: "8", title: "Authorized Result", desc: "Encrypted verification pass token emitted to central server" }
      ],
      highlights: [
        "Local-first edge processing eliminates unnecessary biometric data leaks",
        "Multi-stage anti-spoofing with liveness verification",
        "Selected among Top 45 / 129 teams in SIH Internal Selection"
      ]
    },
    {
      id: "altusmate",
      title: "ALTUSMATE",
      badge: "Live Project",
      category: "EdTech / Student Platform",
      summary: "A student-focused digital platform designed to bring useful academic and campus-related resources together in one cohesive workspace.",
      description: "AltusMATE addresses campus fragmentation by consolidating academic resources, timetables, study materials, and peer communication into a modern, accessible full-stack platform built on React, Node.js, and MongoDB/Supabase.",
      tags: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Supabase", "Tailwind CSS", "Vercel"],
      liveUrl: "https://altusmate.vercel.app",
      highlights: [
        "Consolidates disparate campus tools into a single intuitive portal",
        "Responsive, accessible mobile-first interface designed in Figma",
        "Scalable backend architecture deployed on Vercel & Supabase"
      ]
    },
    {
      id: "attendifier",
      title: "ATTENDIFIER",
      badge: "Education Tech",
      category: "Education / Attendance Management",
      summary: "Smart attendance platform designed to streamline tracking for students and educators with secure authentication.",
      description: "Evolving from an IP-based attendance tracker toward a robust 7-digit security-code-based teacher authorization system, Attendifier eliminates attendance fraud while providing class-wise analytics and a smart digital notice board.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Security Codes", "Analytics"],
      highlights: [
        "Teacher authorization via rotating 7-digit security token",
        "Real-time student dashboard with attendance alerts & percentages",
        "Timetable integration and instant class announcement feed"
      ]
    },
    {
      id: "assistive-hat",
      title: "SMART ASSISTIVE HAT",
      badge: "IoT Hardware • Team Tech Titans",
      category: "Hardware / Assistive Technology / IoT",
      summary: "A sensor-integrated smart wearable designed to assist visually impaired individuals with real-time audio guidance.",
      description: "Developed under Team TECH TITANS (mentored by Dr. M. Auxilia), this wearable integrates ESP8266, ultrasonic distance sensors, and a Time-of-Flight (ToF) ground sensor to detect obstacles and deliver real-time voice cues entirely offline.",
      tags: ["ESP8266", "Ultrasonic Sensors", "ToF Ground Sensor", "Voice Module", "Embedded Systems", "Offline"],
      highlights: [
        "100% Offline operation without requiring cellular or Wi-Fi connectivity",
        "Dual-plane detection: head-height obstacles & ground drop-offs",
        "Low-power embedded system engineered for all-day wearable comfort"
      ]
    },
    {
      id: "project-aura",
      title: "PROJECT A.U.R.A.",
      badge: "Autonomous Universal Reality Architecture",
      category: "Industrial AI / Industry 4.0 / Edge Computing",
      summary: "A zero-integration cognitive overlay designed to digitize legacy industrial environments without machine replacement.",
      description: "Addresses the critical gap in modern factories operating legacy CNC machines, PLCs, and isolated industrial systems by deploying an external edge AI sensor overlay that extracts telemetry and provides predictive intelligence.",
      tags: ["Industrial AI", "Edge Computing", "IIoT", "Legacy Integration", "Industry 5.0", "Cognitive Overlay"],
      highlights: [
        "Non-invasive retrofit for legacy CNC machines and PLCs",
        "Edge AI processing for zero-latency anomaly detection",
        "Bridges physical manufacturing assets with modern cloud telemetry"
      ]
    },
    {
      id: "medibridge",
      title: "MEDIBRIDGE",
      badge: "Healthcare AI",
      category: "AI Healthcare / Telemedicine",
      summary: "AI-powered rural health triage assistant connecting underserved patients with preliminary medical guidance.",
      description: "Explores accessible communication channels including WhatsApp and SMS via Twilio, backed by multi-lingual translation APIs and healthcare knowledge models for reliable initial triage.",
      tags: ["Twilio", "WhatsApp API", "AI Models", "Translation APIs", "Firebase"],
      highlights: [
        "Accessible via low-bandwidth SMS and WhatsApp interfaces",
        "Multi-lingual translation for regional vernacular languages",
        "Automated symptom screening with doctor escalation triggers"
      ]
    },
    {
      id: "earth-health",
      title: "EARTH HEALTH APP",
      badge: "3D Visualization",
      category: "Data Visualization / Environmental AI",
      summary: "Interactive 3D Earth visualization combining multi-source environmental metrics into an exploratory globe.",
      description: "Built with Three.js to render real-time air quality, water quality, noise pollution, heat index, pollen counts, and UV exposure data on an interactive 3D digital twin of the Earth.",
      tags: ["Three.js", "Interactive 3D", "WebGL", "Environmental APIs", "Data Viz"],
      highlights: [
        "Hardware-accelerated 3D planetary rendering",
        "Multi-layer overlay: Heat index, AQI, UV index, and water purity",
        "Real-time API ingestion and heat-map shader pipelines"
      ]
    }
  ],
  leadership: [
    {
      role: "Team Lead",
      event: "Smart India Hackathon Internal Selection",
      achievement: "Top 45 / 129 Teams Selected",
      responsibilities: [
        "System architecture & technical roadmap definition",
        "AI/ML pipeline research & local biometric processing flow",
        "Cybersecurity posture & privacy-preserving design",
        "Full-stack MERN & FastAPI prototype implementation",
        "Hackathon presentation strategy and live demonstration"
      ]
    }
  ],
  languages: [
    { name: "Tamil", level: "Native", code: "ta" },
    { name: "English", level: "Professional", code: "en" },
    { name: "German", level: "Beginner (Duolingo)", code: "de" }
  ]
};
