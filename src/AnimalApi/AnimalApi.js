import React, { useEffect, useRef, useState } from 'react'
import Inicio from './paginas/Inicio'

const AnimalApi = () => {
    const inicioPage=useRef();
    const [menu,setMenu]=useState(true);
    const [size,setSize]=useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setSize(window.innerWidth);
            size<=640
                ?setMenu(false)
                :setMenu(true)
            })
    },[size])
    return (
        <div className="overflow-x-hidden ">
            <header className="px-2 sm:px-5 pb-2 w-full bg-blueGray-800 h-20 mb-5 text-white flex items-center justify-between" ref={inicioPage}>
                <h1 className="sm:text-2xl transform -rotate-6">Galeria de perros</h1>
                <p className="ml-2 text-center text-sm sm:text-lg">Tu galeria preferida para ver cachorros</p>
                <p className="bg-blueGray-800 rounded-full px-3 py-2 sm:hidden fixed bottom-5 right-7" onClick={()=>setMenu(!menu)}>&#9776;</p>
            </header>
            <Inicio inicioPage={inicioPage} menu={menu} setMenu={setMenu} size={size}/>
            
        </div>
    )
}

export default AnimalApi;
