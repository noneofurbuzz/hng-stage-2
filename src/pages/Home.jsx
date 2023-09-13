import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export function Home(){
    return(
        <>
        <Hero />
        <div className="mx-8 min-[384px]:mx-16 flex flex-col min-[450px]:flex-row justify-between font-DM-sans pb-10 pt-20">
            <p className="font-bold sm:text-4xl text-2xl">Featured Movie</p>
            <button className="flex items-center ">
                <p className="text-rose-700 sm:text-lg text-base">See more</p>
                <img src="/assets/images/chevron.svg" alt="arrow" className="self-center ml-2" />
            </button>
        </div>
        <section className="xlg:grid-cols-4 xmd:grid-cols-3 xsm:grid-cols-2 grid gap-16 min-[384px]:mx-16 grid-cols-1 mx-8 pb-20">
        <Card />
        </section>
        <Footer />
        </>
    )
}