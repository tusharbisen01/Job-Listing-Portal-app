pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/tusharbisen01/Job-Listing-Portal-app.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'cd backend && docker build -t job-portal .'
            }
        }

        stage('Stop Old') {
            steps {
                sh 'docker stop job-container || true'
                sh 'docker rm job-container || true'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 5000:5000 --env-file backend/.env --name job-container job-portal'
            }
        }
    }
}
