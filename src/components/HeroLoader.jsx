export function Loader(){
    return(
        <section className="min-h-screen animate-pulse bg-zinc-500 px-4">
            <svg className="spinner fill-none" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" strokeWidth="5"></circle>
           </svg>
           {<header className="flex items-center justify-between pt-4 xs:py-4 xs:fixed left-0 right-0 sm:px-8 md:px-12 lg:px-20 xs:px-4  top-0 bg-dark-gray-1 backdrop-blur-[2px]">
                <div className="flex items-center gap-4">
                    <img src="/assets/images/tv.svg" alt="logo" className="w-10"/>
                    <h1 className="text-white font-bold sm:text-2xl">MovieBox</h1>
                </div>
                <form  id="form1"  className="w-2/4 hidden xs:flex pl-3 py-1 rounded-md border-solid border-gray-300 border-2 text-white">
                    <input name="input" type="text" className="bg-transparent w-full outline-none placeholder:text-white" placeholder="What do you want to watch?" autoComplete="off" spellCheck = "false"/>
                    <img src="/assets/images/search.svg" alt="search icon" className="mx-4"/>

                </form>
                <div className="flex items-center gap-4">
                    <button className="text-white font-bold">Sign in</button>
                    <button><img src="/assets/images/Menu.svg" alt="menu" /></button>
                </div>
            </header>}
            <form id="form" className="w-full mt-4 xs:hidden flex pl-3 sticky top-0 py-1 rounded-md border-solid border-gray-300 border-2 text-white">
                    <input name="input" type="text" className="bg-transparent w-full outline-none placeholder:text-white" placeholder="What do you want to watch?" autoComplete="off" spellCheck = "false"/>
                    <img src="/assets/images/search.svg" alt="search icon" className="mx-4"/>
            </form>
        </section>
    )
}