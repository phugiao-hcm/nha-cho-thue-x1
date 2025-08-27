
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore"
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



// Lấy detail post theo id
export async function getPostDetail(id: string): Promise<Posts | null> {
  const docRef = doc(db, "posts", id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Posts, "id">)
    }
  } else {
    return null // document không tồn tại
  }
}
