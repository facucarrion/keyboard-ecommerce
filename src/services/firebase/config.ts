import firebase from 'firebase/compat/app'

const {
  NEXT_PUBLIC_FIREBASE_API_KEY: apiKey,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: authDomain,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: projectId,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: storageBucket,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
  NEXT_PUBLIC_FIREBASE_APP_ID: appId,
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: measurementId
} = process.env

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
}

export default firebase.initializeApp(firebaseConfig)
