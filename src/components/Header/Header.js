import { Menu } from "semantic-ui-react"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss"


export default function Header() {
    const currentPath = useLocation();

    const finalCurrentPath = currentPath.pathname.replace("/", "")

    const [activeItem, setactiveItem] = useState(finalCurrentPath)
    const navigate =useNavigate();

    const handleItemClick = (e, name) =>{
        setactiveItem(name.name)
        navigate(name.name)
    }

    return(
        <div className="header-menu">
            <Menu secondary>
                <Menu.Item active={ activeItem==="inicio"} name="inicio"  onClick={handleItemClick}/>
                <Menu.Item active={ activeItem==="series"} name="series"  onClick={handleItemClick}/>
                <Menu.Item active={ activeItem==="comics"} name="comics"  onClick={handleItemClick}/>
            </Menu>
        </div>
    )
};
