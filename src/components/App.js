import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "initializeFirebase";
import Footer from "./Footer";
import CustomLoading from "./CustomLoading";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) { 
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  });
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : <CustomLoading/>}
      <Footer/>
    </>
  );
};

export default App;
