import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import graduateRoutes from './routes/graduateRoutes';
import jobRoutes from './routes/jobRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/graduates', graduateRoutes);
app.use('/api/jobs', jobRoutes);

export default app;