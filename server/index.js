const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Job = require('./models/Job');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.post('/jobs', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.json(newJob);
});

app.delete('/jobs/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

app.put('/jobs/:id', async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedJob);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
