# Summary of Platform Blueprint & Decisions - Jongo Hub Reactor Skill Bank

### 1. Product Positioning & Scope
* **Andela / Toptal-Grade Talent Platform**: Built for Jongo Hub Reactor graduates and African developers, balancing high-end polish with practical utility.
* **No LMS Bloat**: Attendance tracking and daily exam grading are kept offline. The Skill Bank is strictly focused on **Profiles, Proof of Work, Verification, Job Matching, and Digital Credentials**.

### 2. Dual Talent Architecture
* **Category 1: Jongo Hub Reactor Graduates**
  - Registered & verified by Jongo Hub.
  - Possesses the official Jongo Hub **Verification Badge** (`verificationBadge = true`) and tamper-proof **Digital Credentials**.
* **Category 2: External Developers / Open Community**
  - Public self-service signup.
  - Can build profiles, upload CVs, add portfolio projects, and apply to open job postings.
  - **Upgrade Pathway**: Can request a Jongo Hub verification audit to earn a verified badge!

### 3. Job-Fit Matching & Proof-of-Work Philosophy
* **No Punitive Academic Grades**: We eliminated static test marks that permanently penalize growing developers.
* **Presumption of Capability**: Graduates are assumed competent in their claimed skills, backed by real capstone project demos and GitHub repos.
* **Match Score = Job Fit**: Scores (e.g. **95% Compatibility**) dynamically calculate how closely a candidate's current skill stack matches an employer's specific job specs (*Tech Skills, Work Setup, Soft Skills*).

### 4. Core System Artifacts Created
1. **[data schema](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/data%20schema)**: Pure structural specification for `TalentProfileSchema`, `EmployerModelSchema`, `JobOfferModelSchema`, and `DigitalCredentialModelSchema`.
2. **[workflows.md](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/workflows.md)**: Operational data flow for Admin verification, External signup, Certificate issuance, and Employer hiring.
