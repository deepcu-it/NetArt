import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
    const customStyle={
        height:"25px",
        width:"25px"
    }
    return (
        <div className="footer">
           <div><FaPhoneAlt style={customStyle}/><span>Tollfree 1800 200 1234</span></div>
           <div><FaFacebook style={customStyle}/><span><a href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a></span></div>
           <div><FaGlobe style={customStyle}/><span><a href="https://www.crigroups.com">www.crigroups.com</a></span></div>
        </div>
    );
};

export default Footer;
