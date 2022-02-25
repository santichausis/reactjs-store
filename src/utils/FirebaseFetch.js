import { query, where, collection, getDoc, getDocs, doc } from 'firebase/firestore';
import { db } from './FirebaseConfig'

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        const categoryDocRef = doc(db, 'categories', idCategory);
        q = query(
            collection(db, 'data'),
            where('category', '==', categoryDocRef)
        );
    } else {
        q = query(collection(db, 'data'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, 'data', idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        let result = {
            id: idItem,
            ...docSnap.data()
        }
        return result;
    };
}