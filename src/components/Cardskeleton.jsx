import Skeleton from "react-loading-skeleton"

export function CardSkeleton({cards}){
    return(
        Array(cards).fill(0).map((item,index) => {
            return(
                <section key={index} className="w-full">
                    <Skeleton height={368}/>
                </section>
            )
        })
        
    )
}