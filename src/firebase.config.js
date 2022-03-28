// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDtrOt9-ohDW_7g4ol35N_1bnIpemWfQlU',

  authDomain: 'house-marketplace-app-8c39d.firebaseapp.com',

  projectId: 'house-marketplace-app-8c39d',

  storageBucket: 'house-marketplace-app-8c39d.appspot.com',

  messagingSenderId: '532560228656',

  appId: '1:532560228656:web:d5d4dd159316379baed8f5',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
