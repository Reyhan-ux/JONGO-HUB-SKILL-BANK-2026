# Full Real Authentication & Role-Based Access Control (RBAC) System

Implement a production-grade authentication system using Supabase PostgreSQL persistence, `bcryptjs` password hashing, JWT token authorization, and role management for `graduate`, `employer`, `mentor`, and `admin`.

## User Review Required

> [!IMPORTANT]
> - A new `users` table will be added to the Supabase database schema. You will need to execute the updated SQL script in your Supabase SQL Editor to create the `users` table.
> - Supported user roles during signup: `graduate`, `employer`, `mentor`, and `admin`.

## Open Questions

- None at present; requirements and role definitions have been clarified.

## Proposed Changes

### Database & Schema

#### [MODIFY] [supabase_schema.sql](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/backend/supabase_schema.sql)
- Add SQL table `users` (`id`, `full_name`, `email`, `password_hash`, `role`, `created_at`).
- Enable Row Level Security (RLS) on `users`.
- Add index on `email` for fast lookups.

---

### Backend Data Access Layer

#### [MODIFY] [db.js](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/backend/src/config/db.js)
- Add `createUser({ fullName, email, passwordHash, role })` to query Supabase `users` table (or local fallback).
- Add `getUserByEmail(email)` to fetch user record (including `password_hash`).
- Add `getUserById(id)` to fetch user profile safely without returning `password_hash`.

---

### Backend Auth Routes & Middleware

#### [MODIFY] [auth.js](file:///c:/Users/user%20pro/Desktop/SKILL%20BANK/backend/src/routes/auth.js)
- `POST /api/v1/auth/signup`:
  - Validate email, full name, password length ($\ge$ 6 chars), and valid role (`graduate`, `employer`, `mentor`, `admin`).
  - Check if email already exists in Supabase.
  - Hash password securely using `bcryptjs`.
  - Save user to database and return signed JWT token + user profile.
- `POST /api/v1/auth/login`:
  - Query user by email from database.
  - Compare provided password with stored `password_hash` using `bcryptjs.compare`.
  - Issue JWT token with `id`, `email`, `role`, `fullName`.
- `GET /api/v1/auth/me`:
  - Return authenticated user context from token.
- `authenticateToken` and `authorizeRoles(...allowedRoles)` middleware helpers.

## Verification Plan

### Automated / Scripted Tests
- Run an automated node script or test curl/HTTP requests to test:
  1. `POST /api/v1/auth/signup` with a test user (`test@jongohub.org`, role: `mentor`).
  2. Verify user record is inserted in database.
  3. `POST /api/v1/auth/login` with correct password to obtain JWT token.
  4. `POST /api/v1/auth/login` with incorrect password to verify HTTP 401 response.
  5. `GET /api/v1/auth/me` with Bearer token header to verify payload details.

### Manual Verification
- Verify in Supabase Table Editor that the new user is listed under the `users` table.
