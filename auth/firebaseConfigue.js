import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCLKRHCz4VIN8-Xi-KkvsdnVlat-suOfZw",
    authDomain: "blockvare-367518.firebaseapp.com",
    projectId: "blockvare-367518",
    storageBucket: "blockvare-367518.appspot.com",
    messagingSenderId: "113366855835",
    appId: "1:113366855835:web:86de66ecc7c14cdd75d63e",
    measurementId: "G-9H5JTEBQLM"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export default firebase;