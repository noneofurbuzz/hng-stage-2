import { useEffect,useState } from "react";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { options } from "../api/Api";
export function Home(){
    const [searchResults,setSearchResults] = useState([])
    const[input,setInput] = useState("")
    const [search,setSearch] = useState(
        {input : ""}
    )
    function handleSubmit(event){
        event.preventDefault()
        setInput(search.input)
      
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
    function Search(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search.input}&include_adult=false&language=en-US&page=1`,options)
       .then(response => response.json())
       .then((response) => {
        setSearchResults(response)
       })
       .catch(err => console.error(err));
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
        search = {search}
        searchResults = {searchResults}
        />
        <div className="mx-8 min-[384px]:mx-16 flex flex-col min-[450px]:flex-row justify-between font-DM-sans pb-10 pt-20">
            <p className="font-bold sm:text-4xl text-2xl">{input !== "" ? "Top Results" : "Featured Movie"}</p>
            <button className="flex items-center" onClick={backHome}>
                <p className="text-rose-700 sm:text-lg text-base">{input !== "" ? "Back to Home" : "See more"}</p>
                <img src="/assets/images/chevron.svg" alt="arrow" className="self-center ml-2" />
            </button>
        </div>
        <section className="xlg:grid-cols-4 xmd:grid-cols-3 xsm:grid-cols-2 grid gap-16 min-[384px]:mx-16 grid-cols-1 mx-8 pb-20">
        <Card 
          input = {input}
          search = {search}
          searchResults = {searchResults}
          />
        </section>
        <Footer />
        </>
    )
}