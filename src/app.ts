import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import graduateRoutes from './routes/graduateRoutes';
import jobRoutes from './routes/jobRoutes';
import connectionRoutes from './routes/connectionRoutes';
import employerRoutes from './routes/employerRoutes';
import credentialRoutes from './routes/credentialRoutes';
import adminRoutes from './routes/adminRoutes';
import notificationRoutes from './routes/notificationRoutes';
import mentorRoutes from './routes/mentorRoutes';
import messageRoutes from './routes/messageRoutes';

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
app.use('/api/notifications', notificationRoutes);
app.use('/api/mentor', mentorRoutes);
app.use('/api/messages', messageRoutes);

export default app;