
import { collection, getDocs, getFirestore } from "firebase/firestore"
import app from "../plugins/firebaseConfig" // assuming default export is your FirebaseApp
import type { Projects } from "./types/projects"   // dùng alias ~ thay vì ../

const db = getFirestore(app) // get Firestore instance from FirebaseApp

export async function getProjectList(): Promise<Projects[]> {
  const querySnapshot = await getDocs(collection(db, "projects"))

  console.log("querySnapshot :", querySnapshot);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Projects, "id">)
  }))
}