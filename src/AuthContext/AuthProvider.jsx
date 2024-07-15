import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  const updateUserProfile = (name, image) => {
    setLoading(true);
    
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const auth_info = {
    user,
    
    loading,
    
    signin,
    createUser,
    googleSignIn,
    logOut,updateUserProfile
  };
  return (
    <AuthContext.Provider value={auth_info }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
