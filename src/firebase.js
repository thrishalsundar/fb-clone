import firebase,{firestore} from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyDNSDeG0EKEAwAHpIhhMxhkQt-WH2MdDMQ",
  
    authDomain: "fb-clone-fde90.firebaseapp.com",
  
    projectId: "fb-clone-fde90",
  
    storageBucket: "fb-clone-fde90.appspot.com",
  
    messagingSenderId: "993163646161",
  
    appId: "1:993163646161:web:36d59ce114df662b5161f0",
  
    measurementId: "G-9R8XV1E77J"
  
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;