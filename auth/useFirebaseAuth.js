import firebase from './firebaseConfig';
import { removeBlockVierAdminOnBoardCookie } from "./userCookies";

export default function useFirebaseAuth(){ 
    const clear = () => {
        removeBlockVierAdminOnBoardCookie();
    }
    const sendPasswordResetEmail = (email) =>
        firebase.auth().sendPasswordResetEmail(email);
        
    const signInWithEmailAndPassword = (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password);
    
    const createUserWithEmailAndPassword = (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password);
    
    const signOut = () => 
        firebase.auth().signOut().then(clear);

    const signOutOnBoard = () =>{
        firebase.auth().signOut();
    }
    return {
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        sendPasswordResetEmail,
        signOutOnBoard
    };
}