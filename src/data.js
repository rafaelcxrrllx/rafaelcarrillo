// ============================================================
// EDIT PORTFOLIO CONTENT HERE
// All your personal info, projects, and skills live in this file.
// ============================================================

export const personal = {
  name: "Rafael Carrillo",
  title: "UX Designer",
  tagline: "Hi, my name is Rafael",
  bio: "I'm a UX Designer passionate about building intuitive, human-centered digital products. I blend research, strategy, and visual craft to create experiences that are both beautiful and meaningful.",
  location: "Los Angeles, CA",
  email: "rafaelcarrillo09@gmail.com",
  linkedin: "https://linkedin.com/in/rafaelcxrrllx",
  github: "https://github.com/rafaelcxrrllx",
  instagram: "https://instagram.com/rafaelcxrrllx",
  resume: "/Resume.pdf", // place your resume PDF in /public
  photo: "/headshot.jpeg"
};

export const skills = [
  { name: "UX Research", level: 90, category: "Research" },
  { name: "Wireframing", level: 95, category: "Design" },
  { name: "Prototyping", level: 90, category: "Design" },
  { name: "Figma", level: 95, category: "Tools" },
  { name: "Usability Testing", level: 85, category: "Research" },
  { name: "Design Systems", level: 80, category: "Design" },
  { name: "User Flows", level: 90, category: "Design" },
  { name: "React", level: 70, category: "Dev" },
  { name: "HTML / CSS", level: 80, category: "Dev" },
  { name: "Information Architecture", level: 85, category: "Research" },
];

