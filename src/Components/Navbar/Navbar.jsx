import React from "react";

const NavBar = () => {

    return (
        <nav className="bg-red-300 h-20">
        <div className="bg-purple-200 w-full flex justify-end">
            <div className="pr-10"><a href="https://www.ups.com/track?loc=es_AR&requester=ST/">Seguir mis Pedidos Ups</a></div>
            <div className="pr-10"><a href="https://www.oca.com.ar/Seguimiento/BuscarEnvio/paquetes"> <img url=".\img\van.svg"/>Seguir mi Pedido OCA</a></div>
            <div className="pr-10"><a href="#">Desarrolladores</a></div>
        </div>
        <div className=" h-full bg-green-200 w-full flex justify-between items-center">
            <div className="w-1/5">logo </div>
            <div className="w-2/5 bg-pink-200">
                <input className=" h-10 w-full">
                </input>
            </div>
            <div ><a href="#">Mi cuenta</a></div>
            <div className="pr-10"><a href="#">Mi carrito</a></div>

        </div>
          
        </nav>
    )

}

export default NavBar