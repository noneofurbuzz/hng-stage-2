import { useParams } from "react-router-dom"
import { Nav } from "../components/Nav"
import { useState } from "react"
import { MainDetails } from "../components/MainDetails"
import { Footer } from "../components/Footer"

export function Details(){
    const [show,setShow] = useState()
    function handleShow(){
        setShow(prev => !prev)
    }
    return(
        <section className="flex">
        {(window.innerWidth < 640) && 
        <section className="h-12 fixed z-10">
        <button onClick = {handleShow} className={`ml-7 fixed top-0 my-4 bg-dark-gray-1 backdrop-blur-[2px]`}><img src="/assets/images/Menu.svg" alt="menu" /></button>
        {(show == true || show == false) && <div className={`${show == true ? "slide-in-left " : show == false ? "slide-in-left-out" : ""} `}>
        <Nav handleShow = {handleShow} />
        </div>}
        
        </section>}
        {(window.innerWidth > 640) && 
        <Nav />} 
        <MainDetails />
        </section>
        
    )
}