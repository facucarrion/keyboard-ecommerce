import { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import FirebaseApp from '@/services/firebase/config'

const provider = new firebase.auth.GoogleAuthProvider()
const auth = FirebaseApp.auth()

type FirebaseUser = firebase.User | null

const useGoogleAuth = () => {
  const [user, setUser] = useState<FirebaseUser>(null)

  useEffect(() => {
    auth.onAuthStateChanged(async (user: FirebaseUser) => {
      setUser(user)
    })
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error))
  }
  const signOutFromGoogle = async () => await auth.signOut()

  return {
    user,
    signInWithGoogle,
    signOutFromGoogle
  }
}

export default useGoogleAuth
