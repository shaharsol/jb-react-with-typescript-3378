import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
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
                <Main />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;