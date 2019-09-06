pipeline {
  agent any 
  stages {
    stage('Install npm packages') { 
      steps {
        sh "git pull"
        sh "yarn install"
      }
    }
    stage('Test the server') { 
      steps {
        sh "yarn test"
      }
    }
    stage('Deploy') { 
      steps {
        sh "yarn restart"
        sh "pm2 ls"
      }
    }
  }
}
