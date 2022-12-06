// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyDQyB-1ayfaKG5A1T5XGZQnsZm8ZA-bMwQ',
    authDomain: 'whatsapp-125cb.firebaseapp.com',
    projectId: 'whatsapp-125cb',
    storageBucket: 'whatsapp-125cb.appspot.com',
    messagingSenderId: '604882272534',
    appId: '1:604882272534:web:01c2c6e1f140869529d037',
    measurementId: 'G-PW4PM97GGJ',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return app;
};
