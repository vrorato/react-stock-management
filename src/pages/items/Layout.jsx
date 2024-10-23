import { Link, Outlet, useLocation } from "react-router-dom";

//necessário para exibir as children dentro Outlet
export default function ItemsLayout(){
    const { pathname } = useLocation()
    return (
        <main>
            <h1>Stock Items</h1>
            <div className="tabs">
                <Link to="/items" className={`tab ${pathname === "/items" ? "active":""}`}>Todos os itens</Link>
                <Link to="/items/new" className={`tab ${pathname === "/items/new" ? "active":""}`}>Novo Item</Link>
            </div>
            <Outlet /> 
        </main>
    )
}