import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const authInfo = {};
const auth = getAuth(app);
const UserContext = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
