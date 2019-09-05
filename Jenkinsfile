pipeline {
  agent any 
  stages {
    stage('Install npm packages') { 
      steps {
        sh "yarn install"
      }
    }
    stage('Test') { 
      steps {
        sh "yarn test"
      }
    }
    stage('Deploy') { 
      steps {
        sh "yarn start"
      }
    }
  }
}