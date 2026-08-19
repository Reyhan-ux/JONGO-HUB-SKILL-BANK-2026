import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  MapPin,
  Briefcase,
  CheckCircle2,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Building2,
  Clock
} from 'lucide-react';
import { mockJobs } from '../data/mockData';

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

export default function JobMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSetup, setFilterSetup] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [applying, setApplying] = useState(null);

  // Reset to page 1 whenever filters or search query change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterSetup, filterType, sortBy, itemsPerPage]);

  // 1. Filter jobs
  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const q = searchTerm.toLowerCase();
      const matchesSearch = !searchTerm ||
        job.title.toLowerCase().includes(q) ||
        job.companyName.toLowerCase().includes(q) ||
        job.requiredTechnicalSkills.some(s => s.toLowerCase().includes(q));

      const matchesSetup = filterSetup === 'All' || job.workSetup === filterSetup;
      const matchesType = filterType === 'All' || job.employmentType === filterType;

      return matchesSearch && matchesSetup && matchesType;
    });
  }, [searchTerm, filterSetup, filterType]);

  // 2. Sort filtered jobs
  const sortedJobs = useMemo(() => {
    const list = [...filteredJobs];
    switch (sortBy) {
      case 'newest':
        return list.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
      case 'title-asc':
        return list.sort((a, b) => a.title.localeCompare(b.title));
      case 'company-asc':
        return list.sort((a, b) => a.companyName.localeCompare(b.companyName));
      case 'skills-count':
        return list.sort((a, b) => b.requiredTechnicalSkills.length - a.requiredTechnicalSkills.length);
      default:
        return list;
    }
  }, [filteredJobs, sortBy]);

  // 3. Paginate
  const totalPages = Math.max(1, Math.ceil(sortedJobs.length / itemsPerPage));
  const validPage = Math.min(currentPage, totalPages);
  const startIndex = (validPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, sortedJobs.length);
  const paginatedJobs = sortedJobs.slice(startIndex, endIndex);

  const hasActiveFilters = searchTerm || filterSetup !== 'All' || filterType !== 'All';

  const clearFilters = () => {
    setSearchTerm('');
    setFilterSetup('All');
    setFilterType('All');
    setSortBy('newest');
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '2rem 1.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle Geometric Background Matrix */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.12, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="jobGridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748B" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.8" />
            <circle cx="48" cy="48" r="1.5" fill="#94A3B8" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jobGridPattern)" />
      </svg>

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

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <span className="badge-yellow" style={{ fontSize: '0.75rem', padding: '0.35rem 0.8rem' }}>
                  💼 EXCLUSIVE OPPORTUNITIES
                </span>
                <span style={{ color: '#9CA3AF', fontSize: '0.82rem', fontWeight: '700', letterSpacing: '0.05em' }}>
                  • VETTED EMPLOYER ROLES
                </span>
              </div>

              <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFFFFF', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 0.75rem' }}>
                DEVELOPER JOB <span style={{ color: 'var(--pms-yellow)' }}>MARKETPLACE</span>
              </h1>

              <p style={{ color: '#D1D5DB', fontSize: '1.02rem', lineHeight: '1.65', margin: 0 }}>
                Direct employment pipelines for Jongo Hub Reactor graduates. Matching enterprise partners with verified software talent.
              </p>
            </div>

            {/* Quick Metrics Cluster */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ background: '#222222', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.85rem 1.25rem', borderRadius: '1.25rem', textAlign: 'center' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--pms-yellow)', display: 'block', lineHeight: 1 }}>
                  {mockJobs.length}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#9CA3AF', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Total Openings
                </span>
              </div>

              <div style={{ background: '#222222', border: '1px solid rgba(255, 199, 44, 0.3)', padding: '0.85rem 1.25rem', borderRadius: '1.25rem', textAlign: 'center' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', color: '#FFFFFF', display: 'block', lineHeight: 1 }}>
                  {mockJobs.filter(j => j.workSetup === 'Remote').length}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--pms-yellow)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  100% Remote Roles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. Unified Search, Filter & Sort Toolbar ── */}
        <div
          className="card-white"
          style={{
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            borderRadius: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            border: '1px solid #E5E7EB'
          }}
        >
          {/* Top Row: Search Input & Quick Controls */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, minWidth: '280px', display: 'flex', alignItems: 'center', background: '#F8F9FA', borderRadius: '14px', padding: '0 1rem', border: '1px solid #E5E7EB', height: '50px' }}>
              <Search size={18} style={{ color: '#6B7280', marginRight: '0.6rem' }} />
              <input
                type="text"
                placeholder="Search by role title, technology (React, Node, Go, AWS) or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--pms-black)', outline: 'none', fontSize: '0.95rem', fontWeight: '500' }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', display: 'flex', alignItems: 'center' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4B5563', fontSize: '0.88rem', fontWeight: '700' }}>
                <ArrowUpDown size={16} />
                <span>Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #D1D5DB',
                  borderRadius: '10px',
                  padding: '0.6rem 1rem',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  color: 'var(--pms-black)',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="newest">Newest Listed</option>
                <option value="title-asc">Job Title (A-Z)</option>
                <option value="company-asc">Company Name (A-Z)</option>
                <option value="skills-count">Most Required Skills</option>
              </select>
            </div>

            {/* Per Page Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
          </div>

          {/* Bottom Row: Filter Pills */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F3F4F6', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Filter size={14} /> Work Setup:
              </span>
              {['All', 'Remote', 'Hybrid', 'On-site'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFilterSetup(opt)}
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: '999px',
                    border: filterSetup === opt ? '2px solid var(--pms-yellow)' : '1px solid #E5E7EB',
                    background: filterSetup === opt ? 'var(--pms-yellow)' : '#F9FAFB',
                    color: 'var(--pms-black)',
                    fontWeight: filterSetup === opt ? '900' : '600',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contract:
              </span>
              {['All', 'Full-time', 'Contract', 'Internship'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: '999px',
                    border: filterType === type ? '2px solid #111111' : '1px solid #E5E7EB',
                    background: filterType === type ? '#111111' : '#F9FAFB',
                    color: filterType === type ? '#FFFFFF' : 'var(--pms-black)',
                    fontWeight: filterType === type ? '800' : '600',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {type}
                </button>
              ))}

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    color: '#991B1B',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  <X size={13} /> Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── 3. Results Meta Count Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ color: '#4B5563', fontSize: '0.95rem', fontWeight: '700' }}>
            Showing <strong style={{ color: 'var(--pms-black)' }}>{sortedJobs.length === 0 ? 0 : startIndex + 1}–{endIndex}</strong> of <strong style={{ color: 'var(--pms-black)' }}>{sortedJobs.length}</strong> active roles
          </span>

          <span style={{ color: '#6B7280', fontSize: '0.85rem', fontWeight: '600' }}>
            Page {validPage} of {totalPages}
          </span>
        </div>

        {/* ── 4. Paginated Job Listings ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {paginatedJobs.map((job) => (
            <div
              key={job.id}
              className="card-white"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1.5rem',
                borderLeft: '5px solid var(--pms-yellow)',
                borderRadius: '1.5rem',
                padding: '1.75rem 2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ flex: 1, minWidth: '280px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
                  <h3 style={{ color: 'var(--pms-black)', fontSize: '1.25rem', fontWeight: '900', margin: 0 }}>
                    {job.title}
                  </h3>
                  <span className="badge-yellow" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem', fontWeight: '800' }}>
                    96% FIT
                  </span>
                  <span style={{ background: '#F3F4F6', color: '#1F2937', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800' }}>
                    {job.employmentType}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                  <span style={{ color: '#D97706', fontWeight: '800', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Building2 size={15} /> {job.companyName}
                  </span>
                  <span style={{ color: '#6B7280', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={15} /> {job.location} · <strong style={{ color: 'var(--pms-black)' }}>{job.workSetup}</strong>
                  </span>
                  <span style={{ color: '#9CA3AF', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} /> Posted {job.postedDate}
                  </span>
                </div>

                <p style={{ color: '#4B5563', fontSize: '0.92rem', marginBottom: '1rem', lineHeight: '1.6', maxWidth: '780px' }}>
                  {job.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {job.requiredTechnicalSkills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: 'rgba(255, 199, 44, 0.15)',
                        border: '1px solid rgba(255, 199, 44, 0.35)',
                        color: 'var(--pms-black)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: '800'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', minWidth: '180px', alignItems: 'stretch' }}>
                {applying === job.id ? (
                  <div style={{ padding: '0.75rem 1.25rem', background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: '12px', color: '#065F46', fontSize: '0.88rem', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem' }}>
                    <CheckCircle2 size={16} /> Application Sent
                  </div>
                ) : (
                  <button
                    className="btn-yellow"
                    style={{
                      justifyContent: 'center',
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.92rem',
                      fontWeight: '800',
                      borderRadius: '12px'
                    }}
                    onClick={() => setApplying(job.id)}
                  >
                    Apply Now
                  </button>
                )}
                <span style={{ color: '#9CA3AF', fontSize: '0.78rem', textAlign: 'center', fontWeight: '600' }}>
                  Reactor Graduate Pipeline
                </span>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {sortedJobs.length === 0 && (
            <div className="card-white" style={{ padding: '3.5rem 2rem', textAlign: 'center', borderRadius: '1.5rem' }}>
              <Briefcase size={44} style={{ color: '#D1D5DB', marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--pms-black)', fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                No active roles found matching your criteria
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                Try searching for broader skills or clearing your work setup and employment type filters.
              </p>
              <button
                onClick={clearFilters}
                className="btn-yellow"
                style={{ padding: '0.65rem 1.5rem', display: 'inline-flex' }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

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
                    <span key={`ellipsis-${idx}`} style={{ padding: '0 0.5rem', color: '#9CA3AF', fontWeight: '800' }}>
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
