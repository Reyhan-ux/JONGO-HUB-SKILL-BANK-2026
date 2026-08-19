import softwaregif from '../assets/software.gif';
import graphicdesigngif from '../assets/graphic-designer.gif';
import databasegif from '../assets/database.gif';
import artifisialintelligencegif from '../assets/artificial-intelligence.gif';
import systemgif from '../assets/system.gif';

export const tickerPhrases = [
  "AI JOB MATCHING",
  "PROOF OF WORK PORTFOLIO",
  "DIGITAL CREDENTIALS",
  "SOCIAL NETWORKING",
  "JOB MATCH SCORES",
  "TAMPER-PROOF CERTIFICATES"
];

export const howItWorksSteps = [
  {
    stepNumber: 1,
    category: "Graduates",
    title: "For Reactor Graduates",
    description: "Graduates build a verified showcase profile, complete capstone review with mentors, unlock credentialed badges, and become discoverable to partner employers.",
    benefit: "Mentor-Audited Capstones & Tamper-Proof Credentials",
    theme: "dark"
  },
  {
    stepNumber: 2,
    category: "Mentors",
    title: "For Mentors & Auditors",
    description: "Senior mentors track assigned cohorts, audit capstone repositories, and submit formal review reports that unlock graduate verification.",
    benefit: "Cryptographic Verification & Proof-of-Work Standards",
    theme: "yellow"
  },
  {
    stepNumber: 3,
    category: "Employers",
    title: "For Partner Employers",
    description: "Employers browse verified Reactor graduate profiles, post roles exclusively for graduates, and shortlist candidates backed by 4-vector AI match scoring.",
    benefit: "Direct WhatsApp Outreach & Zero LMS Noise",
    theme: "dark"
  }
];

export const whyChooseUsFeatures = [
  {
    title: "Industry-Reviewed Code",
    description: "All capstone projects receive a senior mentor audit and a formal approval before issuing verified credentials.",
    highlight: true
  },
  {
    title: "Secure Digital Certificates",
    description: "Instantly verifiable certificates that can’t be faked or altered."
  },
  {
    title: "AI Compatibility Matching",
    description: "Matches developer profiles to employer requirements using a dynamic skills and culture scoring model."
  },
  {
    title: "Real-Time Graduate Matching",
    description: "Quickly surface the best Reactor graduates with live matching and instant availability signals."
  }
];

export const engineeringTracks = [
  {
    id: "track-1",
    category: "Product",
    title: "Full Stack Web",
    description: "Build fast, resilient web platforms backed by React, Node, TypeScript and scalable API delivery.",
    tags: ["React", "TypeScript", "API"],
    icon: softwaregif,
    ctaText: "VIEW FULL STACK GRADUATES",
    theme: "dark"
  },
  {
    id: "track-2",
    category: "Systems",
    title: "Systems & Go",
    description: "Ship reliable infrastructure with Go microservices, caching, gRPC, and container-native workflows.",
    tags: ["Go", "Docker", "gRPC"],
    icon: systemgif,
    ctaText: "VIEW SYSTEMS GRADUATES",
    theme: "yellow"
  },
  {
    id: "track-3",
    category: "Cloud",
    title: "Cloud & DevOps",
    description: "Deploy secure, scalable operations with AWS, Kubernetes, CI/CD automation, and audit-ready pipelines.",
    tags: ["Kubernetes", "CI/CD", "AWS"],
    icon: databasegif,
    ctaText: "VIEW CLOUD & DEVOPS GRADUATES",
    theme: "dark"
  },
  {
    id: "track-4",
    category: "Mobile",
    title: "Mobile Engineering",
    description: "Ship polished mobile experiences using React Native, Flutter and modern payment or fintech integrations.",
    tags: ["React Native", "Flutter", "Mobile UX"],
    icon: artifisialintelligencegif,
    ctaText: "VIEW MOBILE GRADUATES",
    theme: "yellow"
  },
  {
    id: "track-5",
    category: "Creative",
    title: "Graphic Design",
    description: "Develop bold brand systems, UI assets and visual campaigns tailored for premium African tech experiences.",
    tags: ["Brand", "UI/UX", "Assets"],
    icon: graphicdesigngif,
    ctaText: "VIEW DESIGN GRADUATES",
    theme: "dark"
  }
];

export const faqs = [
  {
    q: "How does Jongo Hub verify developer skills?",
    a: "All Jongo Hub Reactor graduates undergo rigorous capstone project code reviews and repository audits by senior engineers before receiving their official verified badge."
  },
  {
    q: "What are Cryptographic QR Digital Credentials?",
    a: "Each verified graduate is issued a tamper-proof digital certificate with a unique security hash and QR code, allowing employers to instantly verify authenticity online."
  },
  {
    q: "How does the AI Compatibility Match Engine work?",
    a: "The match engine calculates a dynamic 4-vector score comparing technical skills, work setup, soft skills, and project domain requirements between graduates and employer job specs."
  },
  {
    q: "Who can join the Skill Bank platform?",
    a: "Skill Bank is an internal Jongo Hub company system. Only Reactor graduates, assigned mentors, vetted partner employers, and platform administrators have access. External developers are not part of the platform."
  }
];
