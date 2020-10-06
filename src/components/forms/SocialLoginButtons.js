import React from "react";
import { authService, firebaseInstance } from "initializeFirebase";

const SocialLoginButtons = () => {
    const onSocialClick = async(e) => {
        try {
          let name = e.target.name;
          let provider;
          if(name === "google"){ 
            provider = new firebaseInstance.auth.GoogleAuthProvider();
          }
          else if(name === "github"){ 
            provider = new firebaseInstance.auth.GithubAuthProvider();
          };
          const data = await authService.signInWithPopup(provider);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="social_login">
            <div className="flex items-center justify-center my-3">
                <span style={{ height: "1px" }} className="w-full bg-gray-900"></span>
                <p className="mx-4 font-semibold">OR</p>
                <span style={{ height: "1px" }} className="w-full bg-gray-900"></span>
            </div>
            <button className="google_btn" onClick={onSocialClick} name="google">Continue with Google</button>
            <button className="github_btn" onClick={onSocialClick} name="github">Continue with Github</button>
        </div>
    )
}

export default SocialLoginButtons;