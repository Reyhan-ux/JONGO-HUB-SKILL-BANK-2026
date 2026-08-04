export const mockTalents = [
  {
    id: "TAL-001",
    fullName: "Amina Osei",
    title: "Full Stack Engineer",
    talentCategory: "JongoHub_Reactor_Graduate",
    verificationBadge: true,
    verificationStatus: "Verified_Graduate",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    location: "Buea, Cameroon",
    availability: "Immediate (Full-time / Remote)",
    bio: "Passionate full-stack developer with expertise in React, Node.js, and PostgreSQL. Built scalable capstone projects during Jongo Hub Reactor cohort.",
    contact: {
      email: "amina.osei@jongohub.org",
      phone: "+237 670 123 456",
      whatsapp: "+237670123456",
      linkedin: "https://linkedin.com/in/amina-osei",
      github: "https://github.com/amina-osei",
      portfolio: "https://aminaosei.dev"
    },
    languages: ["English", "French"],
    verifiedSkills: ["React", "Node.js", "PostgreSQL", "TypeScript", "TailwindCSS", "Docker"],
    softSkills: ["Problem Solving", "Team Leadership", "Agile/Scrum", "Communication"],
    matchScore: 96,
    matchBreakdown: {
      technicalSkillFit: 98,
      workSetupFit: 100,
      softSkillFit: 90,
      projectDomainFit: 95
    },
    bootcampsCompleted: [
      { trackName: "Full Stack Web & Cloud Engineering", completionYear: "2026" }
    ],
    certifications: [
      {
        title: "Jongo Hub Reactor Certified Developer",
        credentialCode: "JHR-2026-8942",
        issueDate: "2026-06-15",
        verificationUrl: "/verify/JHR-2026-8942"
      }
    ],
    projects: [
      {
        title: "Skill Bank Marketplace Engine",
        description: "AI-assisted developer compatibility and digital credential verification engine.",
        techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
        demoUrl: "https://skillbank-demo.org",
        githubUrl: "https://github.com/amina-osei/skillbank",
        role: "Lead Frontend & API Architect",
        impact: "Reduced candidate matching latency by 45%"
      }
    ]
  },
  {
    id: "TAL-002",
    fullName: "David Kamau",
    title: "Backend & Systems Specialist",
    talentCategory: "External_Developer",
    verificationBadge: false,
    verificationStatus: "Unverified_Community_Member",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    location: "Nairobi, Kenya",
    availability: "Available in 2 Weeks",
    bio: "Systems programmer specializing in Go, Python, and distributed microservices architecture.",
    contact: {
      email: "david.kamau@dev.io",
      phone: "+254 712 345 678",
      whatsapp: "+254712345678",
      linkedin: "https://linkedin.com/in/davidkamau",
      github: "https://github.com/davidkamau",
      portfolio: "https://davidkamau.io"
    },
    languages: ["English", "Swahili"],
    verifiedSkills: ["Go", "Python", "Redis", "Docker", "Kubernetes", "PostgreSQL"],
    softSkills: ["System Design", "Critical Thinking", "Code Audit"],
    matchScore: 88,
    matchBreakdown: {
      technicalSkillFit: 92,
      workSetupFit: 85,
      softSkillFit: 85,
      projectDomainFit: 90
    },
    bootcampsCompleted: [],
    certifications: [],
    projects: [
      {
        title: "Micro-payment Gateway Proxy",
        description: "High throughput transaction broker for mobile money integration.",
        techStack: ["Go", "Redis", "PostgreSQL"],
        demoUrl: "https://payproxy.dev",
        githubUrl: "https://github.com/davidkamau/payproxy",
        role: "Sole Backend Developer",
        impact: "Handled 10,000+ daily mock transactions cleanly"
      }
    ]
  }
];

export const mockJobs = [
  {
    id: "JOB-501",
    title: "Senior React & Fullstack Developer",
    companyName: "AfriTech Solutions",
    companyId: "EMP-101",
    location: "Lagos, Nigeria (Remote)",
    employmentType: "Full-time",
    workSetup: "Remote",
    targetTalentCategory: "All_Talents",
    requiredTechnicalSkills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    requiredSoftSkills: ["Agile/Scrum", "Communication"],
    postedDate: "2026-07-20",
    description: "Building next-generation fintech infrastructure for emerging markets across West & Central Africa.",
    status: "Active"
  },
  {
    id: "JOB-502",
    title: "Junior Frontend Engineer (Graduate Cohort)",
    companyName: "Jongo Incubator Labs",
    companyId: "EMP-102",
    location: "Buea, Cameroon",
    employmentType: "Internship",
    workSetup: "Hybrid",
    targetTalentCategory: "JongoHub_Graduates_Only",
    requiredTechnicalSkills: ["React", "TailwindCSS", "TypeScript"],
    requiredSoftSkills: ["Problem Solving"],
    postedDate: "2026-07-25",
    description: "Exclusive opportunity for recent Jongo Hub Reactor graduates to join our product acceleration team.",
    status: "Active"
  }
];

export const mockEmployers = [
  {
    id: "EMP-101",
    companyName: "AfriTech Solutions",
    industry: "Financial Technology",
    location: "Lagos, Nigeria",
    website: "https://afritech.io",
    verifiedStatus: true,
    contactPerson: "Dr. Charles Nkwain",
    contactTitle: "VP of Engineering",
    email: "hr@afritech.io",
    phone: "+234 801 234 5678",
    openRolesCount: 3,
    hiredInternsCount: 8
  }
];

export const mockCertificates = [
  {
    credentialCode: "JHR-2026-8942",
    studentId: "TAL-001",
    studentName: "Amina Osei",
    programTrack: "Jongo Hub Reactor - Software Engineering",
    issueDate: "2026-06-15",
    issuer: "Jongo Hub Academic & Engineering Board",
    verificationStatus: "Valid",
    verificationUrl: "https://skillbank.jongohub.org/verify/JHR-2026-8942",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=JHR-2026-8942",
    securityHash: "0x8f9e12ab7c43d99e01f56a"
  }
];
