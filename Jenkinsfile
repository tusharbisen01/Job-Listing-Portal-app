pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/tusharbisen01/Job-Listing-Portal-app.git'
            }
        }
        stage('Install Frontend Dependencies (Fix)') {
            steps {
                dir('frontend') {
                    sh 'cd Frontend'
                    sh 'sudo apt install npm -y'
                    sh 'npm install framer-motion react-tsparticles tsparticles react-icons'
                }
            }
        }


        stage('Build Docker') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}
