import { useEffect,useState } from "react";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import 'react-loading-skeleton/dist/skeleton.css'
import { options } from "../api/Api";
import { Error } from "../components/Error";

export function Home(){
    const [searchResults,setSearchResults] = useState([])
    const[input,setInput] = useState("")
    const [cardLoading,setCardLoading] = useState(true)
    const [heroLoading,setHeroLoading] = useState(true)
    const [loading,setLoading] = useState(true)
    const [search,setSearch] = useState(
        {input : ""}
    )
    function handleSubmit(event){
        event.preventDefault()
        if (search.input == input){
            setLoading(true)
            setCardLoading(false)
            setHeroLoading(false)
        }
        else{
            setLoading(true)
            setCardLoading(true)
            setHeroLoading(true)
        }
          setInput(search.input)
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      
    }
    function handleChange(event){
        const {name,value} = event.target
        setSearch((prev) => {
            return{
                ...prev,
                [name] : value
            }
        })
    }
    function backHome(){
        setInput("")
        setSearch({
            input : ""
        })
    }
    async function Search(){
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.input}&include_adult=false&language=en-US&page=1`,options)
        if(res.status == 200){
            const data = await res.json()
            setSearchResults(data)
            setLoading(false)
            setCardLoading(false)
            setHeroLoading(false)
        }
        else{
            setCardLoading(false)
            setHeroLoading(false)
        }
        
       }
    
    useEffect(() => {
        Search()
    },[input])
    return(
        <>
        <Hero 
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        input = {input}
        setLoading = {setLoading}
        search = {search}
        searchResults = {searchResults}
        loading = {loading}
        heroLoading = {heroLoading}
        setHeroLoading = {setHeroLoading}
        />
        <div className="mx-8 min-[384px]:mx-16 flex flex-col min-[450px]:flex-row justify-between font-DM-sans pb-10 pt-20">
            <p className="font-bold sm:text-4xl text-2xl">{input !== "" ? "Top Results" : "Featured Movie"}{!loading && (input !== "" && searchResults.results.length === 0 && <span> (0)</span>)}</p>
            <button className="flex items-center" onClick={backHome}>
                <p className="text-rose-700 sm:text-lg text-base">{input !== "" ? "Back to Home" : "See more"}</p>
                <img src="/assets/images/chevron.svg" alt="arrow" className="self-center ml-2" />
            </button>
        </div>
        {input !== "" && searchResults.results.length === 0 ? <section className="mx-8 min-[384px]:mx-16 ">{!loading && <Error input = {input} setLoading = {setLoading} loading = {loading} />}</section>  :
        <section className="xlg:grid-cols-4 xmd:grid-cols-3 xsm:grid-cols-2 grid gap-16 min-[384px]:mx-16 grid-cols-1 mx-8 pb-20">
        <Card 
         input = {input}
         loading = {loading}
         search = {search}
         setLoading = {setLoading}
         searchResults = {searchResults} 
         cardLoading = {cardLoading}
         setCardLoading = {setCardLoading}
         handleSubmit = {handleSubmit}
         /> </section>
        }
        {<section className={`${!loading && (input !== "" && searchResults.results.length === 0 ? "bottom-0 fixed w-full" : "")}`}>
        <Footer />
        </section>}
        </>
    )
}