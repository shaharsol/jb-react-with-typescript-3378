import AuthBox from '../../auth/auth-box/AuthBox';
import Home from '../../home/home/Home';
import AddProductQuick from '../../products/add-quick/AddProductQuick';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import Routing from '../routing/Routing';
import './Layout.css'

function Layout(): JSX.Element {
    return (
        <div className='Layout'>
            <header>
                <Header />
            </header>

            <nav>
                <Menu />
            </nav>

            <main>
                <div>
                    <Routing />
                </div>
                <div>
                    <AddProductQuick />
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
            
        </div>
    )
}

export default Layout;