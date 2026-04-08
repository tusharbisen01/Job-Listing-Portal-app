# 🚀 Job Portal Application – Deployment Guide (Full Documentation)

## 📌 Overview

This document provides complete instructions to set up, build, and deploy the Job Portal application using Docker and CI/CD (Jenkins). It includes prerequisites, local setup, Docker deployment, and CI/CD pipeline integration.

---

# 🧰 Prerequisites

Ensure the following tools are installed:

### 🔹 System Requirements

* OS: Ubuntu / Linux / Windows (WSL recommended)
* RAM: Minimum 4GB (8GB recommended)

### 🔹 Required Software

```bash
node -v        # v18+
npm -v         # v9+
docker -v
docker-compose -v
git --version
```

### 🔹 Install Dependencies (Ubuntu)

```bash
sudo apt update
sudo apt install -y nodejs npm docker.io docker-compose git
```

Enable Docker:

```bash
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

---

# 📁 Project Structure

```
Job-Listing-Portal-app/
│
├── Backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── package.json
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml
└── Jenkinsfile
```

---

# ⚙️ Frontend Setup

### 📄 `Frontend/package.json`

Ensure compatible versions:

```json
{
  "name": "job-portal-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "1.6.8",
    "framer-motion": "10.18.0",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-icons": "4.12.0",
    "react-router-dom": "6.23.0",
    "react-tsparticles": "2.12.2",
    "tsparticles": "2.12.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "4.2.1",
    "vite": "5.4.21"
  }
}
```

---

### 📄 Fix React Error

Add this line in all JSX files:

```js
import React from "react";
```

---

### 📄 `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

---

### ▶️ Run Frontend Locally

```bash
cd Frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

# ⚙️ Backend Setup

### ▶️ Run Backend Locally

```bash
cd Backend
npm install
node server.js
```

---

# 🐳 Docker Setup

### 📄 Backend Dockerfile

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

RUN chown -R node:node /app
USER node

CMD ["node", "server.js"]
```

---

### 📄 Frontend Dockerfile

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
```

---

### 📄 `docker-compose.yml`

```yaml
version: "3"

services:
  backend:
    build: ./Backend
    ports:
      - "5000:5000"
    depends_on:
      - mongo

  frontend:
    build: ./Frontend
    ports:
      - "3000:3000"

  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

---

### ▶️ Run with Docker

```bash
docker-compose down
docker-compose up --build -d
```

---

# 🔁 CI/CD Pipeline (Jenkins)

---

### 📄 Jenkinsfile

```groovy
pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                url: 'https://github.com/tusharbisen01/Job-Listing-Portal-app.git'
            }
        }

        stage('Fix Permissions') {
            steps {
                sh 'sudo chown -R jenkins:jenkins .'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }
}
```

---

# 🔗 GitHub Webhook Setup

1. Go to GitHub repo → Settings → Webhooks
2. Add webhook:

```
http://<JENKINS_IP>:8080/github-webhook/
```

3. Content type: `application/json`

---

# 🌐 Nginx Reverse Proxy (Optional)

Install:

```bash
sudo apt install nginx
```

### 📄 Config

```nginx
server {
    listen 80;

    location / {
        proxy_pass http://localhost:3000;
    }

    location /api {
        proxy_pass http://localhost:5000;
    }
}
```

Restart:

```bash
sudo systemctl restart nginx
```

---

# 🧪 Testing

### Frontend:

```
http://<SERVER_IP>:3000
```

### Backend:

```
http://<SERVER_IP>:5000/api/jobs
```

---

# 🛠️ Common Errors & Fixes

### ❌ Blank Screen

✔ Fix:

```js
import React from "react";
```

---

### ❌ Module Not Found (bcryptjs)

```bash
npm install bcryptjs
```

---

### ❌ Permission Denied (Jenkins)

```bash
sudo chown -R jenkins:jenkins /var/lib/jenkins/workspace/
```

---

### ❌ Vite Build Error

✔ Fix version mismatch in `package.json`

---

# 🎯 Final Result

After deployment:

* ✅ Full-stack app running
* ✅ Frontend UI accessible
* ✅ Backend API connected
* ✅ CI/CD automated
* ✅ Dockerized deployment

---

# 🚀 Future Improvements

* Add authentication (JWT)
* Implement job apply feature
* Add analytics dashboard
* Use Kubernetes for scaling
* Add monitoring (Prometheus + Grafana)

---

# ✅ Conclusion

This setup ensures a **production-ready deployment pipeline** using:

* Docker (containerization)
* Jenkins (CI/CD)
* GitHub (SCM)
* Nginx (reverse proxy)

---

**Your Job Portal is now fully deployable and scalable 🚀**
