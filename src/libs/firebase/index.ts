import { FirebaseApp, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: 'hland-b77ce.firebaseapp.com',
  projectId: 'hland-b77ce',
  storageBucket: 'hland-b77ce.appspot.com',
  messagingSenderId: '719838115362',
  appId: '1:719838115362:web:7052de131c400e61b07c7b',
};

// Initialize Firebase
let firebaseApp: FirebaseApp;

const getFirebaseApp = () => {
  if (!firebaseApp) firebaseApp = initializeApp(firebaseConfig);
  return firebaseApp;
};

export default getFirebaseApp;
