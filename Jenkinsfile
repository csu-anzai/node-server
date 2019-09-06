pipeline {
  agent any 
  stages {
    stage('Install npm packages') { 
      steps {
        sh "cd /home/sifiso/node-server && yarn install"
      }
    }
    stage('Test the server') { 
      steps {
        sh "cd /home/sifiso/node-server && yarn test"
      }
    }
    stage('Deploy') { 
      steps {
        sh "cd /home/sifiso/node-server && pm2 start"
        sh "cd /home/sifiso/node-server && pm2 ls"
      }
    }
  }
}
