# Jongo Hub Reactor Skill Bank - 3-Week Master Implementation Roadmap

A 15-working-day (3-week) execution plan organized into **3 Sprints (~5 Trello tasks per day = 75 total tasks)** for team collaboration, Git version control, and Discord team alignment.

---

## 🛠️ Team Collaboration & Infrastructure Setup

### 📋 Trello Board Setup
Set up your Trello board with the following columns:
1. `📁 Backlog`
2. `⏳ To Do (Today)`
3. `⚙️ In Progress`
4. `👀 Code Review / PR`
5. `✅ Done`

### 🌿 Git Branching Strategy
* `main`: Production-ready code (Protected).
* `develop`: Staging branch for integration.
* `feature/<task-id>-description`: Feature branches (e.g. `feature/W1D1-T3-css-tokens`).
* **PR Rule**: At least 1 peer code review on Discord before merging into `develop`.

### 💬 Discord Channels Setup
* `#📢-announcements`: Major milestone releases.
* `#☕-daily-standup`: Async daily updates (What I did yesterday, what I'm doing today, blockers).
* `#🔀-pr-reviews`: Post GitHub PR links for team review.
* `#💻-dev-frontend`: UI/UX & design system discussions.
* `#⚡-dev-backend`: API, database, and logic discussions.

---

## 📅 WEEK 1: Core Foundation & Talent Profile Infrastructure (Days 1 – 5)

### 🗓️ DAY 1: Project Initialization & Design System Setup
* **Task 1.1 (DevOps)**: Initialize Git repository, configure `.gitignore`, `README.md`, and GitHub branch protection rules for `main` and `develop`.
* **Task 1.2 (Architecture)**: Set up project folder architecture (`/frontend`, `/backend`, `/database`, `/docs`).
* **Task 1.3 (Frontend)**: Configure CSS Design System (`styles.css`) with obsidian dark palette (`#0B0F19`), African Emerald (`#10B981`), Amber Gold (`#F59E0B`), glassmorphism UI classes, and typography tokens (Plus Jakarta Sans & Inter).
* **Task 1.4 (Frontend)**: Create application shell layout (`index.html`) with header, top navbar, mobile menu drawer, and view container placeholders.
* **Task 1.5 (Team)**: Set up Trello board columns and post Week 1 kickoff message in Discord `#announcements`.

### 🗓️ DAY 2: Core Database Schemas & Migrations
* **Task 2.1 (Backend)**: Implement `TalentProfile` database model according to `data schema` spec (Dual categories: `JongoHub_Reactor_Graduate` vs `External_Developer`).
* **Task 2.2 (Backend)**: Implement `EmployerModel` and `JobOfferModel` database schemas.
* **Task 2.3 (Backend)**: Implement `DigitalCredentialModel` schema (Credential codes, security hash, verification status).
* **Task 2.4 (Database)**: Write database migration scripts and initial seed data script for development testing.
* **Task 2.5 (DevOps)**: Verify local database connection and push backend structure to Git branch `feature/W1D2-db-schemas`.

### 🗓️ DAY 3: Authentication & Role-Based Access Control (RBAC)
* **Task 3.1 (Backend)**: Implement User Authentication API (`POST /api/auth/register`, `POST /api/auth/login`) using JWT tokens.
* **Task 3.2 (Backend)**: Implement Role-Based Access Control middleware (`Admin`, `Coach`, `Talent`, `Employer`).
* **Task 3.3 (Frontend)**: Build Login & Registration Modal UI with dual category signup option (*Reactor Graduate vs External Developer*).
* **Task 3.4 (Frontend)**: Implement client-side session management (JWT storage, state preservation, protected routes).
* **Task 3.5 (Testing)**: Test Auth API using Postman/REST client and submit PR link in Discord `#pr-reviews`.

### 🗓️ DAY 4: Talent Profile Editor & Contact System
* **Task 4.1 (Frontend)**: Build Talent Profile Editor UI (Bio, location, work availability, spoken languages).
* **Task 4.2 (Frontend)**: Implement Contact Info drawer (`email`, `phone`, `whatsapp`, `linkedin`, `github`, `portfolio`).
* **Task 4.3 (Backend)**: Implement Talent Profile CRUD API endpoints (`GET /api/talents/:id`, `PUT /api/talents/:id`).
* **Task 4.4 (Frontend)**: Build Verified Skill Tag selector (Categorized hard & soft skills).
* **Task 4.5 (Testing)**: Verify profile updates persist correctly in database and submit PR.

### 🗓️ DAY 5: Proof-of-Work & Portfolio Showcase
* **Task 5.1 (Frontend)**: Build Proof-of-Work Capstone Component (Title, description, tech stack tags, role played, quantifiable impact).
* **Task 5.2 (Frontend)**: Build Live Demo & GitHub link preview cards.
* **Task 5.3 (Backend)**: Implement Portfolio CRUD API (`POST /api/talents/:id/projects`, `DELETE /api/talents/:id/projects/:projId`).
* **Task 5.4 (Frontend)**: Add project media/screenshot upload interface.
* **Task 5.5 (Sprint Review)**: Conduct Week 1 demo on Discord, merge `feature/*` branches into `develop`, and update Trello cards.

---

## 📅 WEEK 2: Intelligence, Marketplace & Operations (Days 6 – 10)

### 🗓️ DAY 6: AI Job Match Engine & Compatibility Scoring
* **Task 6.1 (Backend)**: Implement 4-vector Compatibility Algorithm (`TechnicalSkillsScore`, `WorkSetupScore`, `SoftSkillsScore`, `ProjectDomainScore`).
* **Task 6.2 (Backend)**: Build Match API endpoint (`POST /api/match/candidates`) to calculate real-time percentage fit.
* **Task 6.3 (Frontend)**: Build Match Score Badge component (e.g. `95% Compatibility`) displaying transparent fit breakdown on candidate cards.
* **Task 6.4 (Frontend)**: Implement Talent Directory Search & Filter bar (Filter by technical skill, location, work setup, verification badge).
* **Task 6.5 (Testing)**: Test Match Engine against sample job specs and post demo screenshot in Discord.

### 🗓️ DAY 7: Employer Workspace & Job Marketplace
* **Task 7.1 (Frontend)**: Build Employer Workspace UI (Company profile, logo, industry, contact person).
* **Task 7.2 (Frontend)**: Build Job Posting Form with Target Audience filter (*Jongo Hub Graduates Only* vs *Open to All Talents*).
* **Task 7.3 (Backend)**: Implement Job Offer API endpoints (`POST /api/jobs`, `GET /api/jobs`, `GET /api/jobs/:id/applicants`).
* **Task 7.4 (Frontend)**: Build Candidate Shortlist & Applicant Management tab for employers.
* **Task 7.5 (Frontend)**: Implement Direct Outreach actions (*"Request Interview"*, *"Contact via WhatsApp"* drawer).

### 🗓️ DAY 8: Digital Credential & Cryptographic Generator
* **Task 8.1 (Backend)**: Build Credential Generator Service (Assigns cryptographic `credentialCode`, computes `securityHash`).
* **Task 8.2 (Backend)**: Implement QR Code generation service using credential verification URL.
* **Task 8.3 (Backend)**: Implement Public Verification API endpoint (`GET /api/verify/:credentialCode`).
* **Task 8.4 (Frontend)**: Build Public Certificate Verification Page (Renders official Jongo Hub stamp, graduate details, verification status).
* **Task 8.5 (Testing)**: Scan test QR code on mobile device to verify end-to-end redirection.

### 🗓️ DAY 9: Admin Audit & Verification Operations
* **Task 9.1 (Frontend)**: Build Admin Dashboard UI (Graduate registration queue, verification requests).
* **Task 9.2 (Frontend)**: Build One-Click Certificate Issuance Interface (Audits capstone link $\rightarrow$ flips `verificationBadge = true` $\rightarrow$ issues credential).
* **Task 9.3 (Frontend)**: Build External Developer Verification Queue (Review project portfolio, assign assessment, upgrade badge).
* **Task 9.4 (Backend)**: Implement Admin Audit API endpoints (`POST /api/admin/verify-talent`, `POST /api/admin/issue-certificate`).
* **Task 9.5 (Backend)**: Implement Employer Vetting API (`PUT /api/admin/employers/:id/verify`).

### 🗓️ DAY 10: Candidate Dashboard & Application Tracker
* **Task 10.1 (Frontend)**: Build Talent Dashboard View (Recommended jobs based on match score, active applications).
* **Task 10.2 (Frontend)**: Build Certificate Viewer & Printable PDF export modal for graduates.
* **Task 10.3 (Backend)**: Implement Application Tracking API (`POST /api/applications`, `GET /api/talents/:id/applications`).
* **Task 10.4 (Frontend)**: Implement Candidate Notification Preferences (Email & WhatsApp alerts).
* **Task 10.5 (Sprint Review)**: Conduct Week 2 demo on Discord, merge feature branches into `develop`, and update Trello.

---

## 📅 WEEK 3: Communication, Refinement, QA & Launch (Days 11 – 15)

### 🗓️ DAY 11: Communication & Messaging Integration
* **Task 11.1 (Backend)**: Implement Automated Email Notifications (SendGrid / Nodemailer for signup, certificate issuance, interview requests).
* **Task 11.2 (Backend)**: Integrate WhatsApp Web API deep-link generator for direct employer-talent communication.
* **Task 11.3 (Frontend)**: Build In-App Notification Bell & Alert Drawer.
* **Task 11.4 (Frontend)**: Build Interview Scheduling Modal (Select date/time, add Google Meet/Zoom link).
* **Task 11.5 (Testing)**: Conduct end-to-end communication test between candidate and employer profiles.

### 🗓️ DAY 12: UI/UX Refinement & Polish
* **Task 12.1 (Frontend)**: Audit UI responsiveness across Mobile (iOS/Android), Tablet, and Desktop screens.
* **Task 12.2 (Frontend)**: Implement micro-animations (Hover glow effects, smooth card transitions, match meter animations).
* **Task 12.3 (Frontend)**: Enhance empty states, skeleton loading spinners, and toast notification alerts.
* **Task 12.4 (Frontend)**: Optimize Google Fonts loading (Plus Jakarta Sans & Inter) and asset caching.
* **Task 12.5 (Design Review)**: Conduct visual QA check and log remaining UX tweaks on Trello.

### 🗓️ DAY 13: Security Hardening & Performance Optimization
* **Task 13.1 (Security)**: Conduct Security Audit (Enforce HTTPS, CORS restrictions, Rate Limiting on API routes, XSS/SQLi sanitization).
* **Task 13.2 (Backend)**: Optimize database queries and add indexing on searched fields (`technicalSkills`, `location`, `verificationStatus`).
* **Task 13.3 (Security)**: Secure API environment variables (`JWT_SECRET`, `DB_URL`, `WHATSAPP_API_KEY`).
* **Task 13.4 (Performance)**: Test bundle size and page load times (<1.5s target).
* **Task 13.5 (Testing)**: Run security regression tests and push fixes to `develop`.

### 🗓️ DAY 14: End-to-End QA Testing & CI/CD Pipeline
* **Task 14.1 (DevOps)**: Dockerize Application (`Dockerfile`, `docker-compose.yml` for Frontend, Backend, Database).
* **Task 14.2 (QA)**: Perform full E2E user flow tests across all 4 user roles (Talent, Employer, Coach, Admin).
* **Task 14.3 (DevOps)**: Configure CI/CD pipeline (GitHub Actions for automated build, linting, and tests on PR to `main`).
* **Task 14.4 (QA)**: Verify Public QR Verification page on multiple external devices.
* **Task 14.5 (DevOps)**: Merge `develop` into `main` and tag release `v1.0.0-rc1`.

### 🗓️ DAY 15: Final Deployment, Documentation & Launch
* **Task 15.1 (DevOps)**: Deploy Production Application to cloud server (AWS / Azure / Vercel / Render).
* **Task 15.2 (Docs)**: Finalize System Documentation, API Specs, and setup guide in `README.md`.
* **Task 15.3 (Admin)**: Seed production database with initial verified Jongo Hub Reactor graduate profiles and certificates.
* **Task 15.4 (Team)**: Host live launch presentation on Discord with team members and stakeholders.
* **Task 15.5 (Team)**: Archive Trello board, declare 3-week sprint SUCCESS, and launch the platform!
