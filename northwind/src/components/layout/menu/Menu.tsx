import { NavLink } from 'react-router-dom';
import './Menu.css'
import ProductStats from '../../products/stats/ProductsStats';
import AuthBox from '../../auth/auth-box/AuthBox';

function Menu(): JSX.Element {
    return (
        <div className='Menu'>
            <div>
                <AuthBox />
            </div>
            {/* don't use!!! <a href="/home">home</a> */}
            <NavLink to="/home">home</NavLink>
            <NavLink to="/categories">categories</NavLink>
            <NavLink to="/products">products</NavLink>
            <NavLink to="/products/search">search</NavLink>
            <a href="#">employees</a>
            {/* don't use!!! <a href="/about">about us</a> */}
            <NavLink to="/about">about us</NavLink>
            <div>
                <ProductStats />
            </div>
        </div>
    )
}

export default Menu;