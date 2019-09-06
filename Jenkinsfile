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
        sh "yarn start"
        sh "pm2 show index"
      }
    }
  }
}
