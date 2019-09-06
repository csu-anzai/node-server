pipeline {
  agent any 
  stages {
    stage('Install npm packages') { 
      steps {
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
        sh "pm2 restart index"
        sh "pm2 ls"
      }
    }
  }
}
