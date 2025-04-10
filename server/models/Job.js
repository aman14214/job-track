const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  date: String,
  link: String,
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied',
  },
});

module.exports = mongoose.model('Job', jobSchema);
