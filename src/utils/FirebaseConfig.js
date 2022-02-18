// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBo2feU4ctO43t6UFgwL8rJSbbg-Eum-VM',
  authDomain: 'snowcy-de912.firebaseapp.com',
  projectId: 'snowcy-de912',
  storageBucket: 'snowcy-de912.appspot.com',
  messagingSenderId: '775841471228',
  appId: '1:775841471228:web:a7500a86d1556da7725579'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);