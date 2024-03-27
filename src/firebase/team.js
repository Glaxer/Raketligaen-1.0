import { collection, addDoc } from "firebase/firestore"; 
import { db } from '@/firebase/index.js';

const collectionName = "teams";

async function create(name, shortName, logo) {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
          name: name,
          shortName: shortName,
          logo: logo
        });
        return docRef;
      } catch (e) {
        return "Error adding document: " + e;
      }
}

export {
    create
}