# 📘 Job Tracker App – Full Stack (MERN)

A full-stack job tracking application built with the MERN stack where users can:
- ✅ Add job applications
- ✅ View job list
- ✅ Update status (Applied, Interview, Offer, Rejected)
- ✅ Sort by date
- ✅ Check duplicates
- ✅ Hosted on MongoDB Atlas, Render, and Vercel

---

## 🔗 Live Demo

- 🌐 Frontend: [https://job-track-fuzi9ghqn-aman-sharmas-projects-7aceb6a5.vercel.app/](#)
- ⚙️ Backend: [https://job-track-1.onrender.com](#)

---

## 💻 Tech Stack

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (frontend), Render (backend)

---

## 🚀 Features

- Add job with company, role, date, link, and status
- Update job status inline
- Sort job list by application date (latest first)
- Detect duplicate applications
- Mobile responsive UI

---

## 📦 Setup & Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/job-tracker-app

# 2. Install dependencies
cd client
npm install

cd ../server
npm install

# 3. Add your MongoDB URI in server/.env

# 4. Run frontend and backend
cd server && node index.js
cd client && npm start
