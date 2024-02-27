import React from "react";
import CallIcon from '@mui/icons-material/Call';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageIcon from '@mui/icons-material/Language';
const Footer = () => {
    return (
        <div className="footer">
           <div><CallIcon/><span>Tollfree 1800 200 1234</span></div>
           <div><FacebookRoundedIcon/><span><a>www.facebook.com/cripumps</a></span></div>
           <div><LanguageIcon/><span><a>www.crigroups.com </a></span></div>
        </div>
    );
};

export default Footer