import "./NavBar.css"

function NavBar (){
    return(
        <>
         <header>
            <div className="brand">Logo</div>
            <nav>
                <ul>
                    <li><a href="">menu 01</a></li>
                    <li><a href="">menu 02</a></li>
                    <li><a href="">menu 03</a></li>
                </ul>
            </nav>
            <div className="callToAction"><button>BTN</button></div>
         </header>
        </>
    )
}

export default NavBar