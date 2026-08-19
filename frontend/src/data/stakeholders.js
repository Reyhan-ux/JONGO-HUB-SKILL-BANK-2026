export const STAKEHOLDER_ROLES = {
  ADMIN: 'administrator',
  GRADUATE: 'reactor_graduate',
  MENTOR: 'mentor',
  EMPLOYER: 'employer',
};

export const STAKEHOLDER_LABELS = {
  [STAKEHOLDER_ROLES.ADMIN]: 'Administrator',
  [STAKEHOLDER_ROLES.GRADUATE]: 'Reactor Graduate',
  [STAKEHOLDER_ROLES.MENTOR]: 'Mentor',
  [STAKEHOLDER_ROLES.EMPLOYER]: 'Employer',
};

export const STAKEHOLDER_DASHBOARD_ROUTES = {
  [STAKEHOLDER_ROLES.ADMIN]: '/admin',
  [STAKEHOLDER_ROLES.GRADUATE]: '/dashboard',
  [STAKEHOLDER_ROLES.MENTOR]: '/mentor',
  [STAKEHOLDER_ROLES.EMPLOYER]: '/employer',
  admin: '/admin',
  graduate: '/dashboard',
  mentor: '/mentor',
  employer: '/employer',
  administrator: '/admin',
  reactor_graduate: '/dashboard'
};

// Public registration only allowed for core users; Admin accessed directly via /admin
export const REGISTERABLE_ROLES = [
  STAKEHOLDER_ROLES.GRADUATE,
  STAKEHOLDER_ROLES.EMPLOYER,
  STAKEHOLDER_ROLES.MENTOR,
];

export const LOGIN_ROLES = [
  STAKEHOLDER_ROLES.GRADUATE,
  STAKEHOLDER_ROLES.EMPLOYER,
  STAKEHOLDER_ROLES.MENTOR,
  STAKEHOLDER_ROLES.ADMIN,
];
