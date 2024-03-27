import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCQoUB-NyX36Ds1MsdhMF-U9lftG3CrmQs',
  authDomain: 'raketligaen.firebaseapp.com',
  projectId: 'raketligaen',
  storageBucket: 'raketligaen.appspot.com',
  messagingSenderId: '613741254561',
  appId: '1:613741254561:web:acfd9532cf171f0b8e9de0',
  measurementId: 'G-TZ8T90YXZN',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
