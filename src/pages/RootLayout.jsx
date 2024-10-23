import { Link, Outlet } from "react-router-dom";
// necessario para exibvir as children - Outlet
export default function RootLayout(){
    return (
        <>
            <header>
                <Link to="/" className="logo">REACT STOCK</Link>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="items">Items</Link>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                Made with React + Javascript + Vite
            </footer>
        </>
    )
}