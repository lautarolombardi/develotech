import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../app/firebase';

// CREATE
export const createOrder = async(obj) => {
    const colRef = collection(db, 'orders');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateProduct = async (id, obj) => {
    const colRef = collection(db, 'products');
    await updateDoc(doc(colRef, id), obj);
}

// READ
export const getProducts = async ()  => {
    const colRef = collection(db, 'products');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getProductsByCondition = async (condition, value) => {
    const colRef = collection(db, 'products');
    const result = await getDocs(query(colRef, where(condition, '==', value)));
    return getArrayFromCollection(result);
}

export const getProductById = async (id) => {
    const colRef = collection(db, 'products');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'items');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}