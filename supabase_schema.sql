-- Jongo Hub Reactor Skill Bank - Supabase SQL Schema Initialization
-- Copy & paste this entire script into your Supabase SQL Editor and click "Run".

-- 1. Create Graduates / Talent Profiles Table
CREATE TABLE IF NOT EXISTS graduates (
    id VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    reactor_cohort VARCHAR(50),
    reactor_track VARCHAR(255),
    verification_badge BOOLEAN DEFAULT FALSE,
    verification_status VARCHAR(100) DEFAULT 'Pending_Capstone_Review',
    assigned_mentor_id VARCHAR(50),
    photo TEXT,
    location VARCHAR(255),
    availability VARCHAR(255),
    bio TEXT,
    contact JSONB,
    languages JSONB,
    verified_skills JSONB,
    soft_skills JSONB,
    match_score INT DEFAULT 85,
    match_breakdown JSONB,
    bootcamps_completed JSONB,
    certifications JSONB,
    projects JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create Employers Table
CREATE TABLE IF NOT EXISTS employers (
    id VARCHAR(50) PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    industry VARCHAR(255),
    location VARCHAR(255),
    website TEXT,
    verified_status BOOLEAN DEFAULT TRUE,
    contact_person VARCHAR(255),
    contact_title VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    open_roles_count INT DEFAULT 0,
    hired_graduates_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create Job Offers Table
CREATE TABLE IF NOT EXISTS jobs (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    company_id VARCHAR(50) REFERENCES employers(id) ON DELETE SET NULL,
    location VARCHAR(255),
    employment_type VARCHAR(100),
    work_setup VARCHAR(100),
    target_audience VARCHAR(100),
    required_technical_skills JSONB,
    required_soft_skills JSONB,
    posted_date DATE DEFAULT CURRENT_DATE,
    description TEXT,
    status VARCHAR(50) DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create Digital Credentials Table
CREATE TABLE IF NOT EXISTS credentials (
    credential_code VARCHAR(100) PRIMARY KEY,
    student_id VARCHAR(50) REFERENCES graduates(id) ON DELETE CASCADE,
    student_name VARCHAR(255) NOT NULL,
    program_track VARCHAR(255) NOT NULL,
    issue_date DATE DEFAULT CURRENT_DATE,
    issuer VARCHAR(255) DEFAULT 'Jongo Hub Academic & Engineering Board',
    verification_status VARCHAR(50) DEFAULT 'Valid',
    verification_url TEXT,
    qr_code_url TEXT,
    security_hash VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Create System Users / Auth Accounts Table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'graduate', -- Options: 'graduate', 'employer', 'mentor', 'admin'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- 6. Enable Row Level Security (RLS) & Default Read Policies
ALTER TABLE graduates ENABLE ROW LEVEL SECURITY;
ALTER TABLE employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE credentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Allow read access for public / API queries
DROP POLICY IF EXISTS "Allow public read access on graduates" ON graduates;
CREATE POLICY "Allow public read access on graduates" ON graduates FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read access on employers" ON employers;
CREATE POLICY "Allow public read access on employers" ON employers FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read access on jobs" ON jobs;
CREATE POLICY "Allow public read access on jobs" ON jobs FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read access on credentials" ON credentials;
CREATE POLICY "Allow public read access on credentials" ON credentials FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read access on users" ON users;
CREATE POLICY "Allow public read access on users" ON users FOR SELECT USING (true);



