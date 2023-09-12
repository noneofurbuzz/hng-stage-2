export function Footer(){
    return(
        <section className="font-DM-sans">
            <div className="flex w-44 mx-auto justify-between">
                <a href="#bottom"><img src="/assets/images/facebook.svg" alt="facebook" className="" /></a>
                <a href="#bottom"><img src="/assets/images/instagram.svg" alt="instagram" /></a>
                <a href="#bottom"><img src="/assets/images/twitter.svg" alt="twitter" /></a>
                <a href="#bottom"><img src="/assets/images/youtube.svg" alt="youtube" /></a>
            </div>
            <div className="flex flex-col xxs:flex-row xxs:justify-between mx-auto py-6 text-gray-900 font-bold text-sm items-center xxs:w-96">
                <a href="#bottom" className="hover:underline">Conditions of Use</a>
                <a href="#bottom" className="hover:underline">Privacy & Policy</a>
                <a href="#bottom" className="hover:underline">Press Room</a>
            </div>
            <p className="text-gray-500 font-bold text-center text-sm pb-10">© 2023 MovieBox by Ugochi Ike</p>
        </section>
    )
}