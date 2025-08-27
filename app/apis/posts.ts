
import { collection, getDocs, getFirestore } from "firebase/firestore"
import app from "../plugins/firebaseConfig" // assuming default export is your FirebaseApp
import type { Posts } from "./types/posts"   // dùng alias ~ thay vì ../

const db = getFirestore(app) // get Firestore instance from FirebaseApp

export async function getPostList(): Promise<Posts[]> {
  const querySnapshot = await getDocs(collection(db, "posts"))

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Posts, "id">)
  }))
}