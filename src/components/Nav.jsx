export function Nav(prop){
    return(
        <>
        <section className="">
        <nav className="w-56 rounded-r-[3rem] border-black border-[1px] bg-white sticky sm:sticky min-h-screen grid content-evenly sm:top-0">
        <div className="flex items-center gap-4 ml-5">
                <img src="/assets/images/tv.svg" alt="logo" className="w-8"/>
                <h1 className="text-[#333333] font-bold text-xl font-DM-sans">MovieBox</h1>
                <button onClick = {prop.handleShow} className={`sm:hidden`}><img src="/assets/images/X.svg" alt="close" /></button>
        </div>
        <button className="flex items-center gap-4 py-4 ml-10 ">
                <img src="/assets/images/Home.svg" alt="home" className=""/>
                <h1 className="text-[#666666] font-semibold font-poppins text-base ">Home</h1>
        </button>
        <button className="flex items-center gap-4 pl-10 py-4 border-r-[#be123c] border-r-4 backdrop-opacity-10 bg-opacity-10 bg-[#be123c] ">
                <img src="/assets/images/movie-projector.svg" alt="projector" className=""/>
                <h1 className="text-[#be123c] font-semibold font-poppins text-base m-0">Movies</h1>
        </button>
        <button className="flex items-center gap-4 py-4 ml-10">
                <img src="/assets/images/tv-show.svg" alt="tv-show" className=""/>
                <h1 className="text-[#666666] font-semibold font-poppins text-base">TV Series</h1>
        </button>
        <button className="flex items-center gap-4 ml-10 py-4">
                <img src="/assets/images/Calendar.svg" alt="calender" className=""/>
                <h1 className="text-[#666666] font-semibold text-base font-poppins">Upcoming</h1>
        </button>
        <div className="font-poppins bg-[#f8e7eb] rounded-[20px] w-44 h-48 mx-auto border-[#be123c] border-[1px]">
            <p className="font-semibold text-sm text-[#333333] mx-4 mt-8 ">Play movie quizes and earn free tickets</p>
            <p className="text-xs text-[#666666] font-medium mx-4 mt-3">50k people are playing now</p>
            <button className="text-[#be123c] mt-2 px-4 py-2 bg-opacity-10 font-medium text-xs bg-[#be123c] rounded-[30px] mx-8">Start playing</button>
        </div>
        <button className="flex items-center gap-4 ml-10">
                <img src="/assets/images/Logout.svg" alt="logout" className=""/>
                <h1 className="text-[#666666] font-semibold text-base font-poppins">Log out</h1>
        </button>
        </nav>
    </section>
    
    </>
    )
}