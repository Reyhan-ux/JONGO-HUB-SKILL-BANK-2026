/** Reactor graduates showcased on the platform — no external developers */

const generateGraduates = (count) => {
  const graduates = [];
  const tracks = ["Full Stack Web & Cloud Engineering", "Systems & Go Engineering", "Cloud & DevOps", "Mobile Engineering", "Graphic Design"];
  const skills = ["React", "Node.js", "PostgreSQL", "TypeScript", "TailwindCSS", "Docker", "Go", "Python", "Redis", "Kubernetes", "AWS", "Azure", "Figma", "Photoshop"];
  const softSkills = ["Problem Solving", "Team Leadership", "Agile/Scrum", "Communication", "Critical Thinking", "Code Audit", "Project Management"];
  const photos = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1520341907106-96b42b99d0e2?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1499952127978-ac219b251a2d?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488426862942-88292f1f0a28?w=400&auto=format&fit=crop&q=80",
  ];
  const locations = ["Buea, Cameroon", "Douala, Cameroon", "Lagos, Nigeria", "Accra, Ghana", "Nairobi, Kenya", "Dakar, Senegal"];
  const availabilityOptions = ["Immediate (Full-time / Remote)", "Available in 2 Weeks", "Seeking Internship", "Open to Contract"];
  const cohorts = ["2026-A", "2026-B", "2025-C"];

  for (let i = 1; i <= count; i++) {
    const id = `GRAD-${String(i).padStart(3, '0')}`;
    const fullName = `Graduate Name ${i}`;
    const title = ["Full Stack Engineer", "Backend & Systems Engineer", "Frontend Developer", "Cloud Engineer", "UI/UX Designer"][Math.floor(Math.random() * 5)];
    const reactorCohort = cohorts[Math.floor(Math.random() * cohorts.length)];
    const reactorTrack = tracks[Math.floor(Math.random() * tracks.length)];
    const verificationBadge = Math.random() > 0.3; // 70% verified
    const verificationStatus = verificationBadge ? "Verified_Graduate" : "Pending_Capstone_Review";
    const photo = photos[Math.floor(Math.random() * photos.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const availability = availabilityOptions[Math.floor(Math.random() * availabilityOptions.length)];
    const email = `graduate${i}@jongohub.org`;
    const mentorId = Math.random() > 0.5 ? "MNT-001" : "MNT-002";

    const numSkills = Math.floor(Math.random() * 4) + 3; // 3 to 6 skills
    const verifiedSkills = [...new Set(Array(numSkills).fill().map(() => skills[Math.floor(Math.random() * skills.length)]))];

    const numSoftSkills = Math.floor(Math.random() * 3) + 2; // 2 to 4 soft skills
    const graduateSoftSkills = [...new Set(Array(numSoftSkills).fill().map(() => softSkills[Math.floor(Math.random() * softSkills.length)]))];

    const matchScore = Math.floor(Math.random() * 30) + 70; // 70-99
    const completionYear = String(2024 + Math.floor(Math.random() * 3)); // 2024, 2025, 2026

    graduates.push({
      id,
      fullName,
      title,
      reactorCohort,
      reactorTrack,
      verificationBadge,
      verificationStatus,
      assignedMentorId: mentorId,
      photo,
      location,
      availability,
      bio: `Passionate ${title.toLowerCase()} from Jongo Hub Reactor. Specialized in ${verifiedSkills.slice(0, 2).join(', ')}.`,
      contact: {
        email,
        phone: `+237 6${Math.floor(10000000 + Math.random() * 90000000)}`,
        whatsapp: `+2376${Math.floor(10000000 + Math.random() * 90000000)}`,
        linkedin: `https://linkedin.com/in/${fullName.toLowerCase().replace(/\s/g, '-')}`,
        github: `https://github.com/${fullName.toLowerCase().replace(/\s/g, '-')}`,
        portfolio: `https://${fullName.toLowerCase().replace(/\s/g, '-')}.dev`
      },
      languages: ["English", Math.random() > 0.5 ? "French" : "Swahili"],
      verifiedSkills,
      softSkills: graduateSoftSkills,
      matchScore,
      matchBreakdown: {
        technicalSkillFit: Math.floor(Math.random() * 20) + 80,
        workSetupFit: Math.floor(Math.random() * 20) + 80,
        softSkillFit: Math.floor(Math.random() * 20) + 70,
        projectDomainFit: Math.floor(Math.random() * 20) + 75
      },
      bootcampsCompleted: [
        { trackName: reactorTrack, completionYear }
      ],
      certifications: verificationBadge ? [{
        title: "Jongo Hub Reactor Certified Developer",
        credentialCode: `JHR-${completionYear}-${Math.floor(1000 + Math.random() * 9000)}`,
        issueDate: `${completionYear}-06-15`,
        verificationUrl: `/verify/JHR-${completionYear}-${Math.floor(1000 + Math.random() * 9000)}`
      }] : [],
      projects: [
        {
          title: `Project ${i}: ${title} Capstone`,
          description: `Built a scalable application using ${verifiedSkills[0]} and ${verifiedSkills[1]}.`,
          techStack: verifiedSkills.slice(0, 3),
          demoUrl: `https://project${i}.dev`,
          githubUrl: `https://github.com/${fullName.toLowerCase().replace(/\s/g, '-')}/project${i}`,
          role: "Lead Developer",
          impact: `Improved performance by ${Math.floor(Math.random() * 30) + 15}%`
        }
      ]
    });
  }
  return graduates;
};

export const mockGraduates = generateGraduates(50); // Generate 50 mock graduates

/** @deprecated Use mockGraduates — kept for gradual migration */
export const mockTalents = mockGraduates;

export const mockMentors = [
  {
    id: "MNT-001",
    fullName: "Dr. Ngozi Adeyemi",
    title: "Senior Engineering Mentor",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    email: "ngozi.adeyemi@jongohub.org",
    assignedCohort: "2026-A",
    assignedGraduateIds: mockGraduates.filter(g => g.assignedMentorId === "MNT-001").map(g => g.id),
    specialties: ["Full Stack", "Systems Design", "Capstone Audits"],
    checkInsThisWeek: 4,
    pendingReviews: 1
  },
  {
    id: "MNT-002",
    fullName: "James Okonkwo",
    title: "Cloud & DevOps Mentor",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    email: "james.okonkwo@jongohub.org",
    assignedCohort: "2026-B",
    assignedGraduateIds: mockGraduates.filter(g => g.assignedMentorId === "MNT-002").map(g => g.id),
    specialties: ["AWS", "Kubernetes", "CI/CD"],
    checkInsThisWeek: 2,
    pendingReviews: 0
  }
];

const generateJobs = (count) => {
  const jobs = [];
  const titles = ["Senior React & Fullstack Developer", "Junior Frontend Engineer (Graduate Cohort)", "Backend Go Engineer", "Cloud DevOps Specialist", "Mobile App Developer", "UI/UX Designer"];
  const companyNames = ["AfriTech Solutions", "Jongo Incubator Labs", "Tech Africa Inc.", "Global Connect", "Innovate Africa", "Digital Future"];
  const locations = ["Lagos, Nigeria (Remote)", "Buea, Cameroon", "Accra, Ghana (Hybrid)", "Nairobi, Kenya", "Remote (Africa)"];
  const employmentTypes = ["Full-time", "Internship", "Contract"];
  const workSetups = ["Remote", "Hybrid", "On-site"];
  const technicalSkills = ["React", "Node.js", "TypeScript", "PostgreSQL", "Go", "Python", "Kubernetes", "AWS", "Figma", "Swift", "Kotlin"];
  const softSkills = ["Agile/Scrum", "Communication", "Problem Solving", "Teamwork", "Leadership"];
  const today = new Date();

  for (let i = 1; i <= count; i++) {
    const id = `JOB-${String(500 + i).padStart(3, '0')}`;
    const title = titles[Math.floor(Math.random() * titles.length)];
    const companyName = companyNames[Math.floor(Math.random() * companyNames.length)];
    const companyId = `EMP-${String(100 + Math.floor(Math.random() * 3)).padStart(3, '0')}`; // EMP-101, EMP-102, EMP-103
    const location = locations[Math.floor(Math.random() * locations.length)];
    const employmentType = employmentTypes[Math.floor(Math.random() * employmentTypes.length)];
    const workSetup = workSetups[Math.floor(Math.random() * workSetups.length)];
    const targetAudience = Math.random() > 0.5 ? "Reactor_Graduates_Only" : "All_Applicants";

    const numTechSkills = Math.floor(Math.random() * 3) + 2; // 2 to 4 skills
    const requiredTechnicalSkills = [...new Set(Array(numTechSkills).fill().map(() => technicalSkills[Math.floor(Math.random() * technicalSkills.length)]))];

    const numSoftSkills = Math.floor(Math.random() * 2) + 1; // 1 to 2 soft skills
    const requiredSoftSkills = [...new Set(Array(numSoftSkills).fill().map(() => softSkills[Math.floor(Math.random() * softSkills.length)]))];

    const postedDate = new Date(today.setDate(today.getDate() - Math.floor(Math.random() * 30))).toISOString().split('T')[0]; // Random date within last 30 days

    jobs.push({
      id,
      title,
      companyName,
      companyId,
      location,
      employmentType,
      workSetup,
      targetAudience,
      requiredTechnicalSkills,
      requiredSoftSkills,
      postedDate,
      description: `Join our innovative team as a ${title}. We're looking for passionate individuals experienced in ${requiredTechnicalSkills.slice(0,2).join(', ')}.`,
      status: "Active"
    });
  }
  return jobs;
};

export const mockJobs = generateJobs(30); // Generate 30 mock jobs

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
    hiredGraduatesCount: 8
  }
];

export const mockCertificates = [
  {
    credentialCode: "JHR-2026-8942",
    studentId: "GRAD-001",
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

export const REACTOR_TRACKS = [
  "All Tracks",
  "Full Stack Web & Cloud Engineering",
  "Systems & Go Engineering",
  "Cloud & DevOps",
  "Mobile Engineering",
  "Graphic Design"
];
