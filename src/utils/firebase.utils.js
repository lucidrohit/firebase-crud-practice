import { db } from "../firebase/firebase.config";
import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"

const userCollectionRef = collection(db, "users")

export const getUsers = async () => {
    const usersList = await getDocs(userCollectionRef)
    return usersList.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export const createUser = async (user) => {
    await addDoc(userCollectionRef, user)
}

export const updateUser = async (id, updatedUser) => {
    const userDoc = doc(db, "users", id)
    await updateDoc(userDoc, updatedUser)
}

export const delDoc = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
}