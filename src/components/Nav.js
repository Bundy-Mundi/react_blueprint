import React from 'react';
import { NavLayout } from "components/appStyles/styles.tw";
import { Link } from "react-router-dom";
import { authService } from "initializeFirebase";


const Nav = ({isLoggedIn}) => {
    const handleSignOut = () => {
        authService.signOut();
    }
    return (
        <NavLayout>
            <ul>
            {
                isLoggedIn ? (
                    <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                    </>
                )
            }
            </ul>
        </NavLayout>
    )
};

export default Nav;