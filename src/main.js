import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYqPRH4gE4Fpg7L81aE9ca9EC0NVzl3G4",
  authDomain: "first-vue-app-bc705.firebaseapp.com",
  projectId: "first-vue-app-bc705",
  storageBucket: "first-vue-app-bc705.appspot.com",
  messagingSenderId: "476406294612",
  appId: "1:476406294612:web:577708a585904aa9e365c1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

app.use(router)

app.mount('#app')
