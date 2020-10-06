import React, { useState } from "react";
import { AppLayout } from "components/appStyles/styles.tw";
import LoginForm from "components/forms/LoginForm";
import SignupForm from "components/forms/SignupForm";

const Auth = () => {
  const [newAccount, setNewAccount] = useState(false);
  
  return (
    <AppLayout className={`${newAccount ? "h-auto" : "h-screen"} flex flex-col items-center justify-center py-10` }>
      <h1>{newAccount ? "Sign Up" : "Log In"}</h1>
      {newAccount ?  
          <SignupForm 
          newAccount={newAccount} 
          setNewAccount={setNewAccount}/>
            :
          <LoginForm 
          newAccount={newAccount} 
          setNewAccount={setNewAccount}/> 
      }
    </AppLayout>
  );
};

export default Auth;
