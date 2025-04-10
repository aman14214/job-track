import React, { useState } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");

  const addJob = () => {
    if (!company || !role || !date) return;

    const newJob = {
      company,
      role,
      status,
      link,
      date,
    };

    setJobs([...jobs, newJob]);
    setCompany("");
    setRole("");
    setStatus("Applied");
    setLink("");
    setDate("");
  };

  const deleteJob = (index) => {
    const updated = jobs.filter((_, i) => i !== index);
    setJobs(updated);
  };

  const handleStatusChange = (index, newStatus) => {
    const updated = [...jobs];
    updated[index].status = newStatus;
    setJobs(updated);
  };

  const sortJobsByDate = () => {
    const sortedJobs = [...jobs].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // latest first
    });
    setJobs(sortedJobs);
  };

  const removeDuplicates = () => {
    const seen = new Set();
    const uniqueJobs = jobs.filter((job) => {
      const key = `${job.company.toLowerCase()}_${job.role.toLowerCase()}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    setJobs(uniqueJobs);
  };

  return (
    <div className="App">
      <h2>📋 Applied Jobs</h2>

      <div className="controls">
        <button onClick={sortJobsByDate}>📅 Sort by Date</button>
        <button onClick={removeDuplicates}>🧹 Remove Duplicates</button>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <input
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="submitBtn">
        <button onClick={addJob}>➕ Add Job</button>
      </div>

      {jobs.map((job, index) => (
        <div className="jobCard" key={index}>
          <div className="top">
            <strong>{job.company}</strong>
            <span>{job.role}</span>
          </div>
          <div className="details">
            <span>
              <strong>Status:</strong>{" "}
              <select
                value={job.status}
                onChange={(e) => handleStatusChange(index, e.target.value)}
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </span>
            <span>
              <strong>Date:</strong> {job.date}
            </span>
            <a href={job.link} target="_blank" rel="noreferrer">
              🔗 View Job
            </a>
            <button onClick={() => deleteJob(index)}>🗑️ Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
