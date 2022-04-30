import React from "react";
import {Link} from "react-router-dom";

const NavigationMenu = (props) => {

return <div className="fixed bg-white top-[48px] left-0 w-full z-50 shadow">
<ul>
        <li>
          <Link to="/" className="text-blue-500 py-3 border-t border-b block" onClick={() => props.onClick(false)}>Home</Link>
        </li>
        <li>
        <Link to="/about" className="text-blue-500 py-3 border-b block" onClick={() => props.onClick(false)}>About</Link>
        </li>
      </ul>

</div>
};

export default NavigationMenu;