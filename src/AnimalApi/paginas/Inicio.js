import React,{useEffect, useState} from 'react';
import GetImgRazas from '../apis/GetImgRaza';
import GetRazas from '../apis/GetRazas';
import Modal from './components/Modal';

const Inicio = ({inicioPage,menu,setMenu,size}) => {
    const [razas,setRazas]=useState([]);
    const [imgRaza,setImgRaza]=useState(null);
    const [modal,setModal]=useState(false);
    const [imgDog,setImgDog]=useState("");
    const [id,setId]=useState("");
    
    const traerImgPerro=(raza)=>{
        setMenu(!menu)
        GetImgRazas(raza)
            .then((newRazas)=>{
                setImgRaza(newRazas.message);
            })
        inicioPage.current.scrollIntoView({block: "start", behavior: "smooth"});
    }
    
    useEffect(()=>{
        GetRazas()
            .then((newRazas)=>{
                setRazas(newRazas)
            })
        GetImgRazas(imgRaza)
            .then(newImg=>{
                setImgRaza(newImg.message);
            })
    },[])

    console.log(size);
    return (
        <>  
            {modal&&<Modal modal={modal} setModal={setModal} img={imgDog}/>}
            <div className="flex w-screen" >
                {menu&&
                    <ul className={`sm:flex flex-col ${size<=640&&"fixed top-0 animate-bar-l"} overflow-y-scroll sm:overflow-hidden pb-4 items-center w-48 h-full  bg-blueGray-800 text-white`}>
                    <p className="text-lg mb-10 text-center">Selecciona tu raza preferida</p>
                    {razas?.map(raza=>{
                        return(
                            <li className={`${raza===id&&"bg-white text-blueGray-800"} pl-3 w-40 cursor-pointer my-0.5 border-b hover:bg-white hover:text-blueGray-800`} key={raza} onClick={()=>{setImgRaza([]);traerImgPerro(raza);setId(raza)}}>
                                {raza}
                            </li>
                        )
                    })}
                    </ul>
                }
                <div className="sm:w-4/5 flex justify-center flex-wrap ">
                    {imgRaza?.map(img=>{
                        return <>
                        <img className="w-48 border-4 cursor-pointer hover:border-blueGray-400 h-40 ml-1 mb-1" src={img} alt="perro.jpg" onClick={()=>{setImgDog(img);setModal(!modal);}}/>
                        
                    </>
                    })}
                </div>
               
            </div>
        </>
    )
}

export default Inicio
