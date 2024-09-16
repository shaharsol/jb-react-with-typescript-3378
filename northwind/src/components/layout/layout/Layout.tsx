import Home from '../../home/home/Home';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Menu from '../menu/Menu';
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
                <Home />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;