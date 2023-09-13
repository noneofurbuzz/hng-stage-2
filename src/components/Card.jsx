import { useState,useEffect } from "react";
import { options } from "../api/Api";
import { NavLink } from "react-router-dom";

export function Card(){
    const [trending,setTrending] = useState([])
    const [favourite,setFavourite] = useState({})
    const [genrelist,setGenreList] = useState([])


    function getTrending(){
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
       .then(response => response.json())
       .then((response) => {
        setTrending(response)
       })
       .catch(err => console.error(err));
    }
   
    function getGenre(){
      fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(response => response.json())
      .then((response) => {
        setGenreList(response)
       })
      .catch(err => console.error(err));
    }
    useEffect(() => {
        getTrending()
        getGenre()
        
    },[])
    function addFavourite(index){
      setFavourite((favourite) => ({
        ...favourite,
        [index] : !favourite[index]
      }))
      console.log(favourite)
    }
    return(
        <>
        {trending.results !== undefined && trending.results.slice(0,10).map((movies,index) => {
            return(
        <section data-testid = "movie-card" key={index} className="mx-auto  w-full font-DM-sans">
        <button onClick = {() => addFavourite(index)} className = "active:scale-150 duration-700  ease-in-out float-right relative right-4 top-12 z-10"><svg width="30" className={`${(favourite[index])? "fill-rose-700" : "fill-[#f3f4f6]"}`} height="30" viewBox="0 0 30 30"  xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_2803_78)">
            <ellipse cx="15" cy="15.1842" rx="15" ry="14.6053" fillOpacity="0.5"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.17157 10.4828C9.73367 8.96185 12.2663 8.96185 13.8284 10.4828L15 11.6236L16.1716 10.4828C17.7337 8.96185 20.2663 8.96185 21.8284 10.4828C23.3905 12.0038 23.3905 14.4698 21.8284 15.9908L15 22.6396L8.17157 15.9908C6.60948 14.4698 6.60948 12.0038 8.17157 10.4828Z" />
            <defs>
            <filter id="filter0_b_2803_78" x="-2" y="-1.42105" width="34" height="33.2105" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2803_78"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2803_78" result="shape"/>
            </filter>
            </defs>
        </svg>
        </button>
            <NavLink to={`/movies/${movies.id}`} className="overflow-hidden w-full">
            <img src={`https://www.themoviedb.org/t/p/original/${movies.poster_path}`} alt="movie-poster" data-testid = "movie-poster" className="max-w-full w-full object-cover hover:scale-110 ease-in-out duration-700 transition-all h-[23rem]" />
            </NavLink>
            <p className="font-bold text-xs mt-2 text-gray-400"><span>USA, </span><span data-testid = "movie-release-date">{movies.release_date.slice(0,4)}</span></p>
            <p data-testid = "movie-title" className="font-bold mt-2 text-lg text-gray-900">{movies.title}</p>
            <div className="flex py-2 justify-between">
                <div className="flex gap-2">
                <img src="/assets/images/imdb.svg" alt="imdb" />
                <span className="text-gray-900 text-xs">{(movies.vote_average * 10).toFixed(1)} / 100</span>
                </div>
                <div className="flex gap-2">
                <img src="/assets/images/tomato.svg" alt="tomato" />
                <span className="text-gray-900 text-xs">{(movies.vote_average * 10).toFixed(0)}%</span>
                </div>
            </div>
            <p className="text-gray-400 font-bold text-xs">
            {(genrelist.genres !== undefined) && genrelist.genres.filter((genre) => (genre.id == movies.genre_ids[0])).map((genre,index) => {
            return(
              <span key={index}>{genre.name}{movies.genre_ids.length > 1 ? ", " : ""}</span>
            )})}
              {(genrelist.genres !== undefined) && genrelist.genres.filter((genre) => (genre.id == movies.genre_ids[1])).map((genre,index) => {
            return(
              <span key={index}>{genre.name}{movies.genre_ids.length > 2 ? ", " : ""}</span>
            )})}
              {(genrelist.genres !== undefined) && genrelist.genres.filter((genre) => (genre.id == movies.genre_ids[2])).map((genre,index) => {
            return(
              <span key={index}>{genre.name}</span>
            )})}
            </p>
        </section>
          )
        })}
        </>
    )
}