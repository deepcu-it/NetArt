import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
           <div><FaPhone/><span>Tollfree 1800 200 1234</span></div>
           <div><FaFacebookSquare/><span><a href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a></span></div>
           <div><FaGlobe/><span><a href="https://www.crigroups.com">www.crigroups.com</a></span></div>
        </div>
    );
};

export default Footer;
