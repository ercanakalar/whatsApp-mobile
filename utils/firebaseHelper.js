// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const getFirebaseApp = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBYpg0eSsvmIf58mikM5Tb2uHxbOAwxjLI",
      authDomain: "whatsapp-web-c52d5.firebaseapp.com",
      projectId: "whatsapp-web-c52d5",
      storageBucket: "whatsapp-web-c52d5.appspot.com",
      messagingSenderId: "122003937879",
      appId: "1:122003937879:web:6fdd9f3edd3da67fdfa112",
      measurementId: "G-30E234RC9V",
      databaseURL: "https://whatsapp-web-c52d5-default-rtdb.firebaseio.com/"
    };
    
    // Initialize Firebase

    return initializeApp(firebaseConfig);
}
