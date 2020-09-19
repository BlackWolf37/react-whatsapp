import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3t73vdeDBJYS13VXeM1x_oYjER-69_2Q",
  authDomain: "react-whatsapp-fda09.firebaseapp.com",
  databaseURL: "https://react-whatsapp-fda09.firebaseio.com",
  projectId: "react-whatsapp-fda09",
  storageBucket: "react-whatsapp-fda09.appspot.com",
  messagingSenderId: "41340406012",
  appId: "1:41340406012:web:af024a6f82e88b99ba2f79",
  measurementId: "G-NEV0TBBMMF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
