import './Li.css'


const Li = ({href, label}) =>{
    return(
        <>
        <li><a href={href}>{label}</a></li>
        </>
    )
}

export default Li