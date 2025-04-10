import axios from 'axios';

const JobCard = ({ job, fetchJobs }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/jobs/${job._id}`);
    fetchJobs();
  };

  const handleStatusChange = async (e) => {
    await axios.put(`http://localhost:5000/api/jobs/${job._id}`, { ...job, status: e.target.value });
    fetchJobs();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
      <h3>{job.company} - {job.role}</h3>
      <p>Status: 
        <select value={job.status} onChange={handleStatusChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </p>
      <p>Date: {new Date(job.appliedDate).toDateString()}</p>
      <p><a href={job.link} target="_blank" rel="noreferrer">Link</a></p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JobCard;
