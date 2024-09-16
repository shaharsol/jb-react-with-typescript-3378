import { NavLink } from 'react-router-dom';
import './Menu.css'

function Menu(): JSX.Element {
    return (
        <div className='Menu'>
            {/* don't use!!! <a href="/home">home</a> */}
            <NavLink to="/home">home</NavLink>
            <a href="#">products</a>
            <a href="#">employees</a>
            {/* don't use!!! <a href="/about">about us</a> */}
            <NavLink to="/about">about us</NavLink>
        </div>
    )
}

export default Menu;