export const projects = [
  {
    id: 1,
    slug: "pain-psychologist-la",
    title: "Pain Psychologist LA",
    subtitle: "Healthcare Website Redesign",
    description: "Redesigned a pain psychology practice's web presence to build emotional trust, reduce cognitive load, and make it easier for patients to find and book care.",
    tags: ["Web", "Healthcare UX", "Accessibility", "Emotional Design", "Mobile"],
    image: "../projects/ppla.jpg",
    color: "#EAF2F0",
    accent: "#2A6B5E",
    year: "2024",
    role: "UX/UI Designer",
    duration: "Multi-week Design Sprint",
    team: "Solo",
    caseStudy: {
      overview: "Pain Psychologist LA is a mental health practice specializing in chronic pain. Their existing online presence failed to communicate warmth, safety, or clarity — all critical for patients already under stress. I took on this project to redesign the full website experience with an emotional-first lens.",
      problem: "Patients seeking therapy for chronic pain are often in a vulnerable state. The original site created friction at every step — cluttered navigation, unclear service descriptions, no emotional reassurance, and poor mobile experience. The result was a site that felt clinical and cold when it needed to feel safe and approachable.",
      research: "I started by studying mental health and healthcare UX best practices, focusing specifically on how emotional design builds trust in sensitive contexts. I analyzed competing therapy and psychology websites, identified common friction points in how patients search for care, and reviewed WCAG accessibility guidelines to ensure the redesign would work for all users. A key insight: patients under stress have lower cognitive tolerance — every extra click or confusing label is a barrier.",
      process: "I prioritized emotional design from the start — calming color palette, soft typography, and a minimal layout with generous whitespace. I restructured the information architecture to answer three questions immediately: What do you treat? How does it work? How do I get started? Navigation was simplified to reduce decision fatigue. I designed a user flow specifically for booking and contact, removing unnecessary steps. Every component decision was filtered through one question: does this feel safe?",
      solution: "A fully redesigned website experience built around trust and clarity. The homepage leads with reassurance, not a list of credentials. Services are explained in plain, empathetic language. A strong typographic hierarchy guides users through the content without overwhelming them. CTAs for booking and contact are clear and present on every page. The entire experience is mobile-first and accessibility-informed.",
      outcome: "The redesign significantly improved emotional clarity and trust in the experience. Navigation friction was reduced, making it easier for patients to find relevant services and take the next step. The practice now presents a more credible, calming, and professional online identity — one that reflects the care they actually provide.",
    },
  },
  {
    id: 2,
    slug: "cargo-liner",
    title: "Cargo Liner",
    subtitle: "Logistics & Shipping Platform",
    description: "Designed a logistics platform concept that transforms complex shipment data into a clear, trackable, and intuitive dashboard experience for businesses managing cargo.",
    tags: ["Web", "Dashboard Design", "Enterprise UX", "Data Visualization", "Systems Design"],
    image: "../projects/cargoliner.jpg",
    color: "#EEF1FB",
    accent: "#2E4FD8",
    year: "2024",
    role: "UX/UI Designer",
    duration: "Multi-week Design Sprint",
    team: "Solo",
    caseStudy: {
      overview: "Cargo Liner is a logistics and shipping platform concept designed to solve one of the most persistent problems in supply chain UX: making complex, data-heavy information readable and actionable. The goal was to design an enterprise-grade experience that felt intuitive rather than overwhelming.",
      problem: "Existing logistics platforms like FedEx and UPS suffer from the same issue — their interfaces were built for internal operations, not for the businesses and customers using them daily. Information is buried, status updates are unclear, and tracking multiple shipments is a frustrating, manual process. Users needed real-time visibility without needing to decode the interface.",
      research: "I audited major logistics platforms to map their UX patterns and identify gaps. I researched user behavior around shipment tracking — when people check, what they're looking for, and what causes anxiety in the process. I studied enterprise dashboard design patterns, focusing on how to present high-density data without sacrificing clarity. The core finding: users want status confidence — they need to know at a glance that things are moving and on time.",
      process: "I designed around a single principle: hierarchy of urgency. The most time-sensitive information — shipment status, estimated arrival, exceptions — surfaces first. I created a card-based UI system that breaks complex logistics data into digestible units. I designed user flows for tracking individual and multiple shipments, a search and filter system, and visual status indicators that communicate movement at a glance. Every decision was functional-first, with aesthetics serving clarity.",
      solution: "A logistics dashboard concept featuring a clean shipment tracking interface with visual status indicators, simplified data cards for shipment details, a search and filter system for managing multiple shipments, and a clear operational hierarchy. The mobile-friendly tracking interface ensures users can check status on the go without losing context.",
      outcome: "The concept demonstrated that complex logistics data can be made readable and intuitive without sacrificing depth. The design established a strong foundation for enterprise dashboard UX, improved the readability of multi-shipment management, and proved my ability to design for data-heavy, systems-level problems.",
    },
  },
  {
    id: 3,
    slug: "barrio-athletics",
    title: "Barrio Athletics",
    subtitle: "eCommerce Website Redesign",
    description: "Led a team of 4 designers to redesign an athletic streetwear brand's eCommerce experience — improving product discovery, mobile shopping, and brand storytelling.",
    tags: ["Web", "eCommerce", "Design Systems", "Mobile-first", "Brand Identity"],
    image: "../projects/ba.jpg",
    color: "#FDF3EE",
    accent: "#C2541A",
    year: "2024",
    role: "Design Lead / UX·UI Designer",
    duration: "Multi-week Design Sprint",
    team: "Solo",
    caseStudy: {
      overview: "Barrio Athletics is an athletic clothing brand rooted in south central culture. Founder Henry Gallardo came to me asking for me to build him an elite ecommerce website for his brand.",
      problem: "The original site had three core problems: the brand story wasn't coming through, products were hard to find and browse, and the mobile experience was broken. For a brand built on community and identity, the site felt generic. Customers weren't connecting, and the shopping flow had too much friction to convert.",
      research: "We ran a full UX audit of the existing site — mapping the shopping flow, identifying drop-off points, and flagging usability issues. We did a competitive analysis of brands like Nike, Gymshark, and Adidas to understand what high-performing athletic eCommerce looks like. We studied mobile shopping behavior trends and conversion patterns. The key insight: streetwear customers shop with their eyes first — visual hierarchy and brand identity are conversion tools.",
      process: "As design lead, I structured the sprint and divided ownership across the team. We started by redefining the information architecture — reorganizing collections and categories for intuitive discovery. I designed the hero section and overall visual system, establishing the typography, spacing, and component library the team would build from. We ran usability reviews on each other's work throughout. Mobile-first was non-negotiable — every layout decision started at 375px and expanded up.",
      solution: "A redesigned eCommerce experience with a strong hero section that leads with brand storytelling, a clean structured product grid, simplified collection navigation with improved filtering, a consistent design system across all pages, and a mobile shopping experience built for how the brand's audience actually shops.",
      outcome: "The redesign delivered a significantly stronger brand identity online — one that actually reflects the culture behind Barrio Athletics. Product discovery improved with clearer navigation and filtering. The mobile experience went from broken to fluid. The team shipped a complete, professional eCommerce presentation that gives the brand the credibility it deserves.",
    },
  },

  {
    id: 4,
    slug: "stand-up-to-trash",
    title: "Stand Up to Trash",
    subtitle: "Volunteer Management System",
    description: "Led 4 designers to build a platform connecting 4,000 volunteers to admins for beach cleanup events — reducing admin time on task by 70% and replacing paper-based data collection entirely.",
    tags: ["UX Research", "Dashboard Design", "Mobile", "Usability Testing", "Systems Design"],
    image: null,
    color: "#E8F5EE",
    accent: "#1E7A48",
    year: "2023",
    role: "Design Lead",
    duration: "1 Year",
    team: "5 Designers",
    caseStudy: {
      overview: "Stand Up to Trash is a nonprofit organization that runs beach cleanup events across Southern California. They needed a centralized digital system to replace their manual, paper-based volunteer check-in and trash data collection process. I led a team of 4 designers over the course of a year to design a full volunteer management platform — covering both an admin dashboard and a volunteer-facing experience — that was prototyped in Figma and handed off for development.",
      problem: "How might we design a centralized way to streamline the process of volunteer registration and trash data collection? The existing process was entirely manual: volunteers had their trash weighed, were told to remember their weight, wrote their name and weight on paper, then dropped off their trash. This created three critical problems — the manual process was slow and exhausting for coordinators, transferring paper records to Excel was error-prone, and there was no way to track data trends over time. With 4,000 volunteers across events, the system was breaking down.",
      research: "We started with a requirements elicitation — interviewing Stand Up to Trash coordinators directly to capture their wants, needs, and pain points. This produced a detailed Requirements Document that grounded every design decision in real user needs. From the interviews, we built a data-informed persona representing the admin user: a coordinator managing dozens of volunteers simultaneously, under time pressure, who needed speed and accuracy above everything else. We mapped out both the volunteer and admin user journeys through an Informational Architecture, then built a Feature Tracker to organize the large scope of features across both sides of the platform — keeping the team aligned throughout the year.",
      process: "We ran a full four-phase design process: Discovery & Research → Ideation & Wireframing → Prototyping & User Testing → Final Design & Handoff. In the wireframing phase, I designed low-fidelity screens focused on the admin check-in flow — a key decision was adding a search bar so admins could find volunteers instantly rather than scrolling through a list. We tested this early and it validated quickly. We then built a Brand Guide to establish a consistent visual system before moving to high-fidelity. After presenting wireframes to the client, they requested additional features: Party Size, Add Guest, and an Event Card to handle walk-in volunteers and group registrations. We iterated, adding a pop-up modal for trash weight input that allowed admins to attach photos for verification and update data as needed. Usability testing was conducted with real admins using Figma prototypes across the platform's main features.",
      solution: "A full Figma prototype of a two-sided volunteer management platform. The admin dashboard included volunteer check-in with search, trash weight data input with photo verification via a modal, party size and guest management, and event cards for organizing cleanups. The volunteer side handled registration and profile management. The prototype was accepted by the client and handed off to developers for implementation.",
      outcome: "The platform reduced admin time on task by 70%, eliminating the slow manual paper process entirely. It connected 4,000 volunteers to admins across beach cleanup events and replaced error-prone Excel transcription with a database-driven system. The prototype was accepted by Stand Up to Trash and delivered for development — a real product shipped for a real nonprofit making a real environmental impact.",
    },
    figmaLink: "https://www.figma.com/proto/7DJkxfrm9LYiX336gzjKdI/Final-Designs-%26-Prototype?page-id=0%3A1&node-id=14-8450&p=f&viewport=-24%2C906%2C0.06&t=EousxkfTbxL2hbnm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A8450&show-proto-sidebar=1",
    externalLink: "https://www.standuptotrash.com/",
  },
];


