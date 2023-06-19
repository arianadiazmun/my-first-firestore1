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
//db.collection('clothing').get()
//.then(collection => {
  //  const clothing = collection.docs.map(doc => ({...doc.data(),id: doc.id}));
  //  console.table(clothing)
//})
//.catch(console.error);

//Let's say I want to find all of the clothing items that are >= 79.99 //READ (SOME):
db.collection('clothing')
.where('price', '>=',79.99) 
.get()
.then(collection => {
    const clothing = collection.docs.map(doc => ({...doc.data(), id: doc.id}));
    console.table(clothing);
})
.catch(console.error)

//now let's get a single document by id (we'll use await, just to show)//READ ONE:
//const doc= await db.collection('clothing').doc('5H5lDxECrvYO6fAqr1Oa').get()
//.catch(console.error);


//const clothingItem ={...doc.data(), id: doc.id};
//console.table(clothingItem);

// let's update a single document:
//db.collection('clothing').doc('5H5lDxECrvYO6fAqr1Oa')
//.update({color:'pink', rating: 4.0})
//.then(doc=> console.log('Updated doc.'))
//.catch(console.error)

//Even though we SELDOM delete here's how: //DELETE:
//await db.collection('clothing').doc('5H5lDxECrvYO6fAqr1Oa')
//.delete() 
//console.log('DELETED')