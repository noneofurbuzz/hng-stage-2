import { useEffect, useState } from "react";
import { options } from "../api/Api";
import 'react-loading-skeleton/dist/skeleton.css'
import { Loader } from "./HeroLoader";

export function Hero(prop){
    const [trending,setTrending] = useState([])
    const [scroll,setScroll] = useState(false)

    const numbers = [1,2,3,4,5]
    function handleScroll(){
        if(window.scrollY >= 80){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
 
    }
    
    const [indexs,setIndex] = useState(1)

    function getTrending(){
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',options)
       .then(response => response.json())
       .then((response) => {
        setTrending(response)
        prop.setHeroLoading(false)
       })
       .catch(err => console.error(err));
    }

    useEffect(() => {
        getTrending()
    },[])
    window.addEventListener("scroll",handleScroll)

    return(
        <>
        {prop.heroLoading && <Loader />}
        {(prop.input !== "" ? prop.searchResults : trending).results !== undefined && (prop.input !== "" ? prop.searchResults : trending).results.slice(indexs-1,indexs).map((movies,index) => {
            return(
        <section key = {index} className={`font-DM-sans px-4 md:px-12 lg:px-20 min-h-screen sm:px-8 bg-black bg-cover bg-no-repeat bg-top `} style={{backgroundImage : `url(https://www.themoviedb.org/t/p/original/${movies.backdrop_path})`}}>
            {<header className={`flex items-center justify-between pt-4 xs:py-4 xs:fixed left-0 right-0 sm:px-8 md:px-12 lg:px-20 xs:px-4  top-0 backdrop-blur-[2px] transition-all ${scroll ? "bg-zinc-800 bg-opacity-40" : "bg-transparent"}`}>
                <div className="flex items-center gap-4">
                    <img src="/assets/images/tv.svg" alt="logo" className="w-10"/>
                    <h1 className="text-white font-bold sm:text-2xl">MovieBox</h1>
                </div>
                <form onSubmit={prop.handleSubmit} id="form1"  className="w-2/4 hidden xs:flex pl-3 py-1 rounded-md border-solid border-gray-300 border-2 text-white">
                    <input onChange={prop.handleChange} name="input" type="text" value={prop.search.input} className="bg-transparent w-full outline-none placeholder:text-white" placeholder="What do you want to watch?" autoComplete="off" spellCheck = "false"/>
                    <img src="/assets/images/search.svg" alt="search icon" className="mx-4"/>

                </form>
                <div className="flex items-center gap-4">
                    <button className="text-white font-bold">Sign in</button>
                    <button><img src="/assets/images/Menu.svg" alt="menu" /></button>
                </div>
            </header>}
            <form onSubmit={prop.handleSubmit} id="form" className={`w-full mt-4 xs:hidden flex pl-3 py-1 rounded-md border-solid border-gray-300 border-2 text-white  ${scroll ? "fixed bg-zinc-800 bg-opacity-40 -mx-4 -top-[1rem] scroll-smooth backdrop-blur-[2px] " :"top-0"}`}>
                    <input onChange={prop.handleChange} name="input" type="text" value={prop.search.input} className="bg-transparent w-full outline-none placeholder:text-white" placeholder="What do you want to watch?" autoComplete="off" spellCheck = "false"/>
                    <img src="/assets/images/search.svg" alt="search icon" className="mx-4"/>
            </form>
            <div className="flex flex-col xs:flex-row xs:justify-between justify-center min-h-[70vh] xs:h-screen items-center">
            <div className="w-96 max-w-full ">
                <h1 className="text-white font-bold text-5xl">{movies.title}</h1>
                <div className="flex py-4 gap-6">
                <div className="flex gap-2">
                <img src="/assets/images/imdb.svg" alt="imdb" />
                <span className="text-white text-xs">{(movies.vote_average * 10).toFixed(1)} / 100</span>
                </div>
                <div className="flex gap-2">
                <img src="/assets/images/tomato.svg" alt="tomato" />
                <span className="text-white text-xs">{(movies.vote_average * 10).toFixed(0)}%</span>
                </div>
                </div>
                <p className="text-white pb-4 font-medium">{movies.overview}</p>
                <button className="flex bg-rose-700 rounded-md px-4 items-center py-2 my-4">
                    <img src="/assets/images/Play.svg" alt="play button" />
                    <span className="text-white ml-2 font-bold">WATCH TRAILER</span>
                </button>
            </div>
            <div className="flex xs:flex-col absolute xs:static bottom-0 my-8">
                {numbers.map((number,index) => {
                    return(
                        <div key = {index} className="flex items-center mr-5">
                            {<hr className={`border-t-4 hidden xs:block rounded-md xs:mt-4 w-5 mr-3 border-white ${(indexs - 1) === index ? "visible" : "invisible"} `}/>}
                            <button className={`font-bold xs:mt-4 ${(indexs - 1) === index ? "text-white text-base" : "text-gray-400 text-xs"}`} onClick={(() => setIndex(number))}>{number}</button>
                        </div>
                    )
                })}
            </div>
            </div>
        </section>
         )
        })}
        </>
    )
}