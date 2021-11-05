import Navbar from './Navbar';
import Footer from './Footer';


    const Layout =({children}) =>{
        return(
            <>
            <div>
            <Navbar />
            <Footer/>
            </div>
            <main>{children}</main>
            </>
        )
    }

export default Layout;
