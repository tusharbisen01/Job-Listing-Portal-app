# 💼 Job Listing Portal

A full-stack MERN project connecting job seekers and employers with authentication, applications, and dashboards.

🚀 **Live Demo:** [job-portal-demo.vercel.app](#)
📂 **Repo:** [GitHub Link](https://github.com/tusharbisen01/Job-Listing-Portal-app)
🛠️ **Tech Stack:** MongoDB · Express.js · React.js · Node.js · JWT Auth · TailwindCSS

---

## ✨ Features
- 🔐 Secure Login/Signup (JWT)
- 👤 Job Seeker & Employer Profiles
- 💼 Post & Apply for Jobs
- 🧭 Filter Jobs by Type / Location / Salary
- 📊 User Dashboards
- 🔔 Real-time Notifications

---

## 🧩 Installation

```bash
sudo apt update -y
sudo apt install docker.io -y
sudo apt install docker-compose -y
sudo usermod -aG docker $USER && newgrp docker
git clone https://github.com/tusharbisen01/Job-Listing-Portal-app.git
cd Job-Listing-Portal-app
cd Backend && npm install
cd Frontend
npm install framer-motion react-tsparticles tsparticles react-icons
cd ..
docker-compose down
docker-compose up --build -d
docker ps
