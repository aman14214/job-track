import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await axios.get('http://localhost:5000/api/jobs');
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>All Jobs</h2>
      {jobs.map(job => (
        <JobCard key={job._id} job={job} fetchJobs={fetchJobs} />
      ))}
    </div>
  );
};

export default JobList;
