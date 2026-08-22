# Jongo Hub Reactor Skill Bank - Re-evaluated Operational Workflows

## Core Product Philosophy
1. **No Permanent Performance Penalty**: We do NOT display historical bootcamp test scores or arbitrary grades that penalize growing developers.
2. **Presumption of Capability**: All Jongo Hub graduates are assumed to be competent in the skills they claim, backed by Jongo Hub's reputation and **Digital Credentials**.
3. **Match Score = Job Compatibility**: Scores on the platform are dynamic **Job Fit Match Percentages** (comparing candidate skill stack vs employer job specs), NOT static academic grades.
4. **Proof of Work over Grades**: Employers evaluate candidates based on **Verified Capstone Projects, GitHub Repos, Live Demos, and Digital Certificates**.

---

## 1. Re-evaluated Admin & Coach Workflows

### Workflow 1.1: Graduate Profile Onboarding & Verification
```
[ Student Completes Jongo Hub Reactor Program ]
                         |
                         v
[ Admin / Coach Reviews Capstone Project & Code Repositories ]
                         |
                         v
[ Admin Endorses Candidate's Verified Skills ]
                         |
                         v
[ Admin Clicks "Issue Digital Credential" ]
                         |
                         +--> Sets verificationBadge = true
                         +--> Assigns status = "Verified_Graduate"
                         +--> Generates unique credentialCode & qrCodeUrl
                         +--> Candidate Profile Live on Marketplace
```

### Workflow 1.2: External Developer Verification Pathway
```
[ External Developer Registers & Adds Portfolio Projects ]
                         |
                         v
[ Developer Requests Jongo Hub Skill Verification ]
                         |
                         v
[ Admin / Coach Reviews Projects & Code Quality ]
                         |
                         v
[ If Approved: Flips verificationStatus to "Verified_Community_Developer" ]
```

---

## 2. Employer Matching & Hiring Workflow

1. **Employer Posts Job / Internship**: Specifies required technical skills, soft skills, location, and work setup.
2. **Job Match Engine Ranks Fit**: Calculates real-time **Compatibility Percentage** (e.g. *95% Fit*) based on candidate skill stack vs job specs.
3. **Employer Inspects Proof of Work**: Reviews candidate capstone demos, GitHub code, and verifies digital credentials.
4. **Direct Outreach**: Employer contacts talent via Email or WhatsApp for interviews.
5. **Placement Confirmation**: Candidate status updates to `Placed / Hired`.
