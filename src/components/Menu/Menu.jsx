import Brand from "../Brand/Brand"
import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"
import './Menu.css'


const Menu = () =>{
    return(
        <>
        <header className="container">
            <Brand/>
            <NavBar/>
            <CartWidget/>
        </header>
        </>
    )
}

export default Menu