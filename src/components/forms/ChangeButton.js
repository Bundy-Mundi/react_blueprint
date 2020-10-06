import React from "react";

const ChangeButton = ({ newAccount, setNewAccount }) => {
    return (
        <div className="flex w-full items-center justify-center mb-4">{newAccount ? "Already Have a Account?" : "New User?"}            
            <p className="anchor" onClick={() => setNewAccount(!newAccount)}>
            {newAccount ? "Log In" : "Sign Up"}
            </p>
        </div>
    )
};

export default ChangeButton;