pipeline {
    agent any 
    stages {
        stage('clone repo') { 
            steps {
                sh "[ -d /var/lib/jenkins/workspace/PipelineDemo/node-server ] && rm -r node-server/ || ls"
                sh "git clone https://github.com/chynamyerz/node-server.git"
            }
        }
        stage('Test') { 
            steps {
                sh "cd node-server && yarn && yarn test"
            }
        }
        stage('Deploy') { 
            steps {
                sh "cd node-server && yarn start"
            }
        }
    }
}