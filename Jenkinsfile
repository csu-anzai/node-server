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
  }
}
