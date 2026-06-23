const CONFIG = {

  // IDENTIDAD
  name: {
    first: "VÍCTOR",       // Nombre en hero (grande)
    last:  "de Cabo",      // Apellido (pequeño)
    initials: "VCR",       // Logo navbar
  },

  tagline: "Toda persona necesita a un hacker de su lado.",

  // Roles del efecto de escritura
  roles: [
    "Security Specialist",
    "Software Developer",
    "Penetration Tester",
    "ENS Consultant",
    "Homelab Enthusiast"
  ],

  availability: {
    open: true,            // true = verde "Disponible", false = rojo "No disponible"
    text: "Buscando mi primera posición profesional en ciberseguridad o desarrollo seguro.",
  },

  // CONTACTO / REDES
  links: {
    github:   "https://github.com/lBENDUl",
    linkedin: "https://www.linkedin.com/in/victor-de-cabo",
    blog:     "https://bendu.gitbook.io/vcr-doc",
    email:    "victordcr@protonmail.com",
    htb:      "https://profile.hackthebox.com/profile/019e4b2e-eae6-7366-be3c-666c555e091a",
  },

  // Formspree endpoint para el formulario de contacto
  formspreeId: "maqzddgo",

  // HERO — Estadísticas (las 4 tarjetas)
  stats: [
    { value: "4+",  label: "Formaciones completadas" },
    { value: "4+",  label: "Máquinas HTB / DockerLabs" },
    { value: "77%", label: "Progreso CPTS Academy" },
    { value: "∞",   label: "Ganas de aprender" },
  ],

  // SOBRE MÍ — Bio
  bio: [
    `Especialista en Ciberseguridad con base técnica en SMR, DAM y una FP de Especialización,
     complementada con aprendizaje autodidacta continuo en <strong>HackTheBox Academy</strong>,
     Hack4u y labs prácticos.`,
    `Mi motivación es clara: <strong>entender cómo funcionan los sistemas para saber cómo protegerlos</strong>.
     No me atrae romper cosas, me atrae desentrañar sus mecanismos, identificar puntos frágiles
     y diseñar defensas desde esa comprensión profunda.`,
    `Aplico <strong>Security by Design</strong>: la seguridad que funciona nace de entender primero
     cómo un sistema podría fallar, antes de construirlo.`,
  ],

  philosophyQuote: "// Security by Design — La seguridad no es un plugin, es una mentalidad.",

  // SOBRE MÍ — Formación
  education: [
    {
      icon:      "🛡️",
      title:     "FP Especialización en Ciberseguridad",
      institute: "IES Venancio Blanco",
      year:      "2025",
      highlight: true,      // true = borde lime, false = normal
    },
    {
      icon:      "💻",
      title:     "CFGS Desarrollo de Aplicaciones Multiplataforma",
      institute: "IES Venancio Blanco",
      year:      "2024",
      highlight: false,
    },
    {
      icon:      "🌐",
      title:     "CFGM Sistemas Microinformáticos y Redes",
      institute: "Misioneras de La Providencia",
      year:      "2022",
      highlight: false,
    },
  ],

  // SOBRE MÍ — Skills de desarrollo (barras)
  devSkills: [
    { name: "Bash / Shell",          level: 80, color: "lime" },
    { name: "SQL / NoSQL",           level: 80, color: "indigo" },
    { name: "Python",                level: 70, color: "lime" },
    { name: "Java",                  level: 70, color: "indigo" },
    { name: "Docker",                level: 70, color: "lime" },
    { name: "VisualBasic / .NET",    level: 60, color: "indigo" },
    { name: "Git / CI-CD",           level: 50, color: "lime" },
    { name: "JavaScript / TypeScript", level: 30, color: "indigo" },
  ],

   // SOBRE MÍ — Tags de ciberseguridad
  secTags: [
    { label: "Pentesting Web (OWASP)",    color: "lime" },
    { label: "Suricata / Snort",          color: "lime" },
    { label: "SIEM / Wazuh / Security Onion", color: "indigo" },
    { label: "Wireshark / tcpdump",       color: "lime" },
    { label: "Metasploit / Burp Suite",   color: "indigo" },
    { label: "Nmap / Nessus",             color: "lime" },
    { label: "Análisis de Malware",       color: "indigo" },
    { label: "CTF / HackTheBox",          color: "lime" },
    { label: "Redes TCP/IP / VLANs",      color: "lime" },
    { label: "ISO 27001 / ENS",           color: "indigo" },
  ],

  /* PROYECTOS
     status: "completed" | "in-progress" | "paused"
     iconType: "search" | "code" | "shield" | "lock" | "globe"
     repoUrl: null si es privado */
  projects: [
    {
      title:    "OwlSec — OSINT Toolkit",
      desc:     "Herramienta CLI modular en Python para reconocimiento pasivo: WHOIS, enumeración DNS, subdominios, geolocalización de IPs, análisis con VirusTotal, Google Dorks y búsqueda de usernames en 15+ plataformas. Exporta informes HTML profesionales.",
      status:   "completed",
      category: "Security Tool",
      iconType: "search",
      iconColor: "lime",
      tags:     [
        { label: "Python",        color: "lime" },
        { label: "OSINT",         color: "lime" },
        { label: "CLI",           color: "lime" },
        { label: "VirusTotal",    color: "indigo" },
        { label: "Reconocimiento",color: "indigo" },
      ],
      repoUrl:  "https://github.com/lBENDUl/OwlSec",
    },
    {
      title:    "ArgosScan",
      desc:     "Scanner de vulnerabilidades profesional en Python. Automatiza reconocimiento activo: escaneo de puertos, detección de servicios, matching contra CVE database y análisis SSL/TLS con reportes en HTML.",
      status:   "completed",
      category: "Security Tool",
      iconType: "code",
      iconColor: "indigo",
      tags:     [
        { label: "Python",      color: "indigo" },
        { label: "Vuln Scanner",color: "indigo" },
        { label: "Nmap",        color: "indigo" },
        { label: "CVE",         color: "indigo" },
        { label: "CLI",         color: "indigo" },
      ],
      repoUrl:  "https://github.com/lBENDUl/ArgosScan",
    },
    {
      title:    "Plataforma ENS",
      desc:     "Proyecto privado y en desarrollo",
      status:   "in-progress",
      category: "Compliance",
      iconType: "shield",
      iconColor: "lime",
      tags:     [
        { label: "ENS",       color: "lime" },
        { label: "ISO 27001", color: "lime" },
        { label: "Python",    color: "indigo" },
        { label: "FastAPI",   color: "indigo" },
        { label: "Auditoría", color: "lime" },
      ],
      repoUrl:  null,   // null = "Privado — En desarrollo"
    },
  ],

  
  // HACKTHEBOX — Certificaciones
  htbCerts: [
    {
      id:       "cpts",
      cert:     "CPTS",
      name:     "Penetration Tester",
      progress: 77,         // porcentaje 0-100
      color:    "lime",
      showProfileLink: true,
    },
    {
      id:       "cwee",
      cert:     "CWEE",
      name:     "Web Penetration Tester",
      progress: 74,
      color:    "indigo",
      showProfileLink: false,
    },
  ],

  /* HACKTHEBOX — Máquinas resueltas
     difficulty: "Easy" | "Medium" | "Hard" | "Insane"
     platform: "HackTheBox" | "DockerLabs" | "TryHackMe"
     url: null si no tiene enlace */
  machines: [
    {
      name:       "Cap",
      platform:   "HackTheBox",
      difficulty: "Easy",
      os:         "Linux",
      url:        "https://www.hackthebox.com/machines/cap",
    },
    {
      name:       "Silentium",
      platform:   "HackTheBox",
      difficulty: "Easy",
      os:         "Linux",
      url:        "https://www.hackthebox.com/machines/Silentium",
    },
    {
      name:       "Kobold",
      platform:   "HackTheBox",
      difficulty: "Easy",
      os:         "Linux",
      url:        "https://www.hackthebox.com/machines/Kobold",
    },
    {
      name:       "Injection",
      platform:   "DockerLabs",
      difficulty: "Easy",
      os:         "Linux",
      url:        null,
    },
    {
      name:       "Inclusion",
      platform:   "DockerLabs",
      difficulty: "Medium",
      os:         "Linux",
      url:        null,
    },
  ],

  // BLOG — Posts destacados
  blogPosts: [
    {
      title:   "Google Dorking: Inteligencia de Amenazas a través de Búsquedas Avanzadas",
      excerpt: "Operadores avanzados para encontrar contraseñas, API keys, servidores mal configurados y datos sensibles. Queries reales y cómo protegerse.",
      date:    "15 Nov 2025",
      readMin: 12,
      tags:    [
        { label: "OSINT",          color: "lime" },
        { label: "Reconocimiento", color: "lime" },
      ],
      url:     "https://bendu.gitbook.io/vcr-doc/1-recopilacion-de-informacion/google-hacking/google-dorking",
    },
    {
      title:   "SQL Injection: Cómo un comentario mal sanitizado te puede costar todo",
      excerpt: "Desde el básico UNION SELECT hasta técnicas ciegas. Payloads reales, herramientas de automatización y por qué sigue siendo el #1 en la web.",
      date:    "28 Oct 2025",
      readMin: 18,
      tags:    [
        { label: "SQLi",        color: "indigo" },
        { label: "OWASP Top 10",color: "indigo" },
      ],
      url:     "https://bendu.gitbook.io/vcr-doc/3-explotacion-de-vulnerabilidades/ataques-web/sql-injection-sqli",
    },
    {
      title:   "XSS: Inyectando JavaScript donde no debería estar",
      excerpt: "Desde robar cookies hasta interceptar datos en tiempo real. Reflected, Stored, DOM-based... cada variante con sus trucos y bypass de filtros.",
      date:    "10 Sep 2025",
      readMin: 15,
      tags:    [
        { label: "XSS",          color: "lime" },
        { label: "Web Security", color: "lime" },
      ],
      url:     "https://bendu.gitbook.io/vcr-doc/3-explotacion-de-vulnerabilidades/ataques-web/cross-site-scripting-xss",
    },
    {
      title:   "Nmap: La navaja suiza del mapeo de redes",
      excerpt: "Desde escaneos básicos hasta técnicas evasivas, scripts NSE y optimización en redes grandes. Evasión de firewalls incluida.",
      date:    "22 Ago 2025",
      readMin: 14,
      tags:    [
        { label: "Nmap",          color: "indigo" },
        { label: "Network Recon", color: "indigo" },
      ],
      url:     "https://bendu.gitbook.io/vcr-doc/herramientas/enumeracion/nmap",
    },
  ],

  // FOOTER
  footerCopy: "© 2025 Víctor de Cabo - Todos los derechos reservados.",

};
