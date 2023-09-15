export function Error(prop){
    return(
        <section className="flex flex-col pt-20 w-full items-center justify-center font-poppins">
            <svg className="fill-black w-16 max-w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><style>svg</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            <p className="mt-6 text-center font-bold text-xl">Oops! No movies found for <span className="text-rose-700">{prop.input}</span></p>
            <p className=" text-gray-500 text-center">Please check spelling or try different keywords</p>
        </section>
    )
}