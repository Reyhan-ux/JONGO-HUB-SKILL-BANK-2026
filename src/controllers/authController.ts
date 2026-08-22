import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/authService';

export async function register(req: Request, res: Response) {
  const { email, password, role } = req.body as {
    email?: unknown;
    password?: unknown;
    role?: unknown;
  };

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    (role !== 'STUDENT' && role !== 'EMPLOYER')
  ) {
    res.status(400).json({ message: 'email, password, and a valid role are required' });
    return;
  }

  try {
    const user = await registerUser(email, password, role);
    res.status(201).json({
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Email already in use') {
      res.status(409).json({ message: error.message });
      return;
    }

    res.status(500).json({ message: 'Unable to register user' });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body as {
    email?: unknown;
    password?: unknown;
  };

  if (typeof email !== 'string' || typeof password !== 'string') {
    res.status(400).json({ message: 'email and password are required' });
    return;
  }

  try {
    const result = await loginUser(email, password);
    res.json({
      token: result.token,
      user: { id: result.user.id, email: result.user.email, role: result.user.role },
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Invalid email or password') {
      res.status(401).json({ message: error.message });
      return;
    }

    res.status(500).json({ message: 'Unable to log in' });
  }
}