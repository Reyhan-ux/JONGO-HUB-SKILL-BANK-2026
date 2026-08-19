import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';
import { loginUser, signupUser, fetchCurrentUser, logoutUser as apiLogoutUser } from '../services/api';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('skillbank_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem('skillbank_token') || null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hydrate & verify session on app mount
  useEffect(() => {
    let isMounted = true;
    async function verifySession() {
      const savedToken = localStorage.getItem('skillbank_token');
      if (savedToken) {
        try {
          const freshUser = await fetchCurrentUser();
          if (isMounted && freshUser) {
            setUser(freshUser);
            localStorage.setItem('skillbank_user', JSON.stringify(freshUser));
          }
        } catch {
          if (isMounted) {
            setUser(null);
            setToken(null);
          }
        }
      }
      if (isMounted) {
        setInitialLoading(false);
      }
    }
    verifySession();
    return () => {
      isMounted = false;
    };
  }, []);

  const login = useCallback(async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginUser({ email, password });
      const activeUser = response?.user || null;
      const activeToken = response?.token || null;
      setUser(activeUser);
      setToken(activeToken);
      return response;
    } catch (err) {
      const msg = err.message || 'Login failed. Please check your credentials.';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async ({ fullName, email, password, role }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await signupUser({ fullName, email, password, role });
      const activeUser = response?.user || null;
      const activeToken = response?.token || null;
      setUser(activeUser);
      setToken(activeToken);
      return response;
    } catch (err) {
      const msg = err.message || 'Registration failed. Please check your details.';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    apiLogoutUser();
    setUser(null);
    setToken(null);
    setError(null);
  }, []);

  const updateUser = useCallback((userData) => {
    setUser((prev) => {
      const updated = { ...prev, ...userData };
      localStorage.setItem('skillbank_user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const value = {
    user,
    token,
    role: user?.role || null,
    isAuthenticated: !!user,
    loading,
    initialLoading,
    error,
    setError,
    login,
    signup,
    logout,
    updateUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};
