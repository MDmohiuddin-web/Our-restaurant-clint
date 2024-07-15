
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/Firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const googleProvider = new GoogleAuthProvider();


   const createUser=(email,password)=>{
    setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
   }
   
const signin=(email,password)=>{
    setLoading(true)
    return  signInWithEmailAndPassword(auth,email, password);
}


const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}


const logOut = () => {
    setLoading(true);
    return signOut(auth);
}





   const auth_info={user, setUser,loading, setLoading,signin,createUser,googleSignIn,logOut};
    return (
        <AuthContext.Provider value={{auth_info}}>
        {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;