import { Outlet, Link, useLocation } from "react-router-dom"

export const Layout = () => {

    const location = useLocation()

  return (
    <div className="md:flex md:min-h-screen ">

        <aside className="md:w-1/4 bg-blue-900 px-5 py-10 md:text-left text-center">
            <h2 className="text-4xl font-black text-white text-center">CRM - Clientes</h2>
            <nav className="mt-10">
                <Link 
                    className={`${location.pathname === '/' ? 'text-emerald-500' : 'text-white'} text-xl block mt-2 hover:text-emerald-500 uppercase font-semibold`} 
                    to="/">Clientes
                </Link>
                <Link 
                    className={`${location.pathname === '/clientes/nuevo' ? 'text-emerald-500' : 'text-white'} text-xl block mt-2 hover:text-emerald-500 uppercase font-semibold`} 
                    to="/clientes/nuevo">Nuevo Cliente
                </Link>
            </nav>
        </aside>

        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet />
        </main>
    </div>
  )
}