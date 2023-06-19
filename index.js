// import tools we need from firebase-admin library
import { initializeApp,cert } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore"

//import our credentials from secrets.js
import { creds } from "./secrets.js";

//connect to our Firebase project (need credentials)
initializeApp({
    credential: cert(creds),
});
//connect to the FireStore database (just ask)
const db = getFirestore();

// CRUD
//const cardigan ={
  //  brand: 'Gucci',
   // style: 'cardigan',
    //color: 'red',
   // size: 'M',
  //  price: 750.99
//}
//let's add a shirt to our clothing collection
//db.collection('clothing').add(cardigan)
// .then(doc => {
  //  console.log("Clothing addded:" + doc.id);
//})
//.catch(console.error);

//now that we have some data, let's READ (get) them
db.collection('clothing').get()
.then(collection => {
    const clothing = collection.docs.map(doc => ({...doc.data(),id: doc.id}));
    console.table(clothing);
})
.catch(console.error);


