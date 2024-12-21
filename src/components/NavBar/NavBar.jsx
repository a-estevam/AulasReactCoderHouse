import { List } from "@phosphor-icons/react";
import Li from "../Li/Li"
import './NavBar.css'


const NavBar = () =>{
    return(
        <>
        <ul className="navBar" >
            <Li href="#" label="ANÉIS" />
            <Li href="#" label="BRINCOS" />
            <Li href="#" label="CORRENTES" />
            <Li href="#" label="PULSEIRAS" />
        </ul>
        <List className="List" size={32} />
        </>
    )
}

export default NavBar