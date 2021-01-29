import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDu_m5JaL7ebjuikMomiB1ncqaKBW4K_6Y",
    authDomain: "todo-app-9dc9a.firebaseapp.com",
    databaseURL: "https://todo-app-9dc9a-default-rtdb.firebaseio.com",
    projectId: "todo-app-9dc9a",
    storageBucket: "todo-app-9dc9a.appspot.com",
    messagingSenderId: "1006620518361",
    appId: "1:1006620518361:web:8b4b51b9036565f4981bc8",
    measurementId: "G-9H2GD0KGQH"
    }); 

    const db = firebaseApp.firestore();
        
    export default db;
