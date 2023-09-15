import { useParams } from "react-router-dom";
import { options } from "../api/Api";
import { useEffect, useState } from "react";
import { DetailsLoader } from "./DetailsLoader";



export function MainDetails(){
    const {id} = useParams()
    const [details,setDetails] = useState([])
    const [loading,setLoading] = useState(true)
    const [video,setVideo] = useState([])
    function getDetails(){
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options)
       .then(response => response.json())
       .then((response) => {
        setDetails(response)
        setLoading(false)
       })
       .catch(err => console.error(err));
    }
    function getVideo(){
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options)
       .then(response => response.json())
       .then((response) => {
        setVideo(response)
       })
       .catch(err => console.error(err));
    }
    useEffect(() => {
        getDetails()
        getVideo()
    },[])

    return(
        <>
        {loading ? <section className="w-full"><DetailsLoader /></section > : 
        <section className="mx-7 py-4 w-full mt-14 sm:mt-0 font-poppins">
        {video.results !== undefined && video.results.filter((trailer) => trailer.type == "Trailer").slice(0,1).map((videos,index) => {
            return(
                <iframe key={index} src={`https://www.youtube.com/embed/${videos.key}`} className="w-full rounded-2xl sm:h-96 h-52 mb-6">
                </iframe>
            )
        })}
         {(video.results !== undefined && video.results.filter((trailer) => trailer.type == "Trailer").slice(0,1).length === 0) && <div className="w-full flex justify-center items-center rounded-2xl sm:h-96 h-52 mb-6 bg-zinc-500 text-white ">
            <span className="font-medium align-middle">No trailer available</span>
            <svg className="fill-white ml-1 mb-1 w-4 max-w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><style>svg</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </div>
         
        }
        {details !== undefined && 
        <section className="flex justify-between flex-wrap">
        <div className="text-[#404040] font-medium text-2xl ">
            <div className="inline">
            <p className="inline" data-testid = "movie-title">{details.original_title}</p>
            </div>
            <div className="inline whitespace-nowrap">
            <span> • </span>
            <p className="whitespace-nowrap inline text-lg" data-testid = "movie-release-date">{details.release_date}</p>
            </div>
            <div className="inline whitespace-nowrap">
            <span> • </span>
            <p className="inline whitespace-nowrap">
            <span data-testid = "movie-runtime" className="text-lg">{details.runtime}</span>
            <span className="mr-4 text-lg"> min</span>
            </p>
            </div>
            <span> </span>
            <div className="inline text-[#b91c1c] align-middle text-sm whitespace-normal">
                {details.genres !== undefined && details.genres.map((genre,index) => {
                    return(
                        <span key={index} className="border-[#f8e7eb] mr-2 rounded-[15px] border-2 py-0.5 px-3">{genre.name}</span>
                    )
                })}
                
            </div>
        </div>
        <div className="font-medium">
            <img src="/assets/images/Star.svg" alt="star" className="inline w-5"/>
            <span className=" text-[#E8E8E8] align-middle text-lg">{(details.vote_average)?.toFixed(1)}</span>
            <span className="text-[#666666] text-lg">&nbsp;|  350k</span>
        </div>
        </section>}
        {details !== undefined && 
        <section className="flex xl:flex-row flex-col font-poppins justify-between ">
            <div className="xl:w-[40rem]">
                <p data-testid = "movie-overview" className="py-5 text-[#333333] ">{details.overview}</p>
                <p className="text-[#333333] mb-5">Director : <span className="text-[#be123c]">Joseph Kosinski</span></p>
                <p className="text-[#333333] mb-5">Writers :  <span className="text-[#be123c]">Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                <p className="text-[#333333]">Stars : <span className="text-[#be123c]">Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                <div className="flex border-r-[#c7c7c7] rounded-[10px] border-2 font-medium mt-6 mb-4">
                <span className="text-white bg-[#be123c] rounded-[10px] font-medium text-center py-2 px-3">Top rated movie #65</span>
                <button className="flex justify-between w-4/5 items-center">
                <span className="text-[#333333] px-3 py-2 text-center">Awards 9 nominations</span>
                <img src="/assets/images/arrow.svg" alt="arrow" className="self-center relative right-3 w-6" />
                </button>
                </div>
            </div>
            <div className="font-medium pt-5 xl:ml-3">
                <button className="bg-[#be123c] flex item-center rounded-lg w-full justify-center py-2">
                    <img src="/assets/images/tickets.svg" alt="ticket"className="mr-2"/>
                    <span className="text-white">See Showtimes</span>
                    </button>
                <button className="bg-[#be123c] bg-opacity-10 border-[#be123c] mt-3 border-[1px] flex item-center rounded-lg w-full justify-center py-2">
                <img src="/assets/images/List.svg" alt="ticket"className="mr-2"/>
                <span className="text-[#333333]">More watch options</span>
                </button>
                <img src="/assets/images/group.svg" alt="group" className="w-[25rem] xl:float-right max-w-full mt-8"/>
            </div>
        </section>}
        
        </section>}
        </>
    )
}