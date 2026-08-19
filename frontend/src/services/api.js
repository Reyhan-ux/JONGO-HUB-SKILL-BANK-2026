import { mockGraduates, mockJobs, mockEmployers, mockCertificates } from '../data/mockData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP Error ${response.status}`);
  }
  return response.json();
}

// --- AUTHENTICATION API SERVICES ---
export async function signupUser({ fullName, email, password, role }) {
  const data = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, password, role })
  }).then(handleResponse);

  if (data.token) {
    localStorage.setItem('skillbank_token', data.token);
    localStorage.setItem('skillbank_user', JSON.stringify(data.user));
  }
  return data;
}

export async function loginUser({ email, password }) {
  const data = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(handleResponse);

  if (data.token) {
    localStorage.setItem('skillbank_token', data.token);
    localStorage.setItem('skillbank_user', JSON.stringify(data.user));
  }
  return data;
}

export async function fetchCurrentUser() {
  const token = localStorage.getItem('skillbank_token');
  if (!token) return null;

  try {
    const data = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).then(handleResponse);
    return data.user;
  } catch (err) {
    console.warn('Session expired or invalid:', err.message);
    logoutUser();
    return null;
  }
}

export function logoutUser() {
  localStorage.removeItem('skillbank_token');
  localStorage.removeItem('skillbank_user');
}


export async function fetchGraduates(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}/graduates${query ? `?${query}` : ''}`;
    const data = await fetch(url).then(handleResponse);
    return data.data || [];
  } catch (error) {
    console.warn('Backend offline or unreachable, using local fallback data:', error.message);
    let list = [...mockGraduates];
    if (params.search) {
      const q = params.search.toLowerCase();
      list = list.filter(g => g.fullName.toLowerCase().includes(q) || g.title.toLowerCase().includes(q));
    }
    if (params.track && params.track !== 'All Tracks') {
      list = list.filter(g => g.reactorTrack === params.track);
    }
    return list;
  }
}

export async function fetchGraduateById(id) {
  try {
    const data = await fetch(`${API_BASE_URL}/graduates/${id}`).then(handleResponse);
    return data.data;
  } catch (error) {
    console.warn('Backend offline or unreachable, using local fallback data:', error.message);
    return mockGraduates.find(g => g.id === id) || mockGraduates[0];
  }
}

export async function createGraduateProfile(profileData) {
  try {
    const data = await fetch(`${API_BASE_URL}/graduates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData)
    }).then(handleResponse);
    return data.data;
  } catch (error) {
    console.warn('Backend offline, saving locally:', error.message);
    const newId = `GRAD-${String(mockGraduates.length + 1).padStart(3, '0')}`;
    const newTalent = { id: newId, ...profileData };
    mockGraduates.unshift(newTalent);
    return newTalent;
  }
}

export async function updateGraduateVerification(id, verificationBadge, verificationStatus) {
  try {
    const data = await fetch(`${API_BASE_URL}/graduates/${id}/verify`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ verificationBadge, verificationStatus })
    }).then(handleResponse);
    return data.data;
  } catch (error) {
    console.warn('Backend offline, updating locally:', error.message);
    const grad = mockGraduates.find(g => g.id === id);
    if (grad) {
      grad.verificationBadge = verificationBadge;
      grad.verificationStatus = verificationStatus;
    }
    return grad;
  }
}

export async function fetchJobs(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const data = await fetch(`${API_BASE_URL}/jobs${query ? `?${query}` : ''}`).then(handleResponse);
    return data.data || [];
  } catch (error) {
    console.warn('Backend offline, using fallback jobs:', error.message);
    return mockJobs;
  }
}

export async function createJobPosting(jobData) {
  try {
    const data = await fetch(`${API_BASE_URL}/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData)
    }).then(handleResponse);
    return data.data;
  } catch (error) {
    console.warn('Backend offline, creating job locally:', error.message);
    const newJob = { id: `JOB-${mockJobs.length + 501}`, ...jobData, postedDate: new Date().toISOString().split('T')[0] };
    mockJobs.unshift(newJob);
    return newJob;
  }
}

export async function fetchEmployers() {
  try {
    const data = await fetch(`${API_BASE_URL}/employers`).then(handleResponse);
    return data.data || [];
  } catch (error) {
    console.warn('Backend offline, using fallback employers:', error.message);
    return mockEmployers;
  }
}

export async function verifyCredential(credentialCode) {
  try {
    const data = await fetch(`${API_BASE_URL}/credentials/verify/${credentialCode}`).then(handleResponse);
    return data.data;
  } catch (error) {
    console.warn('Backend offline, using fallback credential verification:', error.message);
    return mockCertificates.find(c => c.credentialCode === credentialCode) || null;
  }
}

export async function issueCredential(credentialData) {
  try {
    const data = await fetch(`${API_BASE_URL}/credentials/issue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentialData)
    }).then(handleResponse);
    return data.data;
  } catch (error) {
    console.warn('Backend offline, issuing credential locally:', error.message);
    const newCred = {
      credentialCode: `JHR-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      issueDate: new Date().toISOString().split('T')[0],
      verificationStatus: 'Valid',
      ...credentialData
    };
    mockCertificates.unshift(newCred);
    return newCred;
  }
}
