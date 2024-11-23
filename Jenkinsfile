pipeline{
    agent any
    environment{
        MONGO_URL = 'mongodb://127.0.0.1:27017/testDB'
    }

    tools{nodejs "Nodejs_Latest"}

    stages{
        stage('check node version'){
            steps{
                bat 'node -v'
                bat 'npm -v'
            }
        }
        stage('Checkout'){
            steps{
                checkout([$class: 'GitSCM',
                branches: [[name: '*/main']],
                userRemoteConfigs: [[url: 'https://github.com/AQSA-UMER/Mean-App-Deploy-Cloud.git']]
                
                ])
            }
        }

        stage('Install Dependencies'){
            steps{
                dir('Mocha/restapi-testing'){
                    bat 'npm Install'
                }
            }
        }
        stage('Test'){
            steps{
                dir('Mocha/restapi-testing'){
                    bat 'npm test'
                }
            }
        }
    }
}