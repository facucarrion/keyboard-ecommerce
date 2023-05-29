import firebase from 'firebase/compat/app'

export type UserCredential = firebase.auth.UserCredential

export interface AuthContextType {
  user: firebase.User | null
  signInWithGoogle: () => Promise<UserCredential>
  signOutFromGoogle: () => Promise<void>
}
