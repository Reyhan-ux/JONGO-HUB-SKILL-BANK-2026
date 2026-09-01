import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import graduateRoutes from './routes/graduateRoutes';
import jobRoutes from './routes/jobRoutes';
import connectionRoutes from './routes/connectionRoutes';
import employerRoutes from './routes/employerRoutes';
import credentialRoutes from './routes/credentialRoutes';
import adminRoutes from './routes/adminRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/graduates', graduateRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/connections', connectionRoutes);
app.use('/api/employers', employerRoutes);
app.use('/api/credentials', credentialRoutes);
app.use('/api/admin', adminRoutes);

export default app;