// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD1BX2k7bCFA8r56bEwkjGeefBDb-bmwWc',
  authDomain: 'refindapperal.firebaseapp.com',
  projectId: 'refindapperal',
  storageBucket: 'refindapperal.appspot.com',
  messagingSenderId: '60761635118',
  appId: '1:60761635118:web:c07aaa1e6c68af3d76a2bf',
  measurementId: 'G-4FWBTPM1P6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