export const experience = [
  {
    company: "Insight Global | Exponent",
    role: "Research Operations Assistant",
    period: "Apr 2026 - Present",
    description: "Coordinating end-to-end logistics for research materials, ensuring accurate and timely delivery across multiple locations.",
  },
  {
    company: "Tata Elxsi",
    role: "Moderator",
    period: "Oct 2025 — Dec 2025",
    description: "Conduct and moderate behavioral research sessions to support pre-market product validation, collecting qualitative and quantitative data to inform design and business decisions under strict NDA and regulatory constraints.",
  },
  {
    company: "America On Tech",
    role: "UX Design Instructor",
    period: "Jan 2025 — May 2025",
    description: "Led instruction for 30+ students in user research, systems design, and interface prototyping, resulting in 95% of students delivering functional digital products.",
  },
  {
    company: "URBAN Teens Exploring Technology",
    role: "Design Lead & Program Coordinator",
    period: "Oct 2022 — May 2025",
    description: "Managed and coordinated 10 cross-functional student teams through the full product development lifecycle, from user research to MVP delivery, ensuring milestone completion and quality standards.",
  },
   {
    company: "Commit The Change at UC IRVINE",
    role: "UX Design Lead",
    period: "Jun 2023 — Jun 2024",
    description: "Led a cross-functional team of 4 designers to build a volunteer management system serving 4,000+ users, supporting large-scale coordination between volunteers and administrators.",
  },
   {
    company: "Social and Technological Action Research Lab at UC IRVINE",
    role: "Research Assistant",
    period: "Dec 2022 — Jun 2023",
    description: "Conducted co-design and behavioral research sessions with 20+ participants to explore technology solutions for noise-sensitivity and sensory experience challenges.",
  },
];
