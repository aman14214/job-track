import { useState } from 'react';
import axios from 'axios';

const AddJob = () => {
  const [form, setForm] = useState({
    company: '', role: '', status: 'Applied', appliedDate: '', link: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/jobs', form);
    setForm({ company: '', role: '', status: 'Applied', appliedDate: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Company" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
      <input placeholder="Role" value={form.role} onChange={e => setForm({...form, role: e.target.value})} />
      <input type="date" value={form.appliedDate} onChange={e => setForm({...form, appliedDate: e.target.value})} />
      <input placeholder="Link" value={form.link} onChange={e => setForm({...form, link: e.target.value})} />
      <select value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default AddJob;
