import React from "react";

const Footer = () => 
{
const year = new Date().getFullYear();
return <div className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
<footer >Copyright ⓒ {year}
</footer>
</div>;
};

export default Footer;