import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD_mxDakIsaYAzE4Cc6iEoUA6U9zNPzQLk',
  authDomain: 'e-commerce-f744d.firebaseapp.com',
  projectId: 'e-commerce-f744d',
  storageBucket: 'e-commerce-f744d.appspot.com',
  messagingSenderId: '415640045473',
  appId: '1:415640045473:web:1f87b1b119bd60d4cf6de0',
}

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export const createUser = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  return userCredential.user
}

export const logout = async () => {
  await signOut(auth)
}

export async function getCollection(name) {
  const products = await getDocs(collection(db, name))
  const res = []
  products.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data(),
    })
  })
  return res
}

export async function getProductById(id) {
  const productRef = await getDoc(doc(db, 'products', id))
  return {
    id: productRef.id,
    ...productRef.data(),
  }
}
