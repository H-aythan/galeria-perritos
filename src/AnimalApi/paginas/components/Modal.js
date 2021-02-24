import React from 'react'



const Modal = ({modal,setModal,img}) =>{
    
    return (
        <div className="h-screen flex justify-center items-center w-screen bg-gray-800 bg-opacity-75 fixed top-0 right-0 z-40" onClick={()=>setModal(!modal)}>
            <div className="relative md:w-1/2 xl:w-1/3 bg-gray-500 flex flex-wrap " onClick={(e)=>e.stopPropagation()}>
               
                <button className="absolute hover:text-white right-4 top-2 float-right text-2xl focus:outline-none"
                    onClick={()=>setModal(!modal)}
                >
                    X
                </button>
               
                <img className="sm:w-full sm:h-full" src={img} alt="perro.jpg"/>               
            </div>
        </div>
    )
}

export default Modal
