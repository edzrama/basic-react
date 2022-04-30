import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import NavigationMenu from "./NavigationMenu";

const Navigation = () => 
{
const [showMenu, setShowMenu] = useState(false);  
const menuMask =<div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(false)}></div>;


return <nav><span><FontAwesomeIcon 
icon={faBars} 
onClick = {() => setShowMenu(!showMenu) }
/>
</span>
{showMenu && menuMask}
{showMenu && <NavigationMenu onClick={setShowMenu}/>}
</nav>;

};

export default Navigation;