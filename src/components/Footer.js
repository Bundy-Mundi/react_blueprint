import React from "react";
import {FooterLayout} from "./appStyles/styles.tw";
const Footer = () => {
    return(
        <FooterLayout>
            <p>&copy; {new Date().getFullYear()} Twitter Clone</p>
        </FooterLayout>
    )
}
export default Footer;