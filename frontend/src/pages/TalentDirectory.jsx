import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  MapPin,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Award,
  Users,
  X,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Filter
} from 'lucide-react';
import { mockGraduates as defaultGraduates, REACTOR_TRACKS } from '../data/mockData';

function getPaginationRange(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, '...', totalPages];
  }
  if (currentPage >= totalPages - 3) {
    return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
}

export default function TalentDirectory({
  graduates = defaultGraduates,
  title = 'VERIFIED REACTOR GRADUATES',
  titleHighlight = 'SKILL BANK',
  subtitle = 'Top-tier software engineers & tech leaders from Cameroon & Africa. Every profile is backed by mentor-audited capstones and digital credentials.',
  initialTrack = 'All Tracks'
}) {
  const [search, setSearch] = useState('');
  const [trackFilter, setTrackFilter] = useState(initialTrack);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('match-desc');
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever any filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, trackFilter, verifiedOnly, sortBy, itemsPerPage]);

  // 1. Filter
  const filtered = useMemo(() => {
    return graduates.filter((g) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !search ||
        g.fullName.toLowerCase().includes(q) ||
        g.title.toLowerCase().includes(q) ||
        g.location.toLowerCase().includes(q) ||
        g.verifiedSkills.some((s) => s.toLowerCase().includes(q));

      const matchesTrack = trackFilter === 'All Tracks' || g.reactorTrack === trackFilter;
      const matchesVerified = !verifiedOnly || g.verificationBadge;

      return matchesSearch && matchesTrack && matchesVerified;
    });
  }, [graduates, search, trackFilter, verifiedOnly]);

  // 2. Sort
  const sorted = useMemo(() => {
    const list = [...filtered];
    switch (sortBy) {
      case 'match-desc':
        return list.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
      case 'name-asc':
        return list.sort((a, b) => a.fullName.localeCompare(b.fullName));
      case 'name-desc':
        return list.sort((a, b) => b.fullName.localeCompare(a.fullName));
      case 'verified':
        return list.sort((a, b) => (b.verificationBadge ? 1 : 0) - (a.verificationBadge ? 1 : 0));
      case 'cohort-desc':
        return list.sort((a, b) => (b.reactorCohort || '').localeCompare(a.reactorCohort || ''));
      default:
        return list;
    }
  }, [filtered, sortBy]);

  // 3. Paginate
  const totalPages = Math.max(1, Math.ceil(sorted.length / itemsPerPage));
  const validPage = Math.min(currentPage, totalPages);
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, sorted.length);
  const paginatedGraduates = sorted.slice(startIndex, endIndex);

  const verifiedCount = useMemo(() => graduates.filter((g) => g.verificationBadge).length, [graduates]);
  const hasActiveFilters = search || trackFilter !== 'All Tracks' || verifiedOnly;

  const clearFilters = () => {
    setSearch('');
    setTrackFilter('All Tracks');
    setVerifiedOnly(false);
    setSortBy('match-desc');
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 220, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', padding: '2rem 1.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* ── Page Background Matrix Geometric Grid ── */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.15, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pageDirectoryGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748B" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.8" />
            <circle cx="48" cy="48" r="1.5" fill="#94A3B8" opacity="0.5" />
            <path d="M 22 24 L 26 24 M 24 22 L 24 26" stroke="#FFC72C" strokeWidth="0.8" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pageDirectoryGrid)" />
      </svg>

      {/* Soft Ambient Radial Background Glows */}
      <div style={{ position: 'absolute', top: '15%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.18) 0%, rgba(255, 199, 44, 0.04) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(55px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.03) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── 1. Heroic Showcase Header Card ── */}
        <div
          className="card-white"
          style={{
            background: 'linear-gradient(135deg, #111111 0%, #1A1A1A 100%)',
            color: '#FFFFFF',
            borderRadius: '2rem',
            padding: '2.5rem 2.25rem',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Intense Ambient Radial Glows */}
          <div style={{ position: 'absolute', top: '-15%', right: '10%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.28) 0%, rgba(255, 199, 44, 0.08) 50%, rgba(0,0,0,0) 80%)', filter: 'blur(55px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-15%', left: '5%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.22) 0%, rgba(255, 199, 44, 0.04) 50%, rgba(0,0,0,0) 80%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '40%', left: '45%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.14) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <span className="badge-yellow" style={{ fontSize: '0.75rem', padding: '0.35rem 0.8rem' }}>
                  🎓 JONGO HUB REACTOR TALENT
                </span>
                <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '0.05em' }}>
                  • 4-VECTOR COMPATIBILITY
                </span>
              </div>

              <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFFFFF', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 0.75rem' }}>
                {title} <span style={{ color: 'var(--pms-yellow)' }}>{titleHighlight}</span>
              </h1>

              <p style={{ color: '#D1D5DB', fontSize: '1.02rem', lineHeight: '1.65', margin: 0 }}>
                {subtitle}
              </p>
            </div>

            {/* Quick Metrics Cluster */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ background: '#222222', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.85rem 1.25rem', borderRadius: '1.25rem', textAlign: 'center' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--pms-yellow)', display: 'block', lineHeight: 1 }}>
                  {graduates.length}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#9CA3AF', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Total Candidates
                </span>
              </div>

              <div style={{ background: '#222222', border: '1px solid rgba(255, 199, 44, 0.3)', padding: '0.85rem 1.25rem', borderRadius: '1.25rem', textAlign: 'center' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', color: '#FFFFFF', display: 'block', lineHeight: 1 }}>
                  {verifiedCount}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--pms-yellow)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Verified Badges
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. Interactive Search & Multi-Filter Toolbar ── */}
        <div
          className="card-white"
          style={{
            padding: '1.25rem 1.5rem',
            marginBottom: '1.75rem',
            borderRadius: '1.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            border: '1px solid #E5E7EB',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {/* Main Search & Sort Controls Row */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, minWidth: '280px', display: 'flex', alignItems: 'center', background: '#F8F9FA', borderRadius: '14px', padding: '0.25rem 1rem', border: '1px solid #E5E7EB', height: '50px' }}>
              <Search size={18} style={{ color: '#6B7280', flexShrink: 0, marginRight: '0.5rem' }} />
              <input
                type="text"
                placeholder="Search by candidate name, skill (Go, React, Docker, AWS), or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.92rem',
                  color: 'var(--pms-black)',
                  fontFamily: 'var(--font-body)'
                }}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: '0.2rem' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#4B5563', fontSize: '0.88rem', fontWeight: '700' }}>
                <ArrowUpDown size={15} />
                <span>Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #D1D5DB',
                  borderRadius: '10px',
                  padding: '0.6rem 0.95rem',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  color: 'var(--pms-black)',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="match-desc">Highest Compatibility (Fit %)</option>
                <option value="name-asc">Name (A–Z)</option>
                <option value="name-desc">Name (Z–A)</option>
                <option value="verified">Verified First</option>
                <option value="cohort-desc">Latest Cohort</option>
              </select>
            </div>

            {/* Per Page Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#6B7280' }}>Show:</span>
              {[6, 12, 24].map((size) => (
                <button
                  key={size}
                  onClick={() => setItemsPerPage(size)}
                  style={{
                    padding: '0.4rem 0.75rem',
                    borderRadius: '8px',
                    border: itemsPerPage === size ? '2px solid var(--pms-yellow)' : '1px solid #E5E7EB',
                    background: itemsPerPage === size ? 'rgba(255, 199, 44, 0.15)' : '#FFFFFF',
                    color: itemsPerPage === size ? 'var(--pms-black)' : '#6B7280',
                    fontWeight: '800',
                    fontSize: '0.82rem',
                    cursor: 'pointer'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Verified Only Toggle Pill */}
            <button
              type="button"
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.15rem',
                borderRadius: '10px',
                border: verifiedOnly ? '1.5px solid var(--pms-black)' : '1px solid #E5E7EB',
                background: verifiedOnly ? '#111111' : '#FFFFFF',
                color: verifiedOnly ? 'var(--pms-yellow)' : '#4B5563',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ShieldCheck size={16} />
              {verifiedOnly ? 'Verified Only (Active)' : 'Filter Verified'}
            </button>
          </div>

          {/* Track Filter Pills Bar */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem', alignItems: 'center', borderTop: '1px solid #F3F4F6', paddingTop: '0.85rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#6B7280', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '0.25rem', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Filter size={13} /> Tracks:
            </span>
            {['All Tracks', ...REACTOR_TRACKS.filter(t => t !== 'All Tracks')].map((track) => {
              const isSelected = trackFilter === track;
              return (
                <button
                  key={track}
                  type="button"
                  onClick={() => setTrackFilter(track)}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? '900' : '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    border: isSelected ? '1.5px solid var(--pms-yellow)' : '1px solid #E5E7EB',
                    background: isSelected ? 'var(--pms-yellow)' : '#F9FAFB',
                    color: 'var(--pms-black)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {track}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. Candidate Results Count Bar ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', padding: '0 0.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.92rem', color: '#4B5563', fontWeight: '700' }}>
            Showing <strong style={{ color: 'var(--pms-black)' }}>{sorted.length === 0 ? 0 : startIndex + 1}–{endIndex}</strong> of <strong style={{ color: 'var(--pms-black)' }}>{sorted.length}</strong> qualified graduates
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#6B7280', fontSize: '0.85rem', fontWeight: '600' }}>
              Page {validPage} of {totalPages}
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#D97706',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* ── 4. Candidate Grid Showcase ── */}
        {sorted.length === 0 ? (
          <div className="card-white" style={{ textAlign: 'center', padding: '4rem 2rem', borderRadius: '1.5rem', marginBottom: '2rem' }}>
            <Users size={48} style={{ color: '#9CA3AF', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--pms-black)', marginBottom: '0.5rem' }}>
              No candidates found matching your filter
            </h3>
            <p style={{ color: '#6B7280', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              Try searching with broader keywords like "React", "Go", "Docker", or switch to "All Tracks".
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="btn-yellow"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {paginatedGraduates.map((g) => (
              <div
                key={g.id}
                className="card-white"
                style={{
                  borderRadius: '1.5rem',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #E5E7EB',
                  borderTop: '6px solid var(--pms-yellow)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  {/* Card Header: Avatar, Name, Compatibility Fit */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                      <div style={{ position: 'relative' }}>
                        <img
                          src={g.photo}
                          alt={g.fullName}
                          style={{ width: '56px', height: '56px', borderRadius: '16px', objectFit: 'cover', border: '2px solid #FFFFFF', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}
                        />
                        {g.verificationBadge && (
                          <div
                            title="Reactor Verified"
                            style={{
                              position: 'absolute',
                              bottom: '-4px',
                              right: '-4px',
                              background: '#111111',
                              color: 'var(--pms-yellow)',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: '1.5px solid #FFFFFF'
                            }}
                          >
                            <ShieldCheck size={12} weight="bold" />
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '900', color: 'var(--pms-black)', margin: 0, lineHeight: 1.2 }}>
                          {g.fullName}
                        </h3>
                        <p style={{ color: '#D97706', fontWeight: '800', fontSize: '0.85rem', margin: '0.15rem 0' }}>
                          {g.title}
                        </p>
                        <span style={{ color: '#6B7280', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <MapPin size={12} /> {g.location} • Cohort {g.reactorCohort}
                        </span>
                      </div>
                    </div>

                    {/* AI Match Badge */}
                    <div style={{ background: '#111111', color: 'var(--pms-yellow)', padding: '0.3rem 0.65rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
                      <Sparkles size={12} />
                      {g.matchScore}% FIT
                    </div>
                  </div>

                  {/* Verification Pill */}
                  <div style={{ marginBottom: '0.85rem' }}>
                    {g.verificationBadge ? (
                      <span className="badge-yellow" style={{ fontSize: '0.72rem', padding: '0.25rem 0.65rem' }}>
                        <Award size={13} /> Official Reactor Digital Credential
                      </span>
                    ) : (
                      <span style={{ background: '#FEF3C7', color: '#92400E', padding: '0.25rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: '700' }}>
                        Pending Capstone Audit
                      </span>
                    )}
                  </div>

                  {/* Bio Paragraph */}
                  <p style={{ color: '#4B5563', fontSize: '0.86rem', lineHeight: '1.55', marginBottom: '1rem' }}>
                    {g.bio}
                  </p>

                  {/* 4-Vector Fit Radar Mini-Matrix */}
                  <div
                    style={{
                      background: '#F9FAFB',
                      border: '1px solid #EAECF0',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      marginBottom: '1rem',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0.5rem',
                      fontSize: '0.76rem'
                    }}
                  >
                    <div>Tech Fit: <strong style={{ color: 'var(--pms-black)' }}>{g.matchBreakdown.technicalSkillFit}%</strong></div>
                    <div>Setup Fit: <strong style={{ color: 'var(--pms-black)' }}>{g.matchBreakdown.workSetupFit}%</strong></div>
                    <div>Soft Fit: <strong style={{ color: 'var(--pms-black)' }}>{g.matchBreakdown.softSkillFit}%</strong></div>
                    <div>Domain Fit: <strong style={{ color: 'var(--pms-black)' }}>{g.matchBreakdown.projectDomainFit}%</strong></div>
                  </div>

                  {/* Verified Skill Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                    {g.verifiedSkills.map((s) => (
                      <span
                        key={s}
                        style={{
                          background: '#F3F4F6',
                          color: 'var(--pms-black)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px',
                          fontSize: '0.76rem',
                          fontWeight: '700',
                          border: '1px solid #E5E7EB'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div style={{ display: 'flex', gap: '0.65rem', paddingTop: '0.75rem', borderTop: '1px solid #F3F4F6' }}>
                  <Link
                    to={`/graduate/${g.id}`}
                    className="btn-outline-dark"
                    style={{ flex: 1, justifyContent: 'center', padding: '0.55rem', fontSize: '0.85rem' }}
                  >
                    View Profile <ExternalLink size={14} />
                  </Link>

                  <a
                    href={`https://wa.me/${g.contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-yellow"
                    style={{ flex: 1, justifyContent: 'center', padding: '0.55rem', fontSize: '0.85rem' }}
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── 5. Polished High-Tech Pagination Bar ── */}
        {totalPages > 1 && (
          <div
            className="card-white"
            style={{
              padding: '1rem 1.5rem',
              borderRadius: '1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}
          >
            {/* Previous Page Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.15rem',
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                background: currentPage === 1 ? '#F9FAFB' : '#FFFFFF',
                color: currentPage === 1 ? '#9CA3AF' : 'var(--pms-black)',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            {/* Numeric Page Pills */}
            <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
              {getPaginationRange(currentPage, totalPages).map((p, idx) => {
                if (p === '...') {
                  return (
                    <span key={`ellipsis-talent-${idx}`} style={{ padding: '0 0.5rem', color: '#9CA3AF', fontWeight: '800' }}>
                      ...
                    </span>
                  );
                }
                const isCurrent = p === currentPage;
                return (
                  <button
                    key={p}
                    onClick={() => handlePageChange(p)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      border: isCurrent ? '2px solid var(--pms-yellow)' : '1px solid #E5E7EB',
                      background: isCurrent ? 'var(--pms-yellow)' : '#FFFFFF',
                      color: 'var(--pms-black)',
                      fontWeight: isCurrent ? '900' : '700',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isCurrent ? '0 3px 10px rgba(255, 199, 44, 0.35)' : 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            {/* Next Page Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.15rem',
                borderRadius: '10px',
                border: '1px solid #E5E7EB',
                background: currentPage === totalPages ? '#F9FAFB' : '#FFFFFF',
                color: currentPage === totalPages ? '#9CA3AF' : 'var(--pms-black)',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

TalentDirectory.propTypes = {
  graduates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      reactorCohort: PropTypes.string,
      matchScore: PropTypes.number,
      verificationBadge: PropTypes.bool,
      bio: PropTypes.string,
      verifiedSkills: PropTypes.arrayOf(PropTypes.string),
      contact: PropTypes.shape({
        whatsapp: PropTypes.string
      })
    })
  ),
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  subtitle: PropTypes.string,
  initialTrack: PropTypes.string
};
