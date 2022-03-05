import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({children}) {
    return (
        <div className="content bg-skin-shades-1">
            <Navbar/>
                {children}
            
        </div>
    );
}