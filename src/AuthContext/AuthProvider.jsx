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
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);
  const auth = getAuth(app);
  const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const AxiosPublic = UseAxiosPublic();

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

  const updateUserProfile = (name, photo) => {
    setLoading(true);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth); 
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser); 
      if (currentUser) {
        // get token store clint

        AxiosPublic.post("/jwt", { email: currentUser.email }).then((res) => {
          // console.log(res.data.token);
          localStorage.setItem("access-token", res.data.token);
          setLoading(false);
        });
      } else {
        // todo : remove token
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      
    });
    return () => {
      unsubscribe();
    };
  }, [AxiosPublic]);

  const auth_info = {
    user,
    loading,
    setUser,
    signin,
    logOut,
    createUser,
    googleSignIn,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={auth_info}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
