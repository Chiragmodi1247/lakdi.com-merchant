import firebase from 'firebase'
import 'firebase/firestore'
// firebase init goes here
const config = {
    apiKey: "AIzaSyCCOGVfLP3uHOTaEQ1kyvZRqk4jDwT5CfY",
    authDomain: "furniturefinal-639b5.firebaseapp.com",
    databaseURL: "https://furniturefinal-639b5.firebaseio.com",
    projectId: "furniturefinal-639b5",
    storageBucket: "furniturefinal-639b5.appspot.com",
    messagingSenderId: "938974571908",
    appId: "1:938974571908:web:35c5875eef1d2adda781d1"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase

// firebase collections
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const dummy = false;

export {
    db,
    googleProvider,
    facebookProvider,
    auth,
    dummy,
    currentUser,
    // usersCollection,
    // postsCollection,
    // commentsCollection,
    // likesCollection
